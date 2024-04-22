"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { fetchSummoner } from "@/lib/actions";
import { ApiResponse } from "@/lib/interfaces";
import Cookies from "js-cookie";

/**
 * Development branch
 * branch/dev
 */
export default function Home() {
  const [info, setInfo] = useState({
    region: "",
    gameName: "",
    tagLine: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setInfo((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: ApiResponse = await fetchSummoner(info);

    if (!data) {
      return;
    }

    Cookies.set("summoner", JSON.stringify(data.summoner), {
      expires: 1,
    });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input id="region" placeholder="Region" onChange={handleChange} />
        <input id="gameName" placeholder="Name" onChange={handleChange} />
        <input id="tagLine" placeholder="#TagLine" onChange={handleChange} />
        <button type="submit">Confirm</button>
      </form>
    </main>
  );
}
