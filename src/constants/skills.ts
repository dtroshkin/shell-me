export interface SkillCategory {
  title: string
  items: string[]
}

export const SKILLS: SkillCategory[] = [
  {
    title: 'Languages',
    items: ['TS/JS', 'Java/Kotlin', 'Python', 'Go', 'SQL'],
  },
  {
    title: 'Frameworks',
    items: ['React', 'Svelte', 'Node.js', 'Spring Boot'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL/MariaDB', 'SQLite', 'MongoDB', 'Redis'],
  },
  {
    title: 'Tools',
    items: ['VS Code', 'JB IDEs', 'Docker', 'Postman'],
  },
  {
    title: 'Other',
    items: ['Git', 'Docker', 'Linux', 'FFMpeg'],
  },
  {
    title: 'Practices',
    items: ['CI/CD'],
  },
]
