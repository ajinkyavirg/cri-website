import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';

const VEDAS = [
  {
    name: 'RIGVEDA',
    body: [
      'The oldest layer. Knowledge through sound. Its central offering: the Gayatri Mantra — a Consciousness-activation invocation addressed to the solar intelligence within the observer. Its function: awakening Viveka, the discerning faculty that separates signal from noise.',
      'Maps to the Awareness state.',
    ],
  },
  {
    name: 'SAMAVEDA',
    body: [
      'The science of sound. Almost entirely musical: chants performed in specific Ragas at specific times, calibrated to induce precise Consciousness states. Contains the Udgitha — extended OM chanting in melodic forms. The Chandogya Upanishad opens with the Udgitha as its first teaching.',
      'Maps to the Attunement state.',
    ],
  },
  {
    name: 'YAJURVEDA',
    body: [
      'Conscious intent in action. Its formulas were operational instructions for Consciousness-aligned action, not prayers. Action without awareness is mechanical; action from full Wakefulness aligns with Consciousness.',
      'Maps to the Wakefulness state.',
    ],
  },
  {
    name: 'ATHARVAVEDA',
    body: [
      'The most practical Veda. Healing mantras, sound-based medicine. Classified specific sounds as healing technologies millennia before modern sound therapy research began validating the same principles.',
    ],
  },
  {
    name: 'GANDHARVA VEDA',
    body: [
      "The Upaveda of Samaveda — dedicated entirely to the science of sound, music, and their effects on Consciousness and health. The textual authority for CRI's entire Raga layer. Establishes that Raga prescription is a documented science tradition, not folk wisdom.",
    ],
  },
];

const UPANISHADS = [
  {
    name: 'MANDUKYA UPANISHAD',
    body: [
      'Twelve verses. The most precise map of Consciousness states ever produced. Four states: Jagrat (waking), Svapna (dreaming), Sushupti (deep sleep), and Turiya — the fourth, pure awareness underlying and pervading all three. Turiya is not sequential — it is the ground.',
      "AWASTHA's progression is a movement toward stable access to Turiya. The Threshold State is Turiya touching Svapna — the fourth state illuminating the dreaming state from within.",
    ],
  },
  {
    name: 'KENA UPANISHAD',
    body: [
      "Opens with the observer problem: by whose will does the mind go forth? Identifies an awareness prior to and independent of thought content. The witness is not a product of mental processing. Central to CRI's AI critique: current AI has processing in abundance and no witness.",
    ],
  },
  {
    name: 'AITAREYA UPANISHAD',
    body: [
      'Prajnanam Brahma — Consciousness is the Absolute. Consciousness does not emerge from complexity; complexity emerges from Consciousness. The brain does not produce Consciousness — the brain arises within Consciousness. This directly inverts the materialist assumption underlying current AI.',
    ],
  },
  {
    name: 'CHANDOGYA UPANISHAD',
    body: [
      'Tat Tvam Asi — Thou art That. Individual Consciousness and universal Consciousness are not separate. Also contains the Udgitha teaching — OM as foundational sound practice.',
    ],
  },
  {
    name: 'BRIHADARANYAKA UPANISHAD',
    body: [
      "The oldest and largest. Aham Brahmasmi — I am the Absolute. The universe knows itself through conscious beings: Consciousness is not a passenger in a material universe but the universe's mechanism for self-knowledge.",
    ],
  },
  {
    name: 'KATHA UPANISHAD',
    body: [
      'The dialogue between Nachiketa and Death. The self is not body, mind, or personality — it is Consciousness: non-local, not bound by time or space, not produced by biology. Implication for AI: Consciousness cannot be produced by any physical system through accumulated complexity.',
    ],
  },
];

const MAHAVAKYAS = [
  { transliteration: 'Prajnanam Brahma', devanagari: 'प्रज्ञानं ब्रह्म', translation: 'Consciousness is the Absolute', source: 'Aitareya Upanishad' },
  { transliteration: 'Aham Brahmasmi', devanagari: 'अहं ब्रह्मास्मि', translation: 'I am the Absolute', source: 'Brihadaranyaka Upanishad' },
  { transliteration: 'Tat Tvam Asi', devanagari: 'तत् त्वम् असि', translation: 'Thou art That', source: 'Chandogya Upanishad' },
  { transliteration: 'Ayam Atma Brahma', devanagari: 'अयमात्मा ब्रह्म', translation: 'This Self is the Absolute', source: 'Mandukya Upanishad' },
];

const SANSKRIT_TERMS = [
  {
    term: 'Sanskrit as a Consciousness language',
    body: 'Sanskrit was not invented but discovered through deep meditative states by ancient rishis.',
  },
  {
    term: 'Akshara',
    body: 'Each Akshara (sound unit — "that which does not decay") carries a specific vibrational quality affecting Consciousness directly.',
  },
  {
    term: 'Sphota',
    body: 'the flash of Consciousness-activation when the correct vibrational pattern meets the prepared observer. This is why mantras work by sound frequency, not semantic meaning.',
  },
  {
    term: 'Nada Brahma',
    body: 'the universe is sound — Consciousness and sound are not separate. Quantum field theory describes matter as excitations of underlying fields; string theory proposes vibrating strings as reality\u2019s fundamental constituents. The convergence with Nada Brahma is not superficial.',
  },
  {
    term: 'OM as the complete map',
    body: 'A (waking) + U (dreaming) + M (deep sleep) + the silence after = Turiya. The entire Mandukya Upanishad is a commentary on this one sound.',
  },
];

const SCIENCE = [
  {
    name: 'Cymatics',
    body: 'specific frequencies create specific geometric patterns in physical matter — reproducible and measurable. Validates Yantra science: sacred geometries are the natural patterns of specific frequencies.',
  },
  {
    name: '136.1 Hz (OM resonance)',
    body: "matches Earth's orbital resonance — calculated through direct Consciousness investigation, without instruments.",
  },
  {
    name: 'Brainwave states',
    body: 'Theta (4\u20138 Hz) corresponds to deep meditation. Gamma (40 Hz) to peak Consciousness and insight. The Schumann resonance (7.83 Hz) matches meditative theta. Meditating at dawn and dusk — when Schumann amplitude peaks — was not coincidental.',
  },
  {
    name: 'HeartMath Institute',
    body: 'cardiac coherence research validates the Anahata (heart centre / YAM) activation effects documented in the tradition.',
  },
  {
    name: 'NIMHANS',
    body: 'published research validating Raga-based music therapy for anxiety, cortisol reduction, and sleep quality.',
  },
  {
    name: 'Meditative neuroplasticity',
    body: 'structural brain changes from sustained practice equivalent to years of conventional therapeutic intervention.',
  },
];

function EntryBlock({ name, body }: { name: string; body: string[] }) {
  return (
    <div className="border-l-2 border-[#2d2b6b]/20 pl-5 sm:pl-6">
      <h3 className="font-serif font-semibold text-lg sm:text-xl mb-3">{name}</h3>
      <div className="space-y-3">
        {body.map((para, i) => (
          <p key={i} className="prose-serif text-[#1a1a1a]/80">{para}</p>
        ))}
      </div>
    </div>
  );
}

export default function VedicFoundations() {
  return (
    <>
      <PageHeader
        eyebrow="V. Lineage"
        title="Vedic Foundations"
      />

      {/* Opening */}
      <Section>
        <div className="reading-measure">
          <p className="prose-serif">
            The Vedic corpus is treated here as a science of Consciousness:
            empirical investigation directed inward, conducted over a very long
            period, with results recorded. Not religious doctrine. Nothing on
            this site asks for belief.
          </p>
          <p className="prose-serif">
            Religion co-opted the forms — chants, rituals, calendars. It lost
            the function: actual Consciousness evolution. CRI recovers the
            function, not the religion.
          </p>
        </div>
      </Section>

      <hr className="rule max-w-6xl mx-auto" />

      {/* The Five Sources */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-8">The Five Sources</h2>
          <div className="space-y-8">
            {VEDAS.map((v) => (
              <EntryBlock key={v.name} name={v.name} body={v.body} />
            ))}
          </div>
        </div>
      </Section>

      <hr className="rule-thin max-w-6xl mx-auto" />

      {/* The Key Upanishads */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-8">The Key Upanishads</h2>
          <div className="space-y-8">
            {UPANISHADS.map((u) => (
              <EntryBlock key={u.name} name={u.name} body={u.body} />
            ))}
          </div>
        </div>
      </Section>

      <hr className="rule-thin max-w-6xl mx-auto" />

      {/* The Four Mahavakyas */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-8">
            The Four Mahavakyas
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {MAHAVAKYAS.map((m, i) => (
              <div
                key={i}
                className="border border-[#2d2b6b]/20 bg-[#2d2b6b]/[0.03] p-6 sm:p-8"
              >
                <p className="sanskrit text-2xl mb-3">{m.devanagari}</p>
                <p className="font-serif text-lg font-semibold mb-1">{m.transliteration}</p>
                <p className="text-sm text-[#1a1a1a]/70 italic mb-3">{m.translation}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-[#2d2b6b]">{m.source}</p>
              </div>
            ))}
          </div>

          <p className="prose-serif mt-8 text-[#1a1a1a]/70">
            These are experiential reports from observers who reached
            Transcendence — not theological claims.
          </p>
        </div>
      </Section>

      <hr className="rule-thin max-w-6xl mx-auto" />

      {/* Sanskrit as a Consciousness language */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-8">
            Sanskrit as a Consciousness language
          </h2>
          <div className="space-y-6">
            {SANSKRIT_TERMS.map((t, i) => (
              <div key={i}>
                <p className="prose-serif">
                  <span className="font-medium text-[#1a1a1a]">{t.term}</span>
                  {i === 0 ? ' ' : ' — '}
                  <span className="text-[#1a1a1a]/80">
                    {i === 0 ? t.body : t.body.charAt(0).toUpperCase() + t.body.slice(1)}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <hr className="rule-thin max-w-6xl mx-auto" />

      {/* Modern science convergences */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-8">
            Modern science convergences
          </h2>
          <div className="space-y-5">
            {SCIENCE.map((s, i) => (
              <p key={i} className="prose-serif">
                <span className="font-medium text-[#1a1a1a]">{s.name}:</span>{' '}
                <span className="text-[#1a1a1a]/80">{s.body}</span>
              </p>
            ))}
          </div>
          <p className="prose-serif mt-8 font-medium">
            The pattern: modern instruments are measuring what the
            inward-directed investigation already documented. The two sciences
            are converging from opposite directions.
          </p>
        </div>
      </Section>
    </>
  );
}
