const FOOTER_TEXT =
  'Conscious Real Intelligence™, AWASTHA™, Intuition Score Capability™ and the Threshold State are original concepts by Ajinkya Virgaonkar. Freely available. Educational framework — not medical or psychological treatment.';

export default function Footer() {
  return (
    <footer className="border-t border-black/10 mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <p className="reading-measure text-xs leading-relaxed text-[#1a1a1a]/60">
          {FOOTER_TEXT}
        </p>
      </div>
    </footer>
  );
}
