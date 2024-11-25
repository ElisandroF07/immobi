'use client'
import Link from 'next/link'
import { useLayoutEffect } from 'react'
import { MobileMenuComponent } from './mobile-menu'

const linkData = [
    {
        title: 'Início',
        link: ''
    },
    {
        title: 'Comprar',
        link: ''
    },
    {
        title: 'Vender',
        link: ''
    },
    {
        title: 'Agentes',
        link: ''
    },
    {
        title: 'Sobre nós',
        link: ''
    },
    {
        title: 'Perguntas frequentes',
        link: ''
    }
]

export function NavbarComponent() {

    useLayoutEffect(() => {

        const hamburger_items = document.querySelectorAll('.hamburger_item') as NodeListOf<HTMLDivElement>
        const hamburger_button = document.querySelector('.hamburger_button') as HTMLButtonElement
        const mobile_menu_overlay = document.getElementById('mobile_menu') as HTMLDivElement

        const listener = () => {
            if (hamburger_button.dataset.active === "true") {
                hamburger_items[0].classList.remove('rotateLeft')
                hamburger_items[1].classList.remove('rotateRight')
                hamburger_items[2].classList.remove('opacity-0')
                hamburger_button.dataset.active = "false"
                hamburger_button.style.backgroundColor = '#fff'
                mobile_menu_overlay.style.width = '0%'
            }
            else {
                hamburger_items[0].classList.add('rotateLeft')
                hamburger_items[1].classList.add('rotateRight')
                hamburger_items[2].classList.add('opacity-0')
                hamburger_button.dataset.active = "true"
                hamburger_button.style.backgroundColor = '#fafafa'
                 mobile_menu_overlay.style.width = '100%'
            }
        }

        hamburger_button.addEventListener('click', listener)

    }, [])

    return (
        <><nav className='w-full h-max lg:px-8 lg:py-3  flex items-center gap-3 lg:gap-0 lg:justify-between text-[.95rem] antialiased'>
            <button data-active={false} className='z-10 px-4 py-5 flex lg:hidden items-center gap-1 justify-center flex-col transition-all duration-300 hamburger_button p-2'>
                <span className='bg-slate-700 w-[26px] h-[2.5px] transition-transform duration-300 rounded-full hamburger_item'></span>
                <span className='bg-slate-700 w-[26px] h-[2.5px] transition-transform duration-300 rounded-full hamburger_item'></span>
                <span className='bg-slate-700 w-[26px] h-[2.5px] transition-opacity duration-300 rounded-full hamburger_item'></span>
            </button>
            <h1 className='z-10 font-semibold antialiased text-[1.4rem]'>Njila<span className='text-cyan-800'>Movel</span></h1>
            <ul className='hidden lg:flex'>
                {
                    linkData.map((link, _index) => (
                        <li key={_index}>
                            <Link className='opacity-60 hover:opacity-100 hover:text-slate-700 hover:font-semibold transition-colors duration-300 py-2 px-4' href={link.link}>{link.title}</Link>
                        </li>
                    ))
                }

            </ul>
            <div className='hidden lg:flex items-center justify-center'>
                <Link href={'#'} className='text-slate-700 font-medium transition-colors duration-300 py-2 px-4'>Entrar</Link>
                <Link href={'#'} className="py-3 px-6 rounded-full bg-slate-700 font-medium text-[0.93rem] text-white">Criar conta</Link>
            </div>
        </nav>
        <MobileMenuComponent menuData={linkData}/>
        </>
    )
}