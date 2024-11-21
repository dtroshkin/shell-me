import { Command } from '@commands/types.ts'
import { dedent } from '@/utils/string.ts'

export const contact: Command = {
  name: 'contact',
  description: 'Shows my contacts',
  category: 'portfolio',
  execute: () => ({
    content: dedent`
      Contacts:
      ━━━━━━━━
      🌐 Github: github.com/dtroshkin
      📱 Telegram: @dmt_trshk
    `,
  }),
}
