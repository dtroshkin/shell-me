import { CommandResult } from '@core/types.ts'

export type CommandCategory = 'general' | 'portfolio' | 'visual' | 'system'

export interface Command {
  name: string
  description: string
  category: CommandCategory
  execute: (...args: string[]) => CommandResult
}

export interface CommandsByCategory {
  [key: string]: {
    title: string
    commands: Record<string, Command>
  }
}
