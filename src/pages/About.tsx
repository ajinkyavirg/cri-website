import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="VII. Provenance"
        title="About"
        subtitle="On the author and the conditions under which this framework is offered."
      />

      <Section>
        <div className="reading-measure">
          <p className="prose-serif">
            Placeholder text for the About page. This section will describe
            the author's background and the intent behind the framework.
          </p>

          <h2 className="heading-serif text-2xl sm:text-3xl mt-12 mb-4">
            On the Author
          </h2>
          <p className="prose-serif">
            Placeholder for the author biographical note.
          </p>

          <h2 className="heading-serif text-2xl sm:text-3xl mt-12 mb-4">
            On Availability
          </h2>
          <p className="prose-serif">
            Placeholder for the statement on free availability and
            non-medical, non-psychological scope.
          </p>

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
