import { useState, useCallback, useEffect, type KeyboardEvent } from 'react'
import commands from '@/commands'

interface UseSuggestionsProps {
  value: string
  onSelect: (suggestion: string) => void
  onNavigateHistory: (direction: 'up' | 'down', currentCommand: string) => void
}

interface UseSuggestionsReturn {
  suggestions: string[]
  selectedIndex: number
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
  handleSuggestionSelect: (suggestion: string) => void
}

export function useSuggestions(
  {
    value,
    onSelect,
    onNavigateHistory,
  }: UseSuggestionsProps): UseSuggestionsReturn {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const updateSuggestions = useCallback((inputValue: string) => {
    if (!inputValue.trim()) {
      setSuggestions([])
      return
    }

    const commandNames = Object.keys(commands)
    const matchingCommands = commandNames.filter(cmd =>
      cmd.toLowerCase().startsWith(inputValue.toLowerCase()),
    )

    setSuggestions(matchingCommands)
    setSelectedIndex(0)
  }, [])

  useEffect(() => {
    updateSuggestions(value)
  }, [value, updateSuggestions])

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Tab':
        if (suggestions.length > 0) {
          e.preventDefault()
          onSelect(suggestions[selectedIndex])
          setSuggestions([])
        }
        break

      case 'ArrowUp':
      case 'ArrowDown':
        e.preventDefault()
        if (suggestions.length > 1) {
          if (e.key === 'ArrowUp') {
            setSelectedIndex(prev =>
              prev > 0 ? prev - 1 : suggestions.length - 1,
            )
          } else {
            setSelectedIndex(prev =>
              prev < suggestions.length - 1 ? prev + 1 : 0,
            )
          }
        } else {
          onNavigateHistory(
            e.key === 'ArrowUp' ? 'up' : 'down',
            value,
          )
        }
        break

      case 'Enter':
        if (suggestions.length > 0) {
          setSuggestions([])
        }
        break
    }
  }, [suggestions, selectedIndex, onSelect, onNavigateHistory, value])

  const handleSuggestionSelect = useCallback((suggestion: string) => {
    onSelect(suggestion)
    setSuggestions([])
  }, [onSelect])

  return {
    suggestions,
    selectedIndex,
    handleKeyDown,
    handleSuggestionSelect,
  }
}
