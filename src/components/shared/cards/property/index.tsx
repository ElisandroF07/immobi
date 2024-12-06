import { Property } from "@/models/property.model"
import { Bath, Bed, CarFront, Heart, Link, Proportions, Ruler } from "lucide-react"
import React from "react"
import { SpecificationCounter } from "./specification-counter"

interface IPropertyCardProps {
    property: Property
}

export function PropertyCard({ property }: IPropertyCardProps) {
    return ((
        <div className="bg-white default-shadow rounded-[22px] min-w-[300px] flex-[1] h-[450px] flex flex-col p-3">
            <div style={{ backgroundImage: `url(${property.medias[0].mediaUrl})` }} className="flex-[1] w-full bg-cover rounded-[14px] relative">
                <button className="absolute bottom-2 right-2 text-white p-2 rounded-full bg-[#00000044] backdrop-blur-[10px]">
                    <Heart size={20} />
                </button>
                <button className="absolute bottom-12 right-2 text-white p-2 rounded-full bg-[#00000044] backdrop-blur-[10px]">
                    <Link size={20} />
                </button>
                {
                    property.soldOut && <button className="absolute text-[0.8rem] flex items-center justify-center gap-1.5 top-2 left-2 text-slate-700 px-2 p-0.5 rounded-full bg-[#ffffff]">
                        <span className="size-1.5 rounded-full bg-blue-600"/>Vendida
                    </button>
                }
                {
                    property.cancelled && <button className="absolute text-[0.8rem] flex items-center justify-center gap-1.5 top-2 left-2 text-slate-700 px-2 p-0.5 rounded-full bg-[#ffffff]">
                        <span className="size-1.5 rounded-full bg-red-600"/>Cancelada
                    </button>
                }
            </div>
            <div className="mt-3">
                <div className="grid grid-cols-2 grid-rows-2 justify-items-stretch gap-y-1">
                    <h1 className="text-neutral-900 antialiased font-bold text-[1rem]">{property.type}</h1>
                    <p className="text-right text-[0.8rem] text-slate-600">Preco da propriedade</p>
                    <p className="text-[0.8rem] text-neutral-600">{property.address.city}, {property.address.country}</p>
                    <p style={{ lineHeight: '20px' }} className="text-right text-[18px] antialiased font-bold text-slate-600"><span className="text-[0.8rem]">Kz </span>{property.price.toLocaleString()}</p>
                </div>
                <div className="bg-neutral-100 mt-3 rounded-[12px] w-full flex items-center justify-start gap-x-5 py-3 px-4">
                    {property.specifications.bedrooms && <SpecificationCounter counter={property.specifications.bedrooms} icon={<Bed size={18} />} />}
                    {property.specifications.bathrooms && <SpecificationCounter counter={property.specifications.bathrooms} icon={<Bath size={18} />} />}
                    {property.specifications.dimension && <SpecificationCounter counter={`${property.specifications.dimension}m²`} icon={<Proportions size={18} />} />}
                    {property.specifications.garages && <SpecificationCounter counter={property.specifications.garages} icon={<CarFront size={18} />} />}
                </div>
            </div>
        </div>
    ))
}