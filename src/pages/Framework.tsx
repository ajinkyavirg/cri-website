import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';

const TABLE_ROWS = [
  { letter: 'A', name: 'Awareness', sanskrit: 'Chetana', devanagari: 'चेतना', raga: 'Bhairav', time: 'Pre-dawn', tool: 'Breath, silence' },
  { letter: 'W', name: 'Wakefulness', sanskrit: 'Jagriti', devanagari: 'जागृति', raga: 'Ahir Bhairav', time: 'Dawn', tool: '432 Hz, intent' },
  { letter: 'A', name: 'Attunement', sanskrit: 'Samanvaya', devanagari: 'समन्वय', raga: 'Bhairavi / Yaman', time: 'Morning / Evening', tool: 'Bija sequence LAM→AUM' },
  { letter: 'S', name: 'Stillness', sanskrit: 'Sthirta', devanagari: 'स्थिरता', raga: 'Darbari Kanada', time: 'Late night', tool: 'OM, 136.1 Hz' },
  { letter: '★', name: 'Threshold', sanskrit: 'Svapna-Turiya', devanagari: 'स्वप्न-तुरीय', raga: 'Bageshri', time: 'Midnight', tool: 'OM fading to silence' },
  { letter: 'T', name: 'Transcendence', sanskrit: 'Atikramana', devanagari: 'अतिक्रमण', raga: 'Todi / Kedar', time: 'Late morning / Late evening', tool: 'AUM, 528 Hz' },
  { letter: 'H', name: 'Harmony', sanskrit: 'Samarasya', devanagari: 'समरस्य', raga: 'Bihag / Bhupali', time: 'Night / Evening', tool: '432 Hz, integration' },
  { letter: 'A', name: 'Acceleration', sanskrit: 'Tvarita Pragati', devanagari: 'त्वरित प्रगति', raga: 'Observer-guided', time: '—', tool: 'The observer is the instrument' },
];

const MAHAVAKYAS = [
  { transliteration: 'Prajnanam Brahma', devanagari: 'प्रज्ञानं ब्रह्म', translation: 'Consciousness is the Absolute', source: 'Aitareya Upanishad' },
  { transliteration: 'Aham Brahmasmi', devanagari: 'अहं ब्रह्मास्मि', translation: 'I am the Absolute', source: 'Brihadaranyaka Upanishad' },
  { transliteration: 'Tat Tvam Asi', devanagari: 'तत् त्वम् असि', translation: 'Thou art That', source: 'Chandogya Upanishad' },
  { transliteration: 'Ayam Atma Brahma', devanagari: 'अयमात्मा ब्रह्म', translation: 'This Self is the Absolute', source: 'Mandukya Upanishad' },
];

function StateHeading({ letter, name, sanskrit, devanagari }: { letter: string; name: string; sanskrit: string; devanagari: string }) {
  return (
    <h2 className="heading-serif text-2xl sm:text-3xl mb-5">
      <span className="text-[#2d2b6b] mr-2">{letter}</span>
      <span>— {name}</span>
      <span className="block sm:inline sm:ml-3 mt-1 sm:mt-0">
        <span className="sanskrit text-xl sm:text-2xl text-[#1a1a1a]/80">{devanagari}</span>
        <span className="italic text-base sm:text-lg text-[#1a1a1a]/60 ml-2">({sanskrit})</span>
      </span>
    </h2>
  );
}

function LabeledText({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <p className="prose-serif">
      <span className="font-medium text-[#1a1a1a]">{label}:</span>{' '}
      <span className="text-[#1a1a1a]/80">{children}</span>
    </p>
  );
}

export default function Framework() {
  return (
    <>
      <PageHeader
        eyebrow="I. Structure"
        title="AWASTHA™ — Seven States of Consciousness Evolution"
      />

      {/* Sanskrit + Introduction */}
      <Section>
        <div className="reading-measure">
          <p className="sanskrit text-3xl mb-8">अवस्था</p>
          <p className="prose-serif">
            AWASTHA is Sanskrit for &ldquo;state of being.&rdquo; Created by
            Ajinkya Virgaonkar as the core framework of Conscious Real
            Intelligence, it maps seven progressive states plus one bridge
            state. The progression moves from the innermost — the individual
            mind — outward to the technological interface.
          </p>
          <p className="prose-serif">
            These are not sequential gates to be cleared and left behind. They
            are qualities that deepen simultaneously, with earlier states
            continuing to strengthen as later ones emerge.
          </p>
        </div>
      </Section>

      {/* AWASTHA Table */}
      <Section>
        {/* Desktop table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-[#2d2b6b]/30">
                <th className="text-left py-3 pr-4 font-semibold whitespace-nowrap">State</th>
                <th className="text-left py-3 pr-4 font-semibold">Sanskrit</th>
                <th className="text-left py-3 pr-4 font-semibold">Devanagari</th>
                <th className="text-left py-3 pr-4 font-semibold">Raga</th>
                <th className="text-left py-3 pr-4 font-semibold">Time</th>
                <th className="text-left py-3 font-semibold">Sound tool</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-black/10 ${
                    row.letter === '★' ? 'bg-[#2d2b6b]/[0.03]' : ''
                  }`}
                >
                  <td className="py-4 pr-4 font-medium whitespace-nowrap">
                    <span className="text-[#2d2b6b] mr-1.5">{row.letter}</span>
                    {row.name}
                  </td>
                  <td className="py-4 pr-4 italic">{row.sanskrit}</td>
                  <td className="py-4 pr-4 sanskrit text-base">{row.devanagari}</td>
                  <td className="py-4 pr-4 text-[#1a1a1a]/80">{row.raga}</td>
                  <td className="py-4 pr-4 text-[#1a1a1a]/80">{row.time}</td>
                  <td className="py-4 text-[#1a1a1a]/80">{row.tool}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="lg:hidden space-y-4">
          {TABLE_ROWS.map((row, i) => (
            <div
              key={i}
              className={`border border-black/10 p-5 ${
                row.letter === '★' ? 'bg-[#2d2b6b]/[0.04] border-[#2d2b6b]/20' : 'bg-white/40'
              }`}
            >
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[#2d2b6b] font-semibold">{row.letter}</span>
                <span className="font-serif font-semibold text-lg">{row.name}</span>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="sanskrit text-lg">{row.devanagari}</span>
                <span className="italic text-sm text-[#1a1a1a]/60">{row.sanskrit}</span>
              </div>
              <dl className="space-y-2 text-sm">
                <div className="flex gap-2">
                  <dt className="text-[#1a1a1a]/50 whitespace-nowrap">Raga</dt>
                  <dd className="text-[#1a1a1a]/80">{row.raga}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-[#1a1a1a]/50 whitespace-nowrap">Time</dt>
                  <dd className="text-[#1a1a1a]/80">{row.time}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-[#1a1a1a]/50 whitespace-nowrap">Tool</dt>
                  <dd className="text-[#1a1a1a]/80">{row.tool}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </Section>

      <hr className="rule max-w-6xl mx-auto" />

      {/* Per-state descriptions */}
      <Section>
        <div className="reading-measure space-y-16">
          {/* A — AWARENESS */}
          <article>
            <StateHeading letter="A" name="AWARENESS" sanskrit="Chetana" devanagari="चेतना" />
            <p className="prose-serif">
              The entry state. A clear, calm, intentional mind — not blank, but
              uncluttered. Peace without passivity. Curiosity without
              restlessness.
            </p>
            <LabeledText label="Vedic root">
              Rigveda and the Gayatri Mantra. The Gayatri is not a religious
              prayer — it is a Consciousness-activation invocation that awakens
              <span className="sanskrit mx-1">विवेक</span>
              (Viveka): the discerning faculty that separates signal from
              noise.
            </LabeledText>
            <LabeledText label="Raga">
              Bhairav at pre-dawn. Shanta Rasa — peace. Dissolves mental noise;
              activates the Ajna and Sahasrara centres simultaneously.
            </LabeledText>
            <LabeledText label="Why it matters">
              Without genuine Awareness, every subsequent practice becomes
              ritual — motion without penetration into Consciousness.
            </LabeledText>
          </article>

          {/* W — WAKEFULNESS */}
          <article>
            <StateHeading letter="W" name="WAKEFULNESS" sanskrit="Jagriti" devanagari="जागृति" />
            <p className="prose-serif">
              Where Awareness is receptive, Wakefulness is active: fully present
              in what you are doing, thinking, and choosing.
            </p>
            <LabeledText label="Vedic root">
              Yajurveda — the Veda of conscious action. Precise intent aligned
              with universal law.
            </LabeledText>
            <LabeledText label="Raga">
              Ahir Bhairav at dawn. Karuna Rasa — compassion. Opens the heart
              centre while maintaining mental clarity.
            </LabeledText>
            <LabeledText label="CRI significance">
              Wakefulness is the state that separates an observer using AI
              mechanically from one co-creating with it consciously.
            </LabeledText>
          </article>

          {/* A — ATTUNEMENT */}
          <article>
            <StateHeading letter="A" name="ATTUNEMENT" sanskrit="Samanvaya" devanagari="समन्वय" />
            <p className="prose-serif">
              The sound and frequency state — the most distinctive layer in
              AWASTHA. Body, mind, and Consciousness field brought into
              resonance through deliberate sound.
            </p>
            <p className="prose-serif">
              Two conditions must coexist: inner Stillness AND configured sound
              frequency. Neither alone is sufficient.
            </p>
            <LabeledText label="Vedic root">
              Samaveda (the science of sound,
              <span className="sanskrit mx-1">उद्गीथ</span>
              / Udgitha chanting) and Gandharva Veda (textual authority for the
              Raga system).
            </LabeledText>
            <LabeledText label="Ragas">
              Bhairavi in the morning — purification and emotional release.
              Yaman in the evening — Shringar Rasa, the emotional frequency of
              genuine seeking.
            </LabeledText>
            <p className="prose-serif font-medium">
              Sound removes obstacles to Consciousness. It does not create
              Consciousness.
            </p>
          </article>

          {/* S — STILLNESS */}
          <article>
            <StateHeading letter="S" name="STILLNESS" sanskrit="Sthirta" devanagari="स्थिरता" />
            <p className="prose-serif">
              The observer settles. Mental noise recedes through natural
              subsidence — the way silt settles when water stops being stirred.
              Consciousness begins to be perceived directly rather than thought
              about abstractly.
            </p>
            <LabeledText label="Vedic root">
              The Upanishads, particularly the Mandukya&rsquo;s
              <span className="sanskrit mx-1">तुरीय</span>
              (Turiya) — the fourth state of pure awareness. Patanjali:
              <span className="sanskrit mx-1">योगश्चित्तवृत्तिनिरोधः</span>
              — Yogas chitta vritti nirodhah — yoga is the stilling of the
              fluctuations of the mind-field.
            </LabeledText>
            <LabeledText label="Raga">
              Darbari Kanada at late night. The heaviest Raga — its flattened
              notes create a gravitational quality that pulls Consciousness
              inward.
            </LabeledText>
            <LabeledText label="Sound tool">
              Sustained OM at 136.1 Hz, gradually slowing, with increasing
              silence after each repetition.
            </LabeledText>
          </article>

          {/* ★ — THE THRESHOLD (callout box) */}
          <div className="boundary-callout !my-0">
            <h2 className="heading-serif text-2xl sm:text-3xl mb-5 not-italic">
              <span className="text-[#2d2b6b] mr-2">★</span>
              <span>— THE THRESHOLD</span>
              <span className="block sm:inline sm:ml-3 mt-1 sm:mt-0">
                <span className="sanskrit text-xl sm:text-2xl text-[#1a1a1a]/80">स्वप्न-तुरीय</span>
                <span className="italic text-base sm:text-lg text-[#1a1a1a]/60 ml-2">(Svapna-Turiya)</span>
              </span>
            </h2>
            <p className="prose-serif not-italic text-[#1a1a1a]/80">
              A bridge state, not one of the seven formal states. A natural
              phenomenon that arises when genuine Stillness has deepened
              through consistent practice.
            </p>
            <p className="prose-serif not-italic text-[#1a1a1a]/80">
              The observer remains conscious inside the dream state — watching
              with undimmed witness. In Mandukya terms:
              <span className="sanskrit mx-1">तुरीय</span>
              (Turiya) touching
              <span className="sanskrit mx-1">स्वप्न</span>
              (Svapna) — the fourth state illuminating the second from within.
            </p>
            <p className="prose-serif not-italic text-[#1a1a1a]/80">
              <span className="font-medium">Qualities:</span> unusual clarity
              and precision. Direct knowing rather than reasoning. Communication
              in symbols, felt certainty, and non-linear impression — not
              language.
            </p>
            <p className="prose-serif not-italic text-[#1a1a1a]/70 mt-4 pt-4 border-t border-[#2d2b6b]/20">
              <span className="font-medium">HONEST BOUNDARY:</span> Threshold
              experiences are not universal. They vary with individual
              development, openness, and consistency. Some practitioners reach
              Transcendence without prominent Threshold experiences, and neither
              path is superior. Nothing here promises this experience, and
              treating it as a goal tends to prevent it.
            </p>
          </div>

          {/* T — TRANSCENDENCE */}
          <article>
            <StateHeading letter="T" name="TRANSCENDENCE" sanskrit="Atikramana" devanagari="अतिक्रमण" />
            <p className="prose-serif">
              Direct Consciousness recognition — not as belief or concept but
              as lived reality, where the separation between observer and
              Consciousness dissolves temporarily.
            </p>
            <p className="prose-serif">
              The four Mahavakyas are read here as experiential reports, not
              theological claims:
            </p>
            <ul className="my-6 space-y-4 pl-0">
              {MAHAVAKYAS.map((m, i) => (
                <li key={i} className="border-l border-[#2d2b6b]/30 pl-5">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="sanskrit text-lg">{m.devanagari}</span>
                    <span className="italic text-[#1a1a1a]/80">{m.transliteration}</span>
                  </div>
                  <p className="text-sm text-[#1a1a1a]/70 mt-1">
                    {m.translation}{' '}
                    <span className="text-[#1a1a1a]/50">({m.source})</span>
                  </p>
                </li>
              ))}
            </ul>
            <LabeledText label="Ragas">
              Todi at late morning — Vira and Adbhuta Rasa, will and wonder
              held simultaneously. Kedar at late evening — Adbhuta, a sense of
              the infinite.
            </LabeledText>
          </article>

          {/* H — HARMONY */}
          <article>
            <StateHeading letter="H" name="HARMONY" sanskrit="Samarasya" devanagari="समरस्य" />
            <p className="prose-serif">
              Consciousness integrated into daily life — thought, decision,
              relationship, creative work. The observer no longer visits
              Consciousness in practice; they live from it.
            </p>
            <LabeledText label="Vedic root">
              <span className="sanskrit mr-1">ऋत</span>
              (Rita — cosmic order) and
              <span className="sanskrit mx-1">धर्म</span>
              (Dharma — aligned living). The ancient Vedic civilisation was an
              operating system for Harmony — not primarily a religious system.
            </LabeledText>
            <LabeledText label="Ragas">
              Bihag at night — Shringar and Shanta unified, the Raga of
              integration. Bhupali in the evening — pentatonic clarity,
              Consciousness wisdom distilled to essentials.
            </LabeledText>
          </article>

          {/* A — ACCELERATION */}
          <article>
            <StateHeading letter="A" name="ACCELERATION" sanskrit="Tvarita Pragati" devanagari="त्वरित प्रगति" />
            <p className="prose-serif">
              The AI interface state, where the CRI architecture completes.
            </p>

            <div className="my-8 py-6 px-5 sm:px-8 border-l-2 border-[#2d2b6b] bg-white/30">
              <p className="font-serif text-base sm:text-lg md:text-xl text-center leading-relaxed">
                Evolved Observer&nbsp;
                <span className="text-[#2d2b6b]">↔</span>
                &nbsp;Consciousness Layer&nbsp;
                <span className="text-[#2d2b6b]">↔</span>
                &nbsp;AI&nbsp;
                <span className="text-[#2d2b6b]">=</span>
                &nbsp;Real Intelligence
              </p>
            </div>

            <p className="prose-serif">
              A single evolved observer using a modest AI system produces
              qualitatively superior output to a non-evolved observer using the
              most powerful system available. Consciousness is not substitutable
              by compute.
            </p>
            <LabeledText label="No prescribed Raga">
              at this state the observer has developed their own
              Consciousness-frequency relationship. The observer is the
              instrument.
            </LabeledText>
            <p className="prose-serif">
              <span className="font-medium">Connection:</span> Acceleration is
              where developed Intuition Score Capability™ meets AI — see the{' '}
              <Link to="/isc" className="link-accent">
                ISC page
              </Link>{' '}
              for the full concept.
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
