import { Command, CommandCategory } from '@commands/types.ts'
import commands from '@/commands'
import { dedent } from '@/utils/string.ts'

const categories: Record<CommandCategory, { title: string }> = {
  general: { title: 'General Commands' },
  portfolio: { title: 'Portfolio Information' },
  visual: { title: 'Visual Effects' },
  system: { title: 'System Commands' },
}

const groupCommandsByCategory = (cmds: Record<string, Command>) => {
  const grouped: Record<CommandCategory, Record<string, Command>> = {
    general: {},
    portfolio: {},
    visual: {},
    system: {},
  }

  Object.entries(cmds).forEach(([name, cmd]) => {
    grouped[cmd.category][name] = cmd
  })

  return grouped
}

export const help: Command = {
  name: 'help',
  description: 'Shows available commands',
  category: 'general',
  execute: (commandName?: string) => {
    if (commandName) {
      const cmd = commands[commandName.toLowerCase()]
      if (!cmd) {
        return {
          content: `No help available for '${commandName}'`,
          error: true,
        }
      }
      return {
        content: dedent`
          Command: ${cmd.name}
          Category: ${categories[cmd.category].title}
          Description: ${cmd.description}
        `,
      }
    }

    const groupedCommands = groupCommandsByCategory(commands)
    const output = Object.entries(groupedCommands)
      .map(([category, categoryCommands]) => {
        if (Object.keys(categoryCommands).length === 0) return ''

        const commandList = Object.entries(categoryCommands)
          .map(([name, cmd]) => `  ${name.padEnd(12)} - ${cmd.description}`)
          .join('\n')

        return `${categories[category as CommandCategory].title}:\n${commandList}`
      })
      .filter(Boolean)
      .join('\n\n')

    const helpText = [
      'Available commands:\n',
      output,
      '\nType \'help <command>\' for more information about a specific command.',
    ].join('\n')

    return {
      content: helpText,
    }
  },
}
