import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { House, Proportions, ListOrdered } from "lucide-react"

export function Filters() {
    return (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-3 sm:gap-y-0">
            <Select>
            <SelectTrigger className="w-max gap-x-4 rounded-full px-4 flex-grow">
                    <ListOrdered size={17} strokeWidth={1.5} />
                    <SelectValue placeholder="Modo" />
                </SelectTrigger>
                <SelectContent className="rounded-[12px]">
                    <SelectItem value="1">Comprar</SelectItem>
                    <SelectItem value="2">Arrendar</SelectItem>
                    <SelectItem value="3">Escritório</SelectItem>
                    <SelectItem value="4">Estabelecimento</SelectItem>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-max gap-x-4 rounded-full px-4 flex-grow">
                    <House size={17} strokeWidth={1.5} />
                    <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent className="rounded-[12px]">
                    <SelectItem value="5">Casa</SelectItem>
                    <SelectItem value="6">Apartamento</SelectItem>
                    <SelectItem value="7">Escritório</SelectItem>
                    <SelectItem value="8">Estabelecimento</SelectItem>
                </SelectContent>
            </Select>
            <Select >
                <SelectTrigger className="w-max gap-x-4 rounded-full px-4 flex-grow-[1]">
                    <Proportions size={17} strokeWidth={1.5} />
                    <SelectValue placeholder="Dimensão" />
                </SelectTrigger>
                <SelectContent className="rounded-[12px]">
                    <SelectItem value="9">T1</SelectItem>
                    <SelectItem value="10">T2</SelectItem>
                    <SelectItem value="11">T3</SelectItem>
                    <SelectItem value="12">T4</SelectItem>
                    <SelectItem value="13">T5</SelectItem>
                    <SelectItem value="14">+ T6</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}