import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const btnStyle =
  "text-white px-5 py-3 bg-white/5 rounded-md opacity-75 flex items-center gap-3 hover:opacity-100 transition-all text-sm";

type PageinationControlProps = {
  previousPath: string;
  nextPath: string;
};

const PaginationControls = ({
  previousPath,
  nextPath,
}: PageinationControlProps) => {
  return (
    <section className="flex items-center justify-between w-full">
      {previousPath ? (
        <Link href={previousPath} className={btnStyle}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPath && (
        <Link href={nextPath} className={btnStyle}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
};

export default PaginationControls;
