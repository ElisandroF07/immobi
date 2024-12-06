import { PropertyCard } from "@/components/shared/cards/property";
import { Filters } from "./filters";
import { propertyList } from "@/mocks/properties";

export function CommerceSection() {
    return (
        <section className="w-full h-max bg-[#F7F8F9] pt-24">
            <div className="flex flex-col items-center justify-center w-full px-6 md:px-[100px] py-16">
                <h1 style={{ letterSpacing: '-0.8px', lineHeight: '60px' }} className="text-neutral-800 antialiased font-bold text-[2.5rem] text-center md:text-[2.5rem] lg:text-[3rem] flex items-center justify-center flex-wrap break-words whitespace-normal w-full">Ofertas Exclusivas</h1>
                <p className="mt-4 flex items-center justify-center flex-wrap break-words w-full text-center whitespace-normal ">Ofertas selecionadas para atender às suas necessidades de conforto, modernidade e localização estratégica.</p>
            </div>
            <div className="w-full flex flex-col">
                <div className="flex-[1] flex px-0 sm:px-4 items-center justify-between md:mr-[100px] mx-4 md:ml-[100px] bg-transparent sm:bg-white sm:py-3 rounded-[12px]">
                    <h2 className="opacity-60 hidden sm:inline-block">Imoveis</h2>
                    <Filters/>
                </div>
                <div className="w-full h-max flex items-center justify-between gap-x-4 gap-y-6 flex-wrap px-4 md:px-[100px] mt-4">
                    {
                        propertyList.map(( property ) => (
                            <PropertyCard key={property.id} property={property}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}