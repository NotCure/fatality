import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="flex flex-row items-center justify-center gap-4">
            <Image
              className="dark:invert"
              src="/nobg.png"
              alt="logo"
              width={180}
              height={38}
              priority
            />
            <ol className="list-inside text-[#5665eb] font-light list-decimal text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)] flex flex-col justify-center">
              <li className="mb-2">Best Pso Cheat Available For Free.</li>
              <li>Inject and Enjoy!</li>
            </ol>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <a
              className="rounded-full border border-solid transition-colors flex items-center justify-center hover:bg-foreground bg-transparent text-white gap-2  border-[#5664ee] text-lg sm:text-xl  h-16  px-8"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/nobg.png"
                alt="logo"
                width={30}
                height={30}
              />
              Download !
            </a>
            <a
              className="rounded-full border border-solid transition-colors flex items-center justify-center hover:bg-foreground bg-transparent text-white gap-2  border-[#5664ee] text-lg sm:text-xl  h-16  px-6"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/discord.svg"
                alt="discord"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
