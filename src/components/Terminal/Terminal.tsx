import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { HistoryEntry } from '@core/types.ts'
import effects from '@/effects'
import { Input } from '@components/Terminal/Input/Input.tsx'
import { Output } from '@components/Terminal/Output/Output.tsx'
import { TerminalCore } from '@core/terminal.ts'
import './Terminal.css'
import { ASCII_ART } from '@/constants/ascii.ts'

export default function Terminal() {
  const terminal = useMemo(() => new TerminalCore(), [])
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const terminalRef = useRef<HTMLDivElement>(null)
  const terminalContentRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const welcomeShownRef = useRef(false)

  useEffect(() => {
    if (!welcomeShownRef.current) {
      welcomeShownRef.current = true
      executeCommand('welcome', false)
    }
  }, [])

  useEffect(() => {
    inputRef?.current?.focus()
  }, [inputRef])

  useEffect(() => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop =
        terminalContentRef.current.scrollHeight
    }
  }, [history])

  const executeCommand = useCallback(
    (command: string, addCommandEntry = true) => {
      const newEntry: HistoryEntry = { type: 'command', content: command }
      const result = terminal.executeCommand(command)

      // add command entry
      if (addCommandEntry) setHistory((prev) => [...prev, newEntry])

      // check if effect updates history itself
      let preventDefaultAdd = false
      if (result.effects) {
        const effectResults = result.effects
          .map((name) => effects[name])
          .filter((v) => v)
          .map((effect) =>
            effect({ terminalRef, inputRef, setHistory, result })
          )
        preventDefaultAdd = effectResults.some((res) => res?.preventDefaultAdd)
      }
      if (!preventDefaultAdd) {
        setHistory((prev) => [
          ...prev,
          {
            type: 'output',
            content: result.content,
            error: result.error,
          },
        ])
      }

      setTimeout(() => {
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
      }, 0)
    },
    []
  )

  const handleTerminalClick = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className="terminal" ref={terminalRef} onClick={handleTerminalClick}>
      <div className="crt-overlay" />
      <div className="scan-lines" />
      <div className="vignette" />

      <div className="terminal-content" ref={terminalContentRef}>
        <pre className="ascii-art">{ASCII_ART}</pre>
        <Output history={history} />
        <Input ref={inputRef} history={history} onCommand={executeCommand} />
      </div>
    </div>
  )
}
