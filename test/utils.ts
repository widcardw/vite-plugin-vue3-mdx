import { writeFile } from 'fs/promises'

async function saveToExported(raw: string, fileName: string) {
  await writeFile(`test/__exported__/${fileName}.tsx`, raw)
}

export {
  saveToExported,
}
