import { ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';

const LINKS = [
  {
    label: 'Writing',
    url: 'https://medium.com/@ajinkya.virgaonkar',
  },
  {
    label: 'Practice tools',
    url: 'https://ajinkyavirg.github.io/conscious-real-intelligence/',
  },
];

export default function About() {
  return (
    <>
      <PageHeader eyebrow="VII. Provenance" title="About" />

      <Section>
        <div className="reading-measure">
          <p className="prose-serif">
            Conscious Real Intelligence™ was created by Ajinkya Virgaonkar.
            AWASTHA™, Intuition Score Capability™, and the Threshold State are
            original concepts within the framework.
          </p>
          <p className="prose-serif">
            The proposition at the centre of CRI: Consciousness is the missing
            foundational layer in artificial intelligence — not because it needs
            to be installed, but because the evolved human observer, who already
            carries Consciousness, is absent from the architecture. The CRI
            model — Evolved Observer ↔ Consciousness Layer ↔ AI = Real
            Intelligence — proposes that the quality of what AI produces is
            bounded by the quality of the Consciousness directing it.
          </p>
          <p className="prose-serif">
            The framework draws on the Vedic corpus as an empirical science of
            Consciousness: structured investigation directed inward over
            millennia, with results recorded in the Upanishads, the sound
            science of the Samaveda, and the Raga system of Gandharva Veda. It
            connects this ancient investigation to contemporary AI,
            neuroscience, and the observer problem in modern physics.
          </p>
          <p className="prose-serif">
            CRI is offered freely as an educational resource. There is nothing
            to purchase here and there never will be.
          </p>

          {/* Links */}
          <div className="mt-10">
            <ul className="space-y-1 list-none pl-0">
              {LINKS.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 py-2 text-[#1a1a1a] hover:text-[#2d2b6b] transition-colors duration-200"
                  >
                    <span className="prose-serif">{link.label}</span>
                    <ArrowUpRight
                      size={15}
                      className="text-[#1a1a1a]/30 group-hover:text-[#2d2b6b] transition-colors duration-200"
                    />
                    <span className="text-sm text-[#1a1a1a]/50 truncate">
                      {link.url.replace('https://', '')}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trademark */}
          <p className="prose-serif mt-10 text-sm text-[#1a1a1a]/60">
            Trademark: CONSCIOUS REAL INTELLIGENCE™ — USPTO Serial #99668381,
            Class 041
          </p>
        </div>
      </Section>
    </>
  );
}
