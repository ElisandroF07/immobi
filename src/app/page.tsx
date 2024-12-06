import { AboutPlataformCardsComponent } from "@/components/home/about-plataform";
import { CommerceSection } from "@/components/home/commerce-section";
import { HeaderComponent } from "@/components/home/header";
import { HousesSliderComponent } from "@/components/home/houses-slider";
import { NavbarComponent } from "@/components/home/navbar/navbar";

export default function Home() {
  return (
   <main className="w-full flex flex-col bg-[#fff7ed]">
      <NavbarComponent/>
      <HeaderComponent/>
      <AboutPlataformCardsComponent/>

      <CommerceSection/>
   </main>
  );
}