import { Search } from "lucide-react";
import { HeaderHeroSlider } from "./header-hero-slider";
import { SearchTypeSelector } from "./searc-type-selector";

export function HeaderComponent() {
    return (
        <header className="w-full height-90 relative pb-5 px-2 md:px-5">
            <div className="w-full height-90 rounded-[20px] overflow-hidden">
                <div className="absolute height-90 top-0 left-0 z-10 w-full h-full flex items-center justify-center flex-col">
                    <h1 style={{letterSpacing: '-0.8px', }} className="text-white mb-4 lg:mb-6 md:mb-0 antialiased max-w-[80%] font-bold text-[2.5rem] text-left lg:text-center md:text-[3rem] lg:text-[4rem]">Encontre o seu novo lar</h1>
                    <p className="text-white antialiased font-medium md:text-[1.2rem] text-wrap max-w-[80%] text-left lg:text-center break-words">Ajudando 5 milhões de angolanos a encontrar o seu lar</p>
                    <SearchTypeSelector/>
                    <div className="search_bar mt-[60px] flex w-[85%] md:w-[500px] h-[50px] rounded-[30px] bg-[#ffffff] overflow- p-1">
                        <input type="text" placeholder="Procurando por uma casa?" className="flex-[1] min-w-[0px] bg-transparent placeholder:text-neutral-400 outline-none px-6 text-black"/>
                        <button className="p-3 bg-slate-700 rounded-full text-white flex items-center jsutify-center"><Search/></button>
                    </div>
                </div>
                <HeaderHeroSlider/>
            </div>
        </header>
    )
}