import { ArrowRight } from "lucide-react";
import Link from "next/link";

export interface IAboutPlataformCardProps {
    title: string,
    description: string,
    icon: React.ReactNode,
    link: string
}

export function AboutPlataformCard({description, icon, title, link}: IAboutPlataformCardProps) {
    return (
        <div className="min-w-full md:min-w-[351px] flex-[1] flex flex-col items-start justify-start min-h-[280px] flex-wrap shadow-total  shadow-slate-200 rounded-[24px] px-8 py-8 pb-5 bg-[#ffffff88]">
            {icon}
            <div className="pl-3">
                <h2 className="font-bold text-[1.3rem] text-neutral-700">{title}</h2>
                <p className="font-light">{description}</p>
            </div>
            <div className="w-full h-max mt-3 flex items-center justify-end">
                <Link href={link} className="px-6 p-2.5 border border-slate-500 text-slate-700 flex items-center justify-center rounded-full"><ArrowRight/></Link>
            </div>
        </div>
    )
}