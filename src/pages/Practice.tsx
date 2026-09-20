import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';

const STATE_GUIDE = [
  { condition: 'Mind cluttered, restless, hard to settle', state: 'Awareness', begin: 'Bhairav, pre-dawn, plus Nadi Shodhana pranayama' },
  { condition: 'Settled but passive; going through motions', state: 'Wakefulness', begin: 'Ahir Bhairav at dawn, 432 Hz, conscious intent' },
  { condition: 'Ready for deliberate sound work', state: 'Attunement', begin: 'The full Bija sequence, morning' },
  { condition: 'Sound work established; seeking depth', state: 'Stillness', begin: 'Darbari Kanada, OM at 136.1 Hz, late night' },
  { condition: 'Stillness consistent over months', state: 'Threshold', begin: 'Bageshri at midnight — see honest boundary note' },
  { condition: 'Seeking direct recognition', state: 'Transcendence', begin: 'AUM as complete practice, 528 Hz' },
  { condition: 'Integrating into ordinary life', state: 'Harmony', begin: 'Bihag, Bhupali, ambient Raga listening' },
];

const RAGA_TABLE = [
  { raga: 'Bhairav', time: 'Pre-dawn', rasa: 'Shanta (peace)', state: 'Awareness', effect: 'Dissolves mental noise; clear receptive state' },
  { raga: 'Ahir Bhairav', time: 'Dawn', rasa: 'Karuna (compassion)', state: 'Awareness → Wakefulness', effect: 'Opens the heart while holding mental clarity' },
  { raga: 'Bhairavi', time: 'Morning', rasa: 'Karuna + Shanta', state: 'Attunement', effect: 'Purification and emotional release — a melting quality' },
  { raga: 'Todi', time: 'Late morning', rasa: 'Vira + Adbhuta', state: 'Transcendence', effect: 'Will and wonder held simultaneously' },
  { raga: 'Yaman', time: 'Evening', rasa: 'Shringar (longing)', state: 'Attunement', effect: 'The emotional frequency of genuine seeking' },
  { raga: 'Bhupali', time: 'Evening', rasa: 'Shanta + Shringar', state: 'Harmony', effect: 'Pentatonic clarity; most accessible entry' },
  { raga: 'Kedar', time: 'Late evening', rasa: 'Adbhuta (wonder)', state: 'Transcendence → Harmony', effect: 'A sense of the infinite' },
  { raga: 'Bihag', time: 'Night', rasa: 'Shringar + Shanta', state: 'Harmony', effect: 'Integration, wholeness' },
  { raga: 'Darbari Kanada', time: 'Late night', rasa: 'Shanta (gravity)', state: 'Stillness', effect: 'The heaviest Raga; pulls Consciousness inward' },
  { raga: 'Bageshri', time: 'Midnight', rasa: 'Shanta (absorption)', state: 'Threshold', effect: 'Deep meditative absorption' },
];

const BIJA_TABLE = [
  { num: '1', chakra: 'Root', sanskrit: 'Muladhara', sanskritDev: 'मूलाधार', bija: 'LAM', freq: '256 Hz', quality: 'Groundedness. Without it higher states become unstable' },
  { num: '2', chakra: 'Sacral', sanskrit: 'Svadhisthana', sanskritDev: 'स्वाधिष्ठान', bija: 'VAM', freq: '288 Hz', quality: 'Flow, creativity, emotion without overwhelm' },
  { num: '3', chakra: 'Solar plexus', sanskrit: 'Manipura', sanskritDev: 'मणिपुर', bija: 'RAM', freq: '320 Hz', quality: 'Will and intent — the fire that sustains practice' },
  { num: '4', chakra: 'Heart', sanskrit: 'Anahata', sanskritDev: 'अनाहत', bija: 'YAM', freq: '341 Hz', quality: 'The pivot: below it personal, above it universal' },
  { num: '5', chakra: 'Throat', sanskrit: 'Vishuddha', sanskritDev: 'विशुद्ध', bija: 'HAM', freq: '384 Hz', quality: 'Sound as Consciousness tool; clears the expression channel' },
  { num: '6', chakra: 'Third eye', sanskrit: 'Ajna', sanskritDev: 'आज्ञा', bija: 'OM', freq: '426 Hz / 136.1 Hz', quality: 'Intuitive, non-local perception' },
  { num: '7', chakra: 'Crown', sanskrit: 'Sahasrara', sanskritDev: 'सहस्रार', bija: 'AUM / Silence', freq: '480 Hz+', quality: 'Pure Consciousness' },
];

const FREQ_TABLE = [
  { freq: '136.1 Hz', source: 'OM natural resonance', use: "Simultaneous Muladhara grounding and Ajna awareness. Corresponds to Earth's orbital period" },
  { freq: '432 Hz', source: 'Ancient tuning standard', use: 'Coherence; natural harmonic relationships' },
  { freq: '528 Hz', source: 'Solfeggio / Atharvaveda healing lineage', use: 'Deep calm' },
  { freq: '40 Hz', source: 'Gamma brainwave range', use: 'Peak Consciousness states, insight' },
  { freq: '7.83 Hz', source: 'Schumann resonance', use: "Earth's electromagnetic pulse; deep meditative theta" },
];

const BINAURAL = [
  { beat: '4 Hz', desc: 'deep theta, for Stillness practice' },
  { beat: '7 Hz', desc: 'theta, meditative and creative states' },
  { beat: '10 Hz', desc: 'alpha, a gentle entry state' },
  { beat: '40 Hz', desc: 'gamma, at Transcendence' },
];

const DAILY_PROTOCOL = [
  {
    time: 'Pre-dawn to dawn — Awareness into Wakefulness',
    steps: [
      'Bhairav, listened to or held in contemplation',
      'Nadi Shodhana pranayama, five to ten minutes',
      'The Gayatri Mantra — three, nine, or twenty-seven repetitions with full conscious intent',
      'Move to Ahir Bhairav; set the day\u2019s intent deliberately',
    ],
  },
  {
    time: 'Morning — Attunement',
    steps: [
      'The complete Bija sequence, LAM through to silence',
      'Seven repetitions minimum per Bija; twenty to thirty minutes',
      'Bhairavi during or afterward, for purification',
    ],
  },
  {
    time: 'Evening — Attunement into Stillness',
    steps: [
      'Yaman, twenty to thirty minutes, passive and undistracted',
      'Move into silent sitting and let the sound dissolve inward',
      'OM chanting, gradually slowing; rest in the silence that follows',
    ],
  },
  {
    time: 'Late night to midnight — Stillness into Threshold',
    steps: [
      'Darbari Kanada',
      'For established practice only: Bageshri at midnight',
      'No analysis and no journaling in this window. Simply receive.',
    ],
  },
];

export default function Practice() {
  return (
    <>
      <PageHeader
        eyebrow="III. Application"
        title="Practice"
        subtitle="Free sound tools drawn from Nada Yoga and the Vedic science of sound, arranged by AWASTHA™ state. Nothing here is for sale, and nothing here asks for belief."
      />

      {/* The governing principle */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-6">The governing principle</h2>
          <p className="prose-serif">
            Sound removes obstacles to Consciousness. It does not create
            Consciousness, because Consciousness is already present. Every
            practice on this page works by subtraction rather than addition —
            clearing what stands in the way rather than installing something
            new.
          </p>
          <p className="prose-serif">
            That principle has a practical consequence, and it is the most
            misunderstood point in the whole framework:
          </p>

          <div className="boundary-callout">
            <p>
              Attunement requires two conditions held at once — inner Stillness
              and configured sound frequency. Neither alone is sufficient.
            </p>
            <p className="mt-3">
              Frequency without Stillness is listening to music. Stillness
              without configured frequency is ordinary meditation. Both have
              value. Neither is Attunement.
            </p>
          </div>
        </div>
      </Section>

      <hr className="rule max-w-6xl mx-auto" />

      {/* Before you begin */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-6">Before you begin</h2>
          <div className="space-y-5">
            <p className="prose-serif">
              <span className="font-medium">Consistency over duration.</span>{' '}
              A short daily practice does more than an occasional long session.
              Ten minutes every morning will take you further than three hours
              on a Sunday.
            </p>
            <p className="prose-serif">
              <span className="font-medium">Start where you are.</span> These
              states are qualities that deepen simultaneously, not gates to be
              cleared in order. Beginning with the Bija sequence when Awareness
              is still unsteady tends to produce ritual — motion without
              penetration. If the mind is loud, start with breath and Bhairav
              and stay there for some weeks.
            </p>
            <p className="prose-serif">
              <span className="font-medium">Receive rather than analyse.</span>{' '}
              Particularly in late-night practice. The urge to interpret an
              experience while it is happening ends it.
            </p>
            <p className="prose-serif">
              <span className="font-medium">Headphones for binaural work only.</span>{' '}
              Ragas, Bija chanting, and OM are better on speakers or unaided
              voice.
            </p>
          </div>
        </div>
      </Section>

      <hr className="rule-thin max-w-6xl mx-auto" />

      {/* Which state are you working with? */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-6">
            Which state are you working with?
          </h2>

          {/* Desktop table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[#2d2b6b]/30">
                  <th className="text-left py-3 pr-4 font-semibold align-top">If this describes you now</th>
                  <th className="text-left py-3 pr-4 font-semibold align-top whitespace-nowrap">Work with</th>
                  <th className="text-left py-3 font-semibold align-top">Begin with</th>
                </tr>
              </thead>
              <tbody>
                {STATE_GUIDE.map((row, i) => (
                  <tr key={i} className="border-b border-black/10">
                    <td className="py-4 pr-4 leading-relaxed">{row.condition}</td>
                    <td className="py-4 pr-4 font-medium text-[#2d2b6b] whitespace-nowrap">{row.state}</td>
                    <td className="py-4 leading-relaxed text-[#1a1a1a]/80">{row.begin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="sm:hidden space-y-4">
            {STATE_GUIDE.map((row, i) => (
              <div key={i} className="border border-black/10 p-5 bg-white/40">
                <p className="text-xs text-[#1a1a1a]/50 mb-1">If this describes you now</p>
                <p className="mb-3 leading-relaxed">{row.condition}</p>
                <p className="text-sm text-[#2d2b6b] font-medium mb-2">{row.state}</p>
                <p className="text-xs text-[#1a1a1a]/50 mb-1">Begin with</p>
                <p className="text-sm leading-relaxed text-[#1a1a1a]/80">{row.begin}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <hr className="rule-thin max-w-6xl mx-auto" />

      {/* Raga prescriptions by time of day */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-6">
            Raga prescriptions by time of day
          </h2>

          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[#2d2b6b]/30">
                  <th className="text-left py-3 pr-3 font-semibold whitespace-nowrap">Raga</th>
                  <th className="text-left py-3 pr-3 font-semibold whitespace-nowrap">Time</th>
                  <th className="text-left py-3 pr-3 font-semibold">Rasa</th>
                  <th className="text-left py-3 pr-3 font-semibold">AWASTHA State</th>
                  <th className="text-left py-3 font-semibold">Effect</th>
                </tr>
              </thead>
              <tbody>
                {RAGA_TABLE.map((row, i) => (
                  <tr key={i} className="border-b border-black/10">
                    <td className="py-3 pr-3 font-medium whitespace-nowrap">{row.raga}</td>
                    <td className="py-3 pr-3 text-[#1a1a1a]/80 whitespace-nowrap">{row.time}</td>
                    <td className="py-3 pr-3 italic text-[#1a1a1a]/80">{row.rasa}</td>
                    <td className="py-3 pr-3 text-[#2d2b6b] font-medium">{row.state}</td>
                    <td className="py-3 text-[#1a1a1a]/80 leading-relaxed">{row.effect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="lg:hidden space-y-4">
            {RAGA_TABLE.map((row, i) => (
              <div key={i} className="border border-black/10 p-5 bg-white/40">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="font-serif font-semibold text-lg">{row.raga}</span>
                  <span className="text-sm text-[#1a1a1a]/60">{row.time}</span>
                </div>
                <div className="space-y-1.5 text-sm">
                  <p><span className="text-[#1a1a1a]/50">Rasa:</span> <span className="italic text-[#1a1a1a]/80">{row.rasa}</span></p>
                  <p><span className="text-[#1a1a1a]/50">State:</span> <span className="text-[#2d2b6b] font-medium">{row.state}</span></p>
                  <p className="text-[#1a1a1a]/80 leading-relaxed">{row.effect}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="prose-serif mt-8 text-[#1a1a1a]/70">
            The Nine Rasas (Navarasas): Shanta · Karuna · Shringar · Vira ·
            Adbhuta · Bhayanak · Bibhatsa · Raudra · Hasya
          </p>
          <p className="prose-serif mt-4">
            <span className="font-medium">How to listen:</span> Passively and
            without distraction, twenty to thirty minutes. Not as background to
            other work. A single instrumental recording, preferably a
            long-form alap, is better than a playlist.
          </p>
        </div>
      </Section>

      <hr className="rule-thin max-w-6xl mx-auto" />

      {/* The Bija sequence */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-6">
            The Bija sequence
          </h2>

          {/* Desktop table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[#2d2b6b]/30">
                  <th className="text-left py-3 pr-3 font-semibold">#</th>
                  <th className="text-left py-3 pr-3 font-semibold">Chakra</th>
                  <th className="text-left py-3 pr-3 font-semibold">Sanskrit</th>
                  <th className="text-left py-3 pr-3 font-semibold">Bija</th>
                  <th className="text-left py-3 pr-3 font-semibold whitespace-nowrap">Frequency</th>
                  <th className="text-left py-3 font-semibold">Consciousness quality</th>
                </tr>
              </thead>
              <tbody>
                {BIJA_TABLE.map((row) => (
                  <tr key={row.num} className="border-b border-black/10">
                    <td className="py-3 pr-3 font-serif font-semibold">{row.num}</td>
                    <td className="py-3 pr-3">{row.chakra}</td>
                    <td className="py-3 pr-3">
                      <span className="sanskrit text-base">{row.sanskritDev}</span>
                      <span className="italic text-[#1a1a1a]/60 ml-2 text-xs">{row.sanskrit}</span>
                    </td>
                    <td className="py-3 pr-3 font-medium text-[#2d2b6b]">{row.bija}</td>
                    <td className="py-3 pr-3 text-[#1a1a1a]/80 whitespace-nowrap">{row.freq}</td>
                    <td className="py-3 text-[#1a1a1a]/80 leading-relaxed">{row.quality}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="sm:hidden space-y-4">
            {BIJA_TABLE.map((row) => (
              <div key={row.num} className="border border-black/10 p-5 bg-white/40">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-serif font-semibold text-lg text-[#2d2b6b]">{row.num}</span>
                  <span className="font-semibold">{row.chakra}</span>
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="sanskrit text-lg">{row.sanskritDev}</span>
                  <span className="italic text-sm text-[#1a1a1a]/60">{row.sanskrit}</span>
                </div>
                <div className="space-y-1.5 text-sm">
                  <p><span className="text-[#1a1a1a]/50">Bija:</span> <span className="font-medium text-[#2d2b6b]">{row.bija}</span></p>
                  <p><span className="text-[#1a1a1a]/50">Frequency:</span> <span className="text-[#1a1a1a]/80">{row.freq}</span></p>
                  <p className="text-[#1a1a1a]/80 leading-relaxed pt-1">{row.quality}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Protocol */}
          <h3 className="font-serif text-xl font-semibold mt-10 mb-5">Protocol</h3>
          <ol className="space-y-4 list-none pl-0">
            {[
              'Sit with the spine upright, unforced. Settle until the breath is even.',
              'Chant each Bija a minimum of seven times, resting briefly between syllables.',
              'Move upward in order. Do not skip a centre.',
              'Let the seventh be silence rather than sound.',
              'Remain in that silence for as long as the chanting took. This is not the end of the practice. It is the practice.',
            ].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-serif font-semibold text-[#2d2b6b] flex-shrink-0">{i + 1}.</span>
                <span className="prose-serif flex-1">{step}</span>
              </li>
            ))}
          </ol>

          <p className="prose-serif mt-8">
            The full sequence runs twenty to thirty minutes. The silence
            afterward is the threshold of{' '}
            <span className="sanskrit">अनाहत नाद</span>{' '}
            (Anahata Nada).
          </p>

          <p className="prose-serif mt-6">
            <a
              href="https://ajinkyavirg.github.io/conscious-real-intelligence/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              Generate these tones in the browser →
            </a>
          </p>
        </div>
      </Section>

      <hr className="rule-thin max-w-6xl mx-auto" />

      {/* Key frequencies */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-6">
            Key frequencies
          </h2>

          {/* Desktop table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[#2d2b6b]/30">
                  <th className="text-left py-3 pr-4 font-semibold whitespace-nowrap">Frequency</th>
                  <th className="text-left py-3 pr-4 font-semibold">Source</th>
                  <th className="text-left py-3 font-semibold">Used for</th>
                </tr>
              </thead>
              <tbody>
                {FREQ_TABLE.map((row, i) => (
                  <tr key={i} className="border-b border-black/10">
                    <td className="py-3 pr-4 font-medium text-[#2d2b6b] whitespace-nowrap">{row.freq}</td>
                    <td className="py-3 pr-4 text-[#1a1a1a]/80">{row.source}</td>
                    <td className="py-3 text-[#1a1a1a]/80 leading-relaxed">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="sm:hidden space-y-4">
            {FREQ_TABLE.map((row, i) => (
              <div key={i} className="border border-black/10 p-5 bg-white/40">
                <p className="font-medium text-[#2d2b6b] mb-2">{row.freq}</p>
                <p className="text-sm text-[#1a1a1a]/70 mb-2">{row.source}</p>
                <p className="text-sm text-[#1a1a1a]/80 leading-relaxed">{row.use}</p>
              </div>
            ))}
          </div>

          <h3 className="font-serif text-xl font-semibold mt-10 mb-5">
            Binaural support <span className="text-sm font-normal text-[#1a1a1a]/60 italic">(headphones required)</span>
          </h3>
          <ul className="space-y-3 pl-0 list-none">
            {BINAURAL.map((row, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className="font-medium text-[#2d2b6b] whitespace-nowrap">{row.beat} beat</span>
                <span className="text-[#1a1a1a]/70">— {row.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <hr className="rule-thin max-w-6xl mx-auto" />

      {/* What the research does and does not show */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-6">
            What the research does and does not show
          </h2>

          <p className="prose-serif">
            <span className="font-medium">Supported by published research:</span>{' '}
            NIMHANS has published work validating Raga-based music therapy for
            cortisol reduction, anxiety, and sleep quality. HeartMath&rsquo;s
            cardiac coherence research converges with what the tradition locates
            at Anahata. Cymatics demonstrates that specific frequencies produce
            specific stable geometries in physical media. Brainwave entrainment
            through binaural beats has a real literature, with genuinely mixed
            results.
          </p>
          <p className="prose-serif">
            <span className="font-medium">Traditional attribution rather than established finding:</span>{' '}
            The specific properties assigned to 432 Hz and 528 Hz come from
            tuning tradition and the Solfeggio lineage. They are offered here as
            traditional prescriptions that practitioners find useful, not as
            demonstrated physical effects.
          </p>
        </div>
      </Section>

      <hr className="rule-thin max-w-6xl mx-auto" />

      {/* Daily protocol */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-8">
            Daily protocol
          </h2>
          <div className="space-y-10">
            {DAILY_PROTOCOL.map((block, i) => (
              <div key={i}>
                <h3 className="font-serif text-lg font-semibold mb-4 text-[#2d2b6b]">
                  {block.time}
                </h3>
                <ul className="space-y-2.5 pl-0 list-none">
                  {block.steps.map((step, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-[#1a1a1a]/80">
                      <span className="text-[#2d2b6b] flex-shrink-0">·</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <hr className="rule-thin max-w-6xl mx-auto" />

      {/* Nada Yoga — the mechanism */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-6">
            Nada Yoga — the mechanism
          </h2>

          <p className="prose-serif">
            <span className="font-medium">
              <span className="sanskrit mr-1">आहत नाद</span>
              (Ahata Nada)
            </span>{' '}
            — struck sound: all physical sound — voice, instrument, chant.
            Where practice starts.
          </p>
          <p className="prose-serif">
            <span className="font-medium">
              <span className="sanskrit mr-1">अनाहत नाद</span>
              (Anahata Nada)
            </span>{' '}
            — unstruck sound: primordial vibration with no physical cause.
            Consciousness itself resonating, heard internally in deep
            meditation. The doorway to{' '}
            <span className="sanskrit">तुरीय</span> (Turiya).
          </p>
          <p className="prose-serif">
            <span className="font-medium">The path:</span> External chanting,
            sustained regularly over time, gradually dissolves into internal
            resonance. That resonance is Anahata Nada. Consciousness then opens
            directly.
          </p>
        </div>
      </Section>

      <hr className="rule max-w-6xl mx-auto" />

      {/* Honest boundaries */}
      <Section>
        <div className="reading-measure">
          <h2 className="heading-serif text-2xl sm:text-3xl mb-8">
            Honest boundaries
          </h2>

          <div className="boundary-callout">
            <p className="font-medium not-italic mb-2 text-[#1a1a1a]">On Threshold experiences</p>
            <p>
              Lucid awareness within the dream state is not universal. It varies
              with individual development, openness, and consistency. Some
              practitioners reach Transcendence without prominent Threshold
              experiences, and neither path is superior. Nothing on this page
              promises this experience, and treating it as a goal tends to
              prevent it.
            </p>
          </div>

          <div className="boundary-callout">
            <p className="font-medium not-italic mb-2 text-[#1a1a1a]">On interpretation</p>
            <p>
              Threshold transmission arrives as symbol, felt certainty, and
              non-linear impression rather than language. Early experiences are
              often confusing. Receive without forcing interpretation. Literacy
              in non-linear communication develops slowly.
            </p>
          </div>

          <div className="boundary-callout">
            <p className="font-medium not-italic mb-2 text-[#1a1a1a]">On health</p>
            <p>
              This is an educational framework. It is not medical or
              psychological treatment and is not a substitute for professional
              care. If practice brings up distressing material, or if you are
              managing a mental health condition, please work with a qualified
              professional. Where Conscious Real Intelligence™ addresses mental
              health, it does so by naming what conventional approaches tend to
              leave out — the Consciousness layer — never by replacing them.
            </p>
          </div>
        </div>
      </Section>

      {/* Footer note */}
      <Section>
        <div className="reading-measure">
          <hr className="rule-thin" />
          <p className="prose-serif font-medium text-center mt-6">
            All practice tools are free and will remain free.
          </p>
        </div>
      </Section>
    </>
  );
}
