import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import "dotenv/config";
import { ApiOptions, Summoner } from "@/lib/interfaces";

const token = process.env.LOL_API_TOKEN;

export async function POST(req: NextApiRequest) {
  try {
    if (req.method === "POST") {
      const summoner: ApiOptions = await req.json();

      const { options, gameName, region, tagLine } = summoner;

      if (!options || !gameName || !region || !tagLine) {
        return NextResponse.json({
          message: "lack of parameters",
          status: 400,
          summoner: undefined,
        });
      }

      const url = `https://${region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${token}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data: Summoner = await response.json();

      return NextResponse.json({
        message: "Sucessfully",
        status: response.status,
        summoner: data,
      });
    }
  } catch (err: any) {
    return NextResponse.json({ message: err, status: 405 });
  }
}

export async function GET(req: NextApiRequest) {}
