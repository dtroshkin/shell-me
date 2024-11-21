import { Effect } from '@effects/types.ts'

const TYPING_SPEED = 25

export const typing: Effect = ({ terminalRef, setHistory, result }) => {
  const terminal = terminalRef.current
  if (!terminal) return

  const text = result.content
  let displayedText = ''
  let currentIndex = 0

  terminal.classList.add('typing')

  const typeNextChar = () => {
    if (currentIndex < text.length) {
      displayedText += text[currentIndex]
      currentIndex++

      setHistory((prev) => {
        const newHistory = [...prev]
        newHistory[newHistory.length - 1] = {
          type: 'output',
          content: displayedText,
          error: result.error,
        }
        return newHistory
      })

      setTimeout(typeNextChar, TYPING_SPEED)
    } else {
      terminal.classList.remove('typing')
    }
  }

  setHistory((prev) => [
    ...prev,
    {
      type: 'output',
      content: '',
      error: result.error,
    },
  ])

  setTimeout(typeNextChar, TYPING_SPEED)

  return { preventDefaultAdd: true }
}
