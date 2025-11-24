import { Animal, AnimalStatus, Sex, Size } from "./types";

export const COLORS = {
  primary: "#15803d", // green-700
  secondary: "#f97316", // orange-500
  background: "#ffffff",
  text: "#1f2937", // gray-800
};

export const MOCK_ANIMALS: Animal[] = [
  {
    id: "1",
    name: "Toby",
    species: "Perro",
    breed: "Mestizo",
    age: 3,
    ageText: "3 años",
    sex: Sex.MALE,
    size: Size.MEDIUM,
    location: "Benimàmet",
    status: AnimalStatus.URGENT,
    images: [
      "https://lacasitadelosanimales.com/blog/wp-content/uploads/2021/11/perros-ppp-02.jpg",
    ],
    description:
      "Toby es un perro lleno de energía que necesita una familia activa. Fue encontrado vagando por la huerta y al principio tenía miedo, pero ahora es puro amor.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [
        { name: "Rabia", date: "2023-05-10" },
        { name: "Polivalente", date: "2023-06-15" },
      ],
      healthNotes: "Sano, analítica de leishmania negativa.",
    },
    timeline: [
      {
        date: "2023-04-01",
        title: "Rescate",
        description: "Encontrado en zona de huerta, desnutrido.",
        icon: "rescue",
      },
      {
        date: "2023-04-02",
        title: "Entrada en refugio",
        description: "Ingreso en centro de Benimàmet.",
        icon: "home",
      },
      {
        date: "2023-05-10",
        title: "Revisión Veterinaria",
        description: "Chequeo completo y vacunas.",
        icon: "vet",
      },
      {
        date: "2023-06-01",
        title: "Disponible para adopción",
        description: "Toby está listo para irse a casa.",
        icon: "heart",
      },
    ],
  },
  {
    id: "2",
    name: "Luna",
    species: "Gato",
    breed: "Común Europeo",
    age: 1,
    ageText: "1 año",
    sex: Sex.FEMALE,
    size: Size.SMALL,
    location: "Paterna",
    status: AnimalStatus.ADOPTION,
    images: [
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Luna es una gatita tranquila, ideal para un piso. Le encanta mirar por la ventana y dormir al sol.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [{ name: "Trivalente", date: "2023-08-20" }],
      healthNotes: "Test de inmunodeficiencia y leucemia negativos.",
    },
    timeline: [
      {
        date: "2023-08-15",
        title: "Entrada en refugio",
        description: "Cedida por su anterior dueño.",
        icon: "home",
      },
      {
        date: "2023-08-20",
        title: "Esterilización",
        description: "Intervención realizada con éxito.",
        icon: "vet",
      },
    ],
  },
  {
    id: "3",
    name: "Rex",
    species: "Perro",
    breed: "Pastor Alemán",
    age: 6,
    ageText: "6 años",
    sex: Sex.MALE,
    size: Size.LARGE,
    location: "Benimàmet",
    status: AnimalStatus.FOSTER,
    images: [
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Rex es un abuelo bonachón. Necesita medicación para la artrosis pero hace vida normal. Busca un hogar tranquilo para jubilarse.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [{ name: "Rabia", date: "2023-01-10" }],
      healthNotes:
        "Artrosis leve en cadera. Tratamiento con condroprotectores.",
    },
    timeline: [
      {
        date: "2020-01-01",
        title: "Rescate",
        description: "Rescatado de un solar abandonado.",
        icon: "rescue",
      },
      {
        date: "2023-09-01",
        title: "Pasa a casa de acogida",
        description: "Acogida temporal por tratamiento.",
        icon: "home",
      },
    ],
  },
  {
    id: "4",
    name: "Nala",
    species: "Perro",
    breed: "Podenco",
    age: 2,
    ageText: "2 años",
    sex: Sex.FEMALE,
    size: Size.MEDIUM,
    location: "Benimàmet",
    status: AnimalStatus.RESERVED,
    images: [
      "https://images.unsplash.com/photo-1625316708582-7c38734c3121?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Nala es tímida pero muy dulce. Se lleva bien con otros perros y necesita paciencia.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [],
      healthNotes: "Sana.",
    },
    timeline: [
      {
        date: "2023-10-05",
        title: "Rescate",
        description: "Encontrada en carretera.",
        icon: "rescue",
      },
      {
        date: "2023-10-20",
        title: "Reservada",
        description: "Una familia ha iniciado los trámites.",
        icon: "heart",
      },
    ],
  },
  {
    id: "5",
    name: "Thor",
    species: "Perro",
    breed: "Golden Retriever",
    age: 4,
    ageText: "4 años",
    sex: Sex.MALE,
    size: Size.LARGE,
    location: "Paterna",
    status: AnimalStatus.ADOPTION,
    images: [
      "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Thor es el compañero perfecto. Le encantan los niños y jugar a la pelota. Es muy obediente y cariñoso.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [
        { name: "Rabia", date: "2023-02-15" },
        { name: "Polivalente", date: "2023-02-15" },
      ],
      healthNotes: "Sano.",
    },
    timeline: [
      {
        date: "2023-11-01",
        title: "Entrada en refugio",
        description: "Entregado por no poder atender.",
        icon: "home",
      },
      {
        date: "2023-11-05",
        title: "Revisión",
        description: "Todo correcto.",
        icon: "vet",
      },
    ],
  },
  {
    id: "6",
    name: "Mishi",
    species: "Gato",
    breed: "Siames",
    age: 5,
    ageText: "5 años",
    sex: Sex.MALE,
    size: Size.MEDIUM,
    location: "Benimàmet",
    status: AnimalStatus.URGENT,
    images: [
      "https://images.unsplash.com/photo-1513245543132-31f507417b26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Mishi es muy vocal y cariñoso. Necesita un hogar tranquilo sin otros gatos dominantes.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [{ name: "Trivalente", date: "2023-01-20" }],
      healthNotes: "Ligera gingivitis, controlada con dieta.",
    },
    timeline: [
      {
        date: "2023-09-10",
        title: "Rescate",
        description: "Encontrado en colonia felina, muy sociable.",
        icon: "rescue",
      },
    ],
  },
  {
    id: "7",
    name: "Lola",
    species: "Perro",
    breed: "Galgo Español",
    age: 3,
    ageText: "3 años",
    sex: Sex.FEMALE,
    size: Size.LARGE,
    location: "Benimàmet",
    status: AnimalStatus.ADOPTION,
    images: [
      "https://images.unsplash.com/photo-1610411880145-2342dfbb616a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522855590924-f7614d642340?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Lola es pura elegancia y tranquilidad. Como buena galga, le encanta el sofá y correr en espacios cerrados. Es algo miedosa con hombres al principio.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [{ name: "Rabia", date: "2023-07-01" }],
      healthNotes: "Sana. Herida antigua en pata curada.",
    },
    timeline: [
      {
        date: "2023-07-01",
        title: "Rescate",
        description: "Rescatada de zona rural.",
        icon: "rescue",
      },
      {
        date: "2023-08-15",
        title: "Casa de Acogida",
        description: "Socialización en casa temporal.",
        icon: "home",
      },
      {
        date: "2023-10-01",
        title: "Disponible",
        description: "Lista para adopción definitiva.",
        icon: "heart",
      },
    ],
  },
  {
    id: "8",
    name: "Rocky",
    species: "Perro",
    breed: "Bulldog Francés",
    age: 2,
    ageText: "2 años",
    sex: Sex.MALE,
    size: Size.SMALL,
    location: "Paterna",
    status: AnimalStatus.ADOPTION,
    images: [
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Rocky es un payaso. Ronca un poco, pero lo compensa con su personalidad divertida. Ideal para piso.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [{ name: "Polivalente", date: "2023-04-10" }],
      healthNotes: "Piel sensible, requiere pienso hipoalergénico.",
    },
    timeline: [
      {
        date: "2023-06-20",
        title: "Entrada",
        description: "Renuncia de dueño por alergia.",
        icon: "home",
      },
    ],
  },
  {
    id: "9",
    name: "Coco",
    species: "Perro",
    breed: "Mestizo",
    age: 0.4,
    ageText: "5 meses",
    sex: Sex.MALE,
    size: Size.SMALL,
    location: "Benimàmet",
    status: AnimalStatus.URGENT,
    images: [
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "¡Un cachorro adorable! Coco será de tamaño mediano. Necesita una familia que tenga tiempo para educarlo y jugar.",
    medical: {
      neutered: false,
      microchipped: true,
      vaccinated: true,
      vaccines: [{ name: "Puppy", date: "2023-11-01" }],
      healthNotes: "Sano. Compromiso de esterilización obligatorio.",
    },
    timeline: [
      {
        date: "2023-11-01",
        title: "Nacimiento",
        description: "Nacido en el refugio (madre rescatada).",
        icon: "heart",
      },
    ],
  },
  {
    id: "10",
    name: "Simba",
    species: "Gato",
    breed: "Común Europeo",
    age: 2,
    ageText: "2 años",
    sex: Sex.MALE,
    size: Size.LARGE,
    location: "Paterna",
    status: AnimalStatus.ADOPTION,
    images: [
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Un gato naranja gigante y mimoso. Se lleva bien con perros y otros gatos. Es el rey de la casa.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [{ name: "Trivalente", date: "2023-05-05" }],
      healthNotes: "Sano.",
    },
    timeline: [
      {
        date: "2023-02-14",
        title: "Entrada",
        description: "Encontrado en la calle.",
        icon: "rescue",
      },
    ],
  },
];
