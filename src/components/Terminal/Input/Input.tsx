import { type FormEvent, forwardRef, useState } from 'react'
import { Suggestions } from './Suggestions'
import { useSuggestions } from '@/hooks/useSuggestions'
import './Input.css'
import { useCommandHistory } from '@hooks/useCommandHistory.ts'
import { HistoryEntry } from '@core/types.ts'

interface InputProps {
  onCommand: (command: string) => void
  history: HistoryEntry[]
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ history, onCommand }, ref) => {
    const [currentCommand, setCurrentCommand] = useState('')

    const { navigateHistory } = useCommandHistory({
      history,
      onSelect: setCurrentCommand
    })

    const {
      suggestions,
      selectedIndex,
      handleKeyDown,
      handleSuggestionSelect,
    } = useSuggestions({
      value: currentCommand,
      onSelect: setCurrentCommand,
      onNavigateHistory: navigateHistory
    })

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      if (!currentCommand.trim()) return
      onCommand(currentCommand.trim())
      setCurrentCommand('')
    }

    return (
      <div className="input-container">
        {suggestions.length > 0 && (
          <Suggestions
            suggestions={suggestions}
            selectedIndex={selectedIndex}
            onSelectSuggestion={handleSuggestionSelect}
          />
        )}
        <form onSubmit={handleSubmit} className="terminal-input">
          <span className="prompt">❯</span>
          <input
            ref={ref}
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="command-input"
            spellCheck="false"
            autoComplete="off"
          />
        </form>
      </div>
    )
  },
)

Input.displayName = 'Input'
