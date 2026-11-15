import { ChartBar, Cpu, Database, FlowArrow, Robot, ShieldCheck, Sparkle, TreeStructure } from '@phosphor-icons/react';
import {
  siAnthropic,
  siClaude,
  siDocker,
  siFastapi,
  siGit,
  siGithubactions,
  siGooglecloud,
  siLangchain,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siOdoo,
  siOpenai,
  siOpenjdk,
  siPostgresql,
  siPython,
  siPytorch,
  siReact,
  siSpringboot,
  siTailwindcss,
  siTypescript,
  siVite,
  siWoocommerce,
} from 'simple-icons';

// Brand logos (Simple Icons, CC0). Order matters: the first keyword found in the label wins,
// so "React / Next.js" shows Next.js and "MySQL / PostgreSQL" shows MySQL.
const BRANDS = [
  ['langgraph', siLangchain],
  ['langchain', siLangchain],
  ['claude', siClaude],
  ['anthropic', siAnthropic],
  ['openai', siOpenai],
  ['llm', siOpenai],
  ['mysql', siMysql],
  ['pgvector', siPostgresql],
  ['postgres', siPostgresql],
  ['fastapi', siFastapi],
  ['pytorch', siPytorch],
  ['python', siPython],
  ['typescript', siTypescript],
  ['next', siNextdotjs],
  ['react', siReact],
  ['node', siNodedotjs],
  ['docker', siDocker],
  ['github actions', siGithubactions],
  ['cloud run', siGooglecloud],
  ['google cloud', siGooglecloud],
  ['spring', siSpringboot],
  ['java', siOpenjdk],
  ['tailwind', siTailwindcss],
  ['vite', siVite],
  ['woocommerce', siWoocommerce],
  ['odoo', siOdoo],
  ['git', siGit],
];

// Generic glyphs for concepts without a brand logo.
const GLYPHS = [
  ['power bi', ChartBar],
  ['rag', Database],
  ['function calling', FlowArrow],
  ['human-in-the-loop', ShieldCheck],
  ['etl', TreeStructure],
  ['sql', Database],
  ['erp', Cpu],
  ['automat', Robot],
];

function isDark(hex) {
  const n = parseInt(hex, 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 < 0.3;
}

export function TechIcon({ name, size = 16 }) {
  const label = name.toLowerCase();
  const brand = BRANDS.find(([key]) => label.includes(key))?.[1];

  if (brand) {
    // Near-black logos (Next.js, OpenAI…) would vanish on the dark theme: draw them in the text color.
    const fill = isDark(brand.hex) ? 'currentColor' : `#${brand.hex}`;
    return (
      <svg className='tech-icon' width={size} height={size} viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
        <path d={brand.path} fill={fill} />
      </svg>
    );
  }

  const Glyph = GLYPHS.find(([key]) => label.includes(key))?.[1] ?? Sparkle;
  return <Glyph className='tech-icon tech-icon--glyph' size={size} weight='duotone' aria-hidden='true' />;
}
