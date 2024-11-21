export interface HistoryEntry {
  type: 'command' | 'output'
  content: string
  error?: boolean
}

export interface CommandResult {
  content: string
  error?: boolean
  effects?: string[]
}
