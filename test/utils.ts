import { writeFile } from 'fs/promises'

async function saveToExported(raw: string, fileName: string) {
  await writeFile(`test/__exported__/${fileName}.jsx`, raw)
}

async function importMdxComponent(fileName: string) {
  return (await import(`test/__exported__/${fileName}.jsx`)).default
}

export {
  saveToExported,
  importMdxComponent,
}
