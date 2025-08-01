import {HomeHeroes} from "@/components/home/home-heroes";
import {MarketingBanner} from "@/components/home/marketing-banner";
import {Features} from "@/components/home/features";
import {ExternalApps} from "@/components/home/external-apps";
import {UseCases} from "@/components/home/use-cases";
import {Footer} from "@/components/layout/footer";

export default function Home() {
  return (
      <div className="bg-black text-white">
          <HomeHeroes/>

          <MarketingBanner/>

          <Features/>

          <ExternalApps/>

          <UseCases/>

          <Footer/>
      </div>
  );
}
