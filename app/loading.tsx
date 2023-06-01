import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-2 md:p-6">
            <div className="grid grid-cols-4 gap-4 container p-2 md:p-8 relative">
                {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((gameCard, index) => ( */}
                {Array.from({ length: 20 }, (_, index) => index + 1).map((gameCard, index) => (
                    <div className="col-span-4 sm:col-span-2 xl:col-span-1" key={index}>
                        <div className="aspect-video relative">
                            <Skeleton className="aspect-video rounded-md bg-gray-300" />
                            {/* <Image
                                src={game.background_image}
                                fill
                                className="object-cover rounded-md"
                                alt={`${game.name} banner image`}
                            /> */}
                        </div>
                        <Skeleton className="w-24 h-5 bg-gray-300 mt-1" />
                        <Skeleton className="w-16 h-5 bg-gray-200 mt-1" />
                    </div>
                ))}
            </div>
        </main>
    );
};
