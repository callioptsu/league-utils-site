"use server";

import { revalidatePath } from "next/cache";
import { ApiResponse } from "../interfaces";

export const fetchSummoner = async ({
  region,
  gameName,
  tagLine,
}: {
  region: string;
  gameName: string;
  tagLine: string;
}): Promise<ApiResponse> => {
  if (!region && !gameName && !tagLine) {
    return {
      message: "lack of parameters",
      status: 500,
      summoner: undefined,
    };
  }

  console.log("Fetching. . .");
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch("http://localhost:3000/api/summoner", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      options: "!",
      gameName,
      region,
      tagLine,
    }),
  });

  const data: ApiResponse = await response.json();

  revalidatePath("/");
  return data;
};
