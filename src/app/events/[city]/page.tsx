import EventsList from "@/components/EventsList";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "../loading";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";
import * as z from "zod";

type Props = {
  params: {
    city: string;
  };
};

type EventsDetailsPageProps = Props & {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export function generateMetadata({ params: { city } }: Props): Metadata {
  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

const EventsDetailsPage = async ({
  params: { city },
  searchParams,
}: EventsDetailsPageProps) => {
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);

  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }

  return (
    <main className="flex flex-col items-center py-24 px-[20px] overflow-y-auto min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalize(city)}`}
      </H1>

      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
};

export default EventsDetailsPage;
