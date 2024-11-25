import '@/styles/overlay.css'
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface IMenuData {
    title: string,
    link: string
}

interface IMobileMenuProps {
    menuData: IMenuData[];
}

export function MobileMenuComponent({ menuData }: IMobileMenuProps) {
    return (
        <div>
            <div id="mobile_menu" className="overlay">
                <div className='flex flex-col w-full h-full'>
                    <div className="overlay-content  flex-[1] pt-4 w-full flex flex-col">
                        <span className='pl-4 text-[0.9rem] opacity-30'>Navegar</span>
                        <ul className='pt-2'>
                            {
                                menuData.map((menuItem, _index) => (
                                    <li className='' key={_index}>
                                        <Link className='w-full py-4 px-10 flex items-center justify-between hover:bg-neutral-200 hover:text-neutral-900  transition-colors duration-150' href={menuItem.link}>{menuItem.title} <ChevronRight strokeWidth={1.5} size={17} /></Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='w-full h-[1px] bg-neutral-200 mt-4 mb-4' />
                        <ul>
                            <li className=''>
                                <Link className='w-full py-4 px-10 flex items-center justify-between hover:bg-neutral-200 hover:text-neutral-900  transition-colors duration-150' href={''}>Entrar <ChevronRight strokeWidth={1.5} size={17} /></Link>
                            </li>
                            <li className=''>
                                <Link className='w-full py-4 px-10 flex items-center justify-between hover:bg-neutral-200 hover:text-neutral-900  transition-colors duration-150' href={''}>Política de privacidade <ChevronRight strokeWidth={1.5} size={17} /></Link>
                            </li>
                            <li className=''>
                                <Link className='w-full py-4 px-10 flex items-center justify-between hover:bg-neutral-200 hover:text-neutral-900  transition-colors duration-150' href={''}>Termos de uso <ChevronRight strokeWidth={1.5} size={17} /></Link>
                            </li>
                        </ul>
                        <div className='flex-[1] w-full flex items-end justify-center pb-4'>
                            <button className='flex-[1] mx-4 py-6 max-h-[50px] rounded-full relative flex items-center justify-center  bg-slate-700 font-medium text-[0.93rem] text-white'>
                                Criar conta <div className='bg-slate-800 p-2 rounded-full absolute right-2 flex items-center justify-center'><ChevronRight /></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}