import { Command } from '@commands/types.ts'
import { dedent } from '@/utils/string.ts'

export const about: Command = {
  name: 'about',
  description: 'Shows information about me',
  category: 'portfolio',
  execute: () => ({
    content: dedent`
        About me:
        ━━━━━━━━
        I'm a Full Stack Developer experienced in:
        - Web Application Development
        - API Design
        - Database Management

        My primary stack:
        - Frontend: TypeScript, React, Svelte
        - Backend: Golang, Python, Node.js/Bun.js, Java/Kotlin
        - Databases: PostgreSQL, MySQL, SQLite, MongoDB
        `,
  }),
}
