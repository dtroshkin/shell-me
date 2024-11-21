export const dedent = (strings: TemplateStringsArray, ...values: any[]) => {
  // 1. get a string from literal
  let result = strings.reduce((acc, str, i) => {
    return acc + str + (values[i] || '')
  }, '')

  // 2. find minimal padding (excluding empty strings)
  const match = result.match(/^[^\n\r]*$/gm)
  const indent = match
    ? Math.min(
        ...match
          .filter((line) => line.trim())
          .map((line) => line.match(/^\s*/)![0].length)
      )
    : 0

  // 3. remove this padding from each line
  return result
    .split('\n')
    .map((line) => line.slice(indent))
    .join('\n')
    .trim()
}
