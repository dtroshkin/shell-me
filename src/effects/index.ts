import { Effect } from '@effects/types.ts'
import { clear } from '@effects/base/clear.ts'
import { shake } from '@effects/base/shake.ts'
import { typing } from '@effects/base/typing.ts'

const createTemporaryEffect =
  (className: string, duration: number): Effect =>
  ({ terminalRef }) => {
    const terminal = terminalRef.current
    if (!terminal) return

    terminal.classList.add(className)
    if (duration !== Infinity) {
      setTimeout(() => terminal.classList.remove(className), duration)
    }
  }

const createToggleEffect =
  (className: string): Effect =>
  ({ terminalRef }) => {
    const terminal = terminalRef.current
    if (!terminal) return

    if (terminal.classList.contains(className)) {
      terminal.classList.remove(className)
    } else {
      terminal.classList.add(className)
    }
  }

export const disco = createToggleEffect('disco')
export const matrix = createToggleEffect('matrix')
export const glitch = createTemporaryEffect('glitch', 2000)
export const poweroff = createTemporaryEffect('poweroff', 400)
export const oldscreen = createToggleEffect('oldscreen')
export const rainbow = createToggleEffect('rainbow')

const effects: Record<string, Effect> = {
  clear,
  shake,
  typing,
  disco,
  matrix,
  glitch,
  poweroff,
  oldscreen,
  rainbow,
}

export default effects
