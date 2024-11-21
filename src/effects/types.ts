import { Dispatch, RefObject, SetStateAction } from 'react'
import { CommandResult, HistoryEntry } from '@core/types.ts'

export interface State {
  terminalRef: RefObject<HTMLDivElement>
  inputRef: RefObject<HTMLInputElement>
  setHistory: Dispatch<SetStateAction<HistoryEntry[]>>
  result: CommandResult
}

interface CommandEffectResult {
  preventDefaultAdd?: boolean
}

export type Effect = (state: State) => CommandEffectResult | void
