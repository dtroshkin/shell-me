import { CommandResult } from '@core/types.ts'
import commands from '@/commands'

export class TerminalCore {
  executeCommand(input: string): CommandResult {
    const [name, ...args] = input.trim().toLowerCase().split(' ')
    if (!name) return { content: '' }

    const cmd = commands[name]
    if (!cmd) {
      return {
        content: `Command not found: ${name}. Type 'help' for available commands.`,
        error: true,
        effects: ['shake'],
      }
    }

    try {
      return cmd.execute(...args)
    } catch (error) {
      console.error(error)
      return {
        content: `Error executing command: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error: true,
        effects: ['shake'],
      }
    }
  }
}
