import './Suggestions.css'

interface SuggestionsProps {
  suggestions: string[]
  selectedIndex: number
  onSelectSuggestion: (suggestion: string) => void
}

export function Suggestions(
  {
    suggestions,
    selectedIndex,
    onSelectSuggestion,
  }: SuggestionsProps) {
  if (!suggestions.length) return null

  return (
    <div className="suggestions-container">
      {suggestions.map((suggestion, index) => (
        <div
          key={suggestion}
          className={`suggestion-item ${index === selectedIndex ? 'selected' : ''}`}
          onClick={() => onSelectSuggestion(suggestion)}
        >
          {suggestion}
        </div>
      ))}
    </div>
  )
}
