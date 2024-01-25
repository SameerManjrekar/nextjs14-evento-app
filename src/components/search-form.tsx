"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchForm = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText) return;

    router.push(`/events/${searchText}`);
  };
  return (
    <form className="w-full sm:w-[580px]" onSubmit={handleSubmit}>
      <input
        className="w-full h-16 rounded-lg bg-white/[7%] outline-none px-6 ring-accent/50 transition focus:ring-2 focus:bg-white/10"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search events in any city..."
        spellCheck={false}
      />
    </form>
  );
};

export default SearchForm;
