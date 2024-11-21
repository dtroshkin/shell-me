import { useState, useCallback, useEffect } from 'react'
import { HistoryEntry } from '@core/types.ts'

interface UseCommandHistoryProps {
  history: HistoryEntry[]
  onSelect: (command: string) => void
}

interface UseCommandHistoryReturn {
  navigateHistory: (direction: 'up' | 'down', currentCommand: string) => void
}

export function useCommandHistory(
  {
    history,
    onSelect,
  }: UseCommandHistoryProps): UseCommandHistoryReturn {
  const [historyIndex, setHistoryIndex] = useState<number>(-1)
  const [savedCommand, setSavedCommand] = useState<string>('')

  useEffect(() => {
    setHistoryIndex(-1)
  }, [history.length])

  const navigateHistory = useCallback((
    direction: 'up' | 'down',
    currentCommand: string,
  ) => {
    const commandHistory = history
      .filter(entry => entry.type === 'command')
      .map(entry => entry.content)

    if (commandHistory.length === 0) return
    if (historyIndex === -1) setSavedCommand(currentCommand)

    let newIndex = historyIndex
    if (direction === 'up') {
      if (historyIndex < commandHistory.length - 1) {
        newIndex = historyIndex + 1
      }
    } else {
      if (historyIndex > -1) {
        newIndex = historyIndex - 1
      }
    }

    setHistoryIndex(newIndex)

    if (newIndex === -1) {
      onSelect(savedCommand)
    } else {
      onSelect(commandHistory[commandHistory.length - 1 - newIndex])
    }
  }, [history, historyIndex, savedCommand, onSelect])

  return {
    navigateHistory,
  }
}
