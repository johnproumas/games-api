import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

const getGames = async (): Promise<Game[]> => {
  const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`);
  if (!res.ok) {
    throw new Error('failed to fetch games :(');
  }
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Give the fetch time to complete
  const data = await res.json();
  return data.results;
};

export default async function Home() {
  const games = await getGames();
  // console.log(games);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 md:p-6">
      <div className="grid grid-cols-4 gap-4 container p-2 md:p-8 relative">
        {games.map(game => (
          <div className="col-span-4 sm:col-span-2 xl:col-span-1" key={game.id}>
            <div className="aspect-video relative">
              <Image
                src={game.background_image}
                fill
                className="object-cover rounded-md"
                alt={`${game.name} banner image`}
              />
            </div>
            <h2>{game.name}</h2>
            <p>Rating: {game.rating}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
