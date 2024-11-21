import { Command } from '@commands/types.ts'
import { dedent } from '@/utils/string.ts'

export const welcome: Command = {
  name: 'welcome',
  description: 'Shows welcome message',
  category: 'general',
  execute: () => ({
    content: dedent`
            My name is Dmitry Troshkin, I'm a full-stack developer.
            This is my interactive portfolio terminal.
            
            Type 'help' to see available commands.
        `,
    effects: ['typing'],
  }),
}
