import { ApiOptions, ApiResponse } from "../interfaces";

export async function riotApi({
  options,
  gameName,
  region,
  tagLine,
}: ApiOptions): Promise<ApiResponse> {
  console.log("Fetching. . .");
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch("http://localhost:3000/api/summoner", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      options,
      gameName,
      region,
      tagLine,
    }),
  });

  const data: ApiResponse = await response.json();

  return data;
}
