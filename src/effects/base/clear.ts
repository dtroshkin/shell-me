import { Effect } from '@effects/types.ts'

export const clear: Effect = ({ setHistory }) => {
  setHistory([])
}
