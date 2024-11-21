import { Command } from '@commands/types.ts'

export const glitch: Command = {
  name: 'glitch',
  description: 'Trigger a glitch in the Matrix',
  category: 'visual',
  execute: () => ({
    content: 'Reality is breaking...',
    effects: ['glitch'],
  }),
}
