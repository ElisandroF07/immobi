'use client'

import { useEffect, useState } from "react"

const searchTypes = [
    'Comprar',
    'Vender',
    'Arrendar',
    'Expandir'
]

export function SearchTypeSelector() {

    const [selectedType, setSelectedType] = useState('0')

    useEffect(() => {
        const shadow = document.querySelector('.search_type_shadow') as HTMLDivElement
        const typeList = document.querySelectorAll('.search_type') as NodeListOf<HTMLLIElement>
        shadow.style.translate = `${ typeList[0].getBoundingClientRect().x.toString()}px`
        shadow.style.top = `${typeList[0].getBoundingClientRect().top + 30}px`
        shadow.style.width = `${typeList[0].getBoundingClientRect().width}px`


        for (const type of  typeList) {
            type.addEventListener('click', (e) => {
                const target = e.currentTarget as HTMLLIElement; 
                setSelectedType(target.id)
                shadow.style.translate = `${ target.getBoundingClientRect().x.toString()}px`
                shadow.style.width = `${target.getBoundingClientRect().width}px`

            })
        }
    }, [])

    return (
        <ul className="hidden md:flex items-center justify-center gap-12 text-white mt-[40px]">
            {searchTypes.map((type, _index) => (
                <li key={_index} id={_index.toString()} data-active={selectedType === _index.toString()} className="search_type transition-all duration-300">{type}</li>
            ))}
            <div className="search_type_shadow" />
        </ul>
    )
}