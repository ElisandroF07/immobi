interface Address {
    country: string;
    city: string;
    county: string;
}

interface Media {
    id: number;
    mediaUrl: string;
}

interface Specifications {
    dimension: number;
    bathrooms: number;
    bedrooms: number;
    garages: number;
}

type Property = {
    id: number;
    medias: Media[];
    soldOut: boolean;
    cancelled: boolean;
    title: string;
    address: Address;
    price: number;
    specifications: Specifications;
    model: 'T1' | 'T2' | 'T3' | 'T4' | 'T5' | 'T6+',
    type: 'Vivenda' | 'Casa' | 'Apartamento' | 'Escritório' | 'Estabelecimento'
}

export type { Address, Media, Property, Specifications }