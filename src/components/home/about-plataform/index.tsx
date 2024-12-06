import { AboutCompanyCardsData } from "@/mocks/about-company-services-cards-data";
import { AboutPlataformCard } from "./about-plataform-card";

export function AboutPlataformCardsComponent() {
    return (
        <div className="flex flex-col items-center justify-start relative">
            <div className="flex items-center w-full px-6 md:px-[100px] py-16">
                <div className="flex flex-col items-start justify-start ">
                    <h1 style={{ letterSpacing: '-0.8px', lineHeight: '60px' }} className="text-neutral-800 mb-4 antialiased font-bold text-[2.5rem] text-left lg:text-center md:text-[3rem] lg:text-[3.5rem] flex flex-wrap break-words w-full whitespace-normal ">Não espere pelo <br /> momento certo!</h1>
                    <div className="flex w-full md:w-max h-max gap-x-3">
                        <span className="w-[5px] h-[120px] sm:h-[70px] rounded-full bg-slate-600"></span>
                        <p className="flex flex-wrap break-words w-full whitespace-normal ">Nossa avançada tecnologia de casa inteligente <br /> garante uma vida moderna, enquanto sua localização <br /> estrategicamente escolhida oferece conveniência e conforto</p>

                    </div>
                </div>
                <div className="flex items-center justify-center gap-x-2">
                    <div className="clipped-image top-12 right-4 hidden sm:block absolute md:relative size-[100px] md:size-[150px] lg:size-[400px]"></div>
                    <svg viewBox="0 0 200 200"
                        width="0" height="0" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="customClip">
                                <path d="
                                    M70,16
                                    c0,20,-10,30,-20,30
                                    c10,0,20,10,20,30
                                    c0,-20,10,-30,20,-30
                                    c-10,0,-20,-10,-20,-30
                                    z
                                    M30,0
                                    c0,20,-10,30,-20,30
                                    c10,0,20,10,20,30
                                    c0,-20,10,-30,20,-30
                                    c-10,0,-20,-10,-20,-30
                                    z
                                    M43,42
                                    c0,20,-10,30,-20,30
                                    c10,0,20,10,20,30
                                    c0,-20,10,-30,20,-30
                                    c-10,0,-20,-10,-20,-30
                                    z
                                " className="lg:scale-[4]"></path>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="gradient-orange-white relative w-full h-max">
                <div className="w-full flex flex-wrap items-center justify-center px-4 md:px-[100px] py-4 gap-4">
                    {
                        AboutCompanyCardsData.map((data, _index) => (
                            <AboutPlataformCard key={_index} {...data} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}