// pages/index.js
import Image from "next/image";
import Counter from "../components/counter.js";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      {/* Next.js Logo */}
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />

      {/* Counter Component */}
      <div className="text-center">
        <h1>Welcome to My NextJS Counter Project</h1>
        <Counter />
      </div>
    </div>
  );
}
