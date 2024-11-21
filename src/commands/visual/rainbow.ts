import { Command } from '@commands/types.ts'

export const rainbow: Command = {
  name: 'rainbow',
  description: 'Toggle rainbow text mode 🌈',
  category: 'visual',
  execute: () => ({
    content: '🌈 Rainbow mode toggled! 🌈',
    effects: ['rainbow'],
  }),
}
