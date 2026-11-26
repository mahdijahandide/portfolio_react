import { Braces } from 'lucide-react'
import {
  siDart,
  siFirebase,
  siFlutter,
  siGraphql,
  siKotlin,
  siLaravel,
  siMysql,
  siOpenjdk,
  siPhp,
  siPostgresql,
  siPwa,
  siReact,
  siVuedotjs,
  siWebassembly,
  type SimpleIcon,
} from 'simple-icons'

const brands: Partial<Record<string, SimpleIcon>> = {
  Dart: siDart,
  Firebase: siFirebase,
  Flutter: siFlutter,
  'Flutter Web': siFlutter,
  GraphQL: siGraphql,
  Java: siOpenjdk,
  Kotlin: siKotlin,
  Laravel: siLaravel,
  MySQL: siMysql,
  PHP: siPhp,
  PostgreSQL: siPostgresql,
  PWA: siPwa,
  React: siReact,
  Vue: siVuedotjs,
  WASM: siWebassembly,
}

export default function TechnologyIcon({ name, size = 16 }: { name: string; size?: number }) {
  const brand = brands[name]
  if (!brand) return name === 'REST' ? <Braces size={size} aria-hidden="true" /> : null

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="technology-icon"
      fill="currentColor"
      style={{ color: `color-mix(in srgb, #${brand.hex} 65%, var(--text))` }}
    >
      <path d={brand.path} />
    </svg>
  )
}
