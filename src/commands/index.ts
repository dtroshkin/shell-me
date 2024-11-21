import { Command } from '@commands/types.ts'
import generalCommands from '@commands/general'
import portfolioCommands from '@commands/portfolio'
import visualCommands from '@commands/visual'

const commands: Record<string, Command> = {
  ...generalCommands,
  ...portfolioCommands,
  ...visualCommands,
}

export default commands
