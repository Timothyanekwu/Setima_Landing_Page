import Hero from "./component/hero/hero";
import HowItWorks from "./component/howItWorks/howItWorks";
import IndsideSemitaAi from "./component/insideSemitaAI/indsideSemitaAi";
import MarketReach from "./component/MarketReach/marketReach";
import Pricing from "./component/pricing/pricing";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="px-6 md:px-12 lg:px-24 xl:px-12">
        <HowItWorks />
        <IndsideSemitaAi />
        <MarketReach />
        <Pricing />
      </div>
    </div>
  );
}
