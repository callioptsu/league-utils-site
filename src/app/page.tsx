import { riotApi } from "@/lib/utils/api";

/**
 * Development branch
 * branch/dev
 */
export default async function Home() {
  const data = await riotApi({options: "<option>", gameName: "<name>", tagLine: "<tag>", region: "<americas"});
  console.log(data);
  return (
    <main>
      <span>Home</span>
    </main>
  );
}
