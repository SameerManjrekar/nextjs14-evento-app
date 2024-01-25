import H1 from "@/components/h1";
import { getEvent } from "@/lib/server-utils";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

// export async function generateMetadata({
//   params: { slug },
// }: Props): Promise<Metadata> {
//   const event = await getEvent(slug);
//   return {
//     title: event.name,
//   };
// }

export async function generateStaticParams() {
  // top 2 slugs as SSG
  return [
    {
      slug: "dj-practice-session",
    },
    {
      slug: "science-space-expo",
    },
  ];
}

const EventPage = async ({ params: { slug } }: Props) => {
  const event = await getEvent(slug);

  return (
    <main>
      <section className="relative overflow-hidden z-0 flex items-center justify-center py-14 md:py-20">
        <Image
          src={event.imageUrl}
          alt="Event Background Image"
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover blur-3xl"
          quality={50}
          priority
        />

        <div className="z-1 relative flex flex-col lg:flex-row gap-6 lg:gap-16">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                month: "long",
                weekday: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>

            <button className="bg-white/20 text-lg capitalize mt-5 sm:mt-auto w-[initial] py-2 px-4 rounded-lg border-white/10 border-2 state-effects">
              Get Tickets
            </button>
          </div>
        </div>
      </section>

      <div className="text-center py-16 px-5 min-h-[75vh]">
        <section className="mb-12">
          <h2 className="text-2xl mb-8">About this Event</h2>
          <p className="text-lg leading-8 text-white/75 max-w-4xl mx-auto">
            {event.description}
          </p>
        </section>
        <section>
          <h2 className="text-2xl mb-8">Location</h2>
          <p className="text-lg leading-8 text-white/75 max-w-4xl mx-auto">
            {event.location}
          </p>
        </section>
      </div>
    </main>
  );
};

export default EventPage;
