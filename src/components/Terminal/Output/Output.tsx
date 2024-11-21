import { HistoryEntry } from '@core/types.ts'
import './Output.css'

interface OutputProps {
  history: HistoryEntry[]
}

export function Output({ history }: OutputProps) {
  return (
    <div className="terminal-output">
      {history.map((entry, index) => (
        <div
          key={index}
          className={`history-entry ${entry.type} ${entry.error ? 'error' : ''}`}
        >
          {entry.type === 'command' ? (
            <div className="command-line">
              <span className="prompt">❯</span>
              <span>{entry.content}</span>
            </div>
          ) : (
            <pre>{entry.content}</pre>
          )}
        </div>
      ))}
    </div>
  )
}
