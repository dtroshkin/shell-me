import { Command } from '@commands/types.ts'

export const poweroff: Command = {
  name: 'poweroff',
  description: 'Turn off the terminal (temporarily)',
  category: 'visual',
  execute: () => ({
    content: 'Goodbye...',
    effects: ['poweroff'],
  }),
}
