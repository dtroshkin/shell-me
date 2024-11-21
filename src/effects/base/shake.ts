import { Effect } from '@effects/types.ts'

const shakeDuration = 500

export const shake: Effect = ({ terminalRef }) => {
  const terminal = terminalRef.current
  if (!terminal) return
  terminal.classList.add('shake')
  setTimeout(() => terminal.classList.remove('shake'), shakeDuration)
}
