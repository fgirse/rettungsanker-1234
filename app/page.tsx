import Image from "next/image";
import AnimationHero from "../components/Animation/AnimationHero";
export default function Home() {
  return (
    <div className="bg-stone-900 min-h-screen bg-slate-50 bg-[url('/lighthouse.png')] bg-contain bg-no-repeat bg-center lg:bg-[url('/5566.svg')] lg:bg-contain lg:bg-no-repeat lg:bg-center w-[99vw] h-[100vh] ">
      <main className="min-h-screen w-full max-w-9xl flex-col items-center justify-between bg-transparent dark:bg-black sm:items-start">
        <div className="">
<AnimationHero />
        </div>
      </main>

    </div>
  );
}

