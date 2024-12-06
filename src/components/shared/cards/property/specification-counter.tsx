interface ISpecificationCounterProps {
    icon: React.ReactNode,
    counter: number | string
}

export function SpecificationCounter({counter, icon}: ISpecificationCounterProps) {
    return (
        <div className="flex items-center justify-center gap-1.5 text-slate-500">{icon}<p className="mt-0.5 text-[0.9rem]">{counter}</p></div>
    )
}