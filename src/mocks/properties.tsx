import { Property } from "@/models/property.model";
import home1 from '@/assets/images/slider-items/slide-item-2.jpg'

const Properties: Property[] = [
    {
        id: 1,
        medias: [
            {
                id: 1,
                mediaUrl: ''
            },
            {
                id: 2,
                mediaUrl: ''
            },
            {
                id: 3,
                mediaUrl: ''
            }
        ],
        soldOut: false,
        cancelled: false,
        title: '',
        address: {
            country: '',
            city: '',
            county: ''
        },
        price: 0,
        specifications: {
            dimension: 0,
            bathrooms: 0,
            bedrooms: 0,
            garages: 0
        },
        model: "T3",
        type: 'Casa'

    }
]

const propertyList: Property[] = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    medias: [
      { id: 1, mediaUrl: home1.src },
      { id: 2, mediaUrl: `https://example.com/media/property${index + 1}-2.jpg` },
      { id: 3, mediaUrl: `https://example.com/media/property${index + 1}-3.jpg` }
    ],
    soldOut: Math.random() < 0.5,
    cancelled: Math.random() < 0.2,
    title: `Propriedade ${index + 1}`,
    address: {
      country: "Angola",
      city: index % 3 === 0 ? "Luanda" : "Benguela",
      county: index % 2 === 0 ? "Talatona" : "Baía Farta"
    },
    price: Math.floor(Math.random() * 200000) + 50000,
    specifications: {
      dimension: Math.floor(Math.random() * 300) + 100,
      bathrooms: Math.floor(Math.random() * 4) + 1,
      bedrooms: Math.floor(Math.random() * 5) + 1,
      garages: Math.floor(Math.random() * 3) + 1
    },
    model: (['T1', 'T2', 'T3', 'T4', 'T5', 'T6+'] as const)[Math.floor(Math.random() * 6)],
    type: (['Vivenda', 'Casa', 'Apartamento', 'Escritório', 'Estabelecimento'] as const)[Math.floor(Math.random() * 5)]
  }));
  
  export { Properties, propertyList }