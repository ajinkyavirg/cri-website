interface SanskritProps {
  devanagari: string;
  transliteration: string;
}

/**
 * Renders a Sanskrit term in Devanagari alongside its Latin transliteration.
 */
export default function Sanskrit({ devanagari, transliteration }: SanskritProps) {
  return (
    <span className="inline-flex flex-col sm:inline-flex sm:flex-row sm:items-baseline sm:gap-2">
      <span className="sanskrit leading-tight">{devanagari}</span>
      <span className="italic text-[#1a1a1a]/70 text-sm">
        {transliteration}
      </span>
    </span>
  );
}
