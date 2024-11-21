import { Command } from '@commands/types.ts'
import { SkillCategory, SKILLS } from '@/constants/skills.ts'
import { dedent } from '@/utils/string.ts'

export const generateSkillsOutput = (skills: SkillCategory[]): string => {
  const maxTitleLength = Math.max(...skills.map((cat) => cat.title.length))

  const rows: SkillCategory[][] = []
  for (let i = 0; i < skills.length; i += 3) {
    rows.push(skills.slice(i, i + 3))
  }

  const content = rows.map((row) => {
    const titles = row
      .map((cat) => `${cat.title}:`.padEnd(maxTitleLength + 5))
      .join('')

    const maxItems = Math.max(...row.map((cat) => cat.items.length))

    const itemRows = Array.from({ length: maxItems }, (_, index) => {
      return row
        .map((category) => {
          const item = category.items[index]
          return item
            ? `- ${item}`.padEnd(maxTitleLength + 5)
            : ' '.repeat(maxTitleLength + 5)
        })
        .join('')
    })

    return [titles, ...itemRows].join('\n')
  })

  return (
    dedent`
        Skills:
        ━━━━━━━
    ` + `\n${content.join('\n\n')}`
  )
}

export const skills: Command = {
  name: 'skills',
  description: 'Shows my technical skills',
  category: 'portfolio',
  execute: () => ({
    content: generateSkillsOutput(SKILLS),
  }),
}
