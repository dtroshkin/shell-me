import { Command } from '@commands/types.ts'

export const clear: Command = {
  name: 'clear',
  description: 'Clears terminal',
  category: 'general',
  execute: () => ({
    content: '',
    effects: ['clear'],
  }),
}
