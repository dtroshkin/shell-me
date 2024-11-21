import { Command } from '@commands/types.ts'

export const disco: Command = {
  name: 'disco',
  description: 'Toggle disco mode 🕺',
  category: 'visual',
  execute: () => ({
    content: 'Disco mode toggled! Type "disco" again to turn off.',
    effects: ['disco'],
  }),
}
