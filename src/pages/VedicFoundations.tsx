import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import Sanskrit from '@/components/Sanskrit';

export default function VedicFoundations() {
  return (
    <>
      <PageHeader
        eyebrow="V. Lineage"
        title="Vedic Foundations"
        subtitle="The epistemological lineage from which the framework draws — not a claim of orthodoxy, but an acknowledgement of source."
      />

      <Section>
        <div className="reading-measure">
          <p className="prose-serif">
            Placeholder text for the Vedic foundations. This section will
            trace the epistemological sources the framework draws upon and
            situate its concepts within that lineage.
          </p>

          <h2 className="heading-serif text-2xl sm:text-3xl mt-12 mb-4">
            Source Texts and Terms
          </h2>
          <dl className="mt-8 space-y-6">
            <div>
              <dt className="font-serif text-lg font-semibold mb-1">
                <Sanskrit devanagari="वेद" transliteration="Veda" />
              </dt>
              <dd className="prose-serif text-[#1a1a1a]/80">
                Placeholder note on the role of the Veda as epistemological
                source.
              </dd>
            </div>
            <div>
              <dt className="font-serif text-lg font-semibold mb-1">
                <Sanskrit devanagari="उपनिषद्" transliteration="Upaniṣad" />
              </dt>
              <dd className="prose-serif text-[#1a1a1a]/80">
                Placeholder note on the Upaniṣadic treatment of awareness.
              </dd>
            </div>
          </dl>

          <div className="boundary-callout">
            <p>
              Honest boundary note: placeholder. The actual boundary note for
              this page will be provided separately.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
