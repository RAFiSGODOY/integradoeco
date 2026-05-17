
import sharp from 'sharp'
import { readdir, rename, unlink } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const assetsDir = path.join(__dirname, '../src/assets')

/** @type {Record<string, { w: number, q: number }>} */
const rules = {
  'background.png': { w: 1920, q: 80 },
  'avaliacao.png': { w: 1600, q: 78 },
  'about-esg.png': { w: 960, q: 82 },
  'exemplo.png': { w: 960, q: 82 },
  'ambiental.png': { w: 900, q: 82 },
  'social.png': { w: 900, q: 82 },
  'governanca.png': { w: 900, q: 82 },
  'nivelbronze.png': { w: 280, q: 85 },
  'nivelprata.png': { w: 280, q: 85 },
  'nivelouro.png': { w: 280, q: 85 },
  '1.png': { w: 240, q: 90 },
  '4.png': { w: 280, q: 90 },
  '6.png': { w: 280, q: 90 },
  'ecoalternativa.png': { w: 240, q: 88 },
  'integrado.jpg': { w: 300, q: 85 },
}

const files = await readdir(assetsDir)

for (const name of files) {
  const rule = rules[name]
  if (!rule) continue

  const input = path.join(assetsDir, name)
  const ext = path.extname(name)
  const base = path.basename(name, ext)
  const outputWebp = path.join(assetsDir, `${base}.webp`)
  const backup = path.join(assetsDir, `${name}.bak`)

  const before = (await sharp(input).metadata()).size ?? 0

  await sharp(input)
    .resize({ width: rule.w, withoutEnlargement: true })
    .webp({ quality: rule.q })
    .toFile(outputWebp)

  await rename(input, backup)

  const after = (await sharp(outputWebp).metadata()).size ?? 0
  const saved = before > 0 ? Math.round((1 - after / before) * 100) : 0
  console.log(`${name} → ${base}.webp (~${saved}% menor). Original: ${name}.bak`)
}

console.log('\nAtualize imports em src/assets/images.js para .webp se usar este script.')
