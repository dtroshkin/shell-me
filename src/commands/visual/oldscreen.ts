import { Command } from '@commands/types.ts'

export const oldscreen: Command = {
  name: 'oldscreen',
  description: 'Switch to retro terminal mode',
  category: 'visual',
  execute: () => ({
    content: 'Retro mode toggled!',
    effects: ['oldscreen'],
  }),
}
