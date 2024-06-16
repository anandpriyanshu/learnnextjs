import LearnCSSModule from "@/components/LearnCSSModule";
import LearnClientComponent from "@/components/LearnClientComponent";
import LearnFetchingData from "@/components/LearnFetchingData";
import LearnLink from "@/components/LearnLink";
import LearnServerComponent from "@/components/LearnServerComponent";
import LearnUseGlobalCSS from "@/components/LearnUseGlobalCSS";
import LearnUseImage from "@/components/LearnUseImage";
import LearnUseRouter from "@/components/LearnUseRouter";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        {/* <LearnLink /> */}
        {/* <LearnUseRouter /> */}
        {/* <LearnServerComponent /> */}
        {/* <LearnClientComponent /> */}
        {/* <LearnUseGlobalCSS /> */}
        {/* <LearnCSSModule /> */}
        {/* <LearnUseImage /> */}
        <LearnFetchingData />
      </div>
    </main>
  );
}
