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
  {
    id: "11",
    name: "Bella",
    species: "Perro",
    breed: "Labrador Retriever",
    age: 5,
    ageText: "5 años",
    sex: Sex.FEMALE,
    size: Size.LARGE,
    location: "Benimàmet",
    status: AnimalStatus.ADOPTION,
    images: [
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Bella es una perra dulce y equilibrada. Perfecta para familias con niños. Le encanta el agua y jugar a buscar.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [
        { name: "Rabia", date: "2024-03-12" },
        { name: "Polivalente", date: "2024-03-12" },
      ],
      healthNotes: "Sana, displasia grado A.",
    },
    timeline: [
      {
        date: "2024-02-10",
        title: "Entrada en refugio",
        description: "Entregada por mudanza de dueños.",
        icon: "home",
      },
      {
        date: "2024-03-12",
        title: "Revisión completa",
        description: "Vacunas actualizadas, todo correcto.",
        icon: "vet",
      },
    ],
  },
  {
    id: "12",
    name: "Nala",
    species: "Gato",
    breed: "Mestizo de Persa",
    age: 3,
    ageText: "3 años",
    sex: Sex.FEMALE,
    size: Size.MEDIUM,
    location: "Paterna",
    status: AnimalStatus.RESERVED,
    images: [
      "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Nala es una gata de pelo largo muy elegante. Es independiente pero cariñosa. Necesita cepillado regular.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [{ name: "Trivalente", date: "2024-01-20" }],
      healthNotes: "Sana. Necesita cuidados de pelo largo.",
    },
    timeline: [
      {
        date: "2024-01-05",
        title: "Rescate",
        description: "Encontrada abandonada en una caja.",
        icon: "rescue",
      },
      {
        date: "2024-11-15",
        title: "Reservada",
        description: "En proceso de pre-adopción.",
        icon: "heart",
      },
    ],
  },
  {
    id: "13",
    name: "Max",
    species: "Perro",
    breed: "Border Collie",
    age: 2,
    ageText: "2 años",
    sex: Sex.MALE,
    size: Size.MEDIUM,
    location: "Benimàmet",
    status: AnimalStatus.URGENT,
    images: [
      "https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Max es muy inteligente y activo. Necesita una familia deportista que le proporcione estimulación mental. Sabe trucos.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [
        { name: "Rabia", date: "2024-05-15" },
        { name: "Polivalente", date: "2024-05-15" },
      ],
      healthNotes: "Sano. Alta energía.",
    },
    timeline: [
      {
        date: "2024-04-20",
        title: "Entrada",
        description: "Cedido por falta de tiempo para ejercicio.",
        icon: "home",
      },
    ],
  },
  {
    id: "14",
    name: "Manchitas",
    species: "Gato",
    breed: "Común Europeo",
    age: 1,
    ageText: "1 año y 2 meses",
    sex: Sex.FEMALE,
    size: Size.SMALL,
    location: "Paterna",
    status: AnimalStatus.ADOPTION,
    images: [
      "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Manchitas es una gatita muy juguetona y curiosa. Le encantan los juguetes con plumas y trepar.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [{ name: "Trivalente", date: "2024-08-10" }],
      healthNotes: "Test FIV/FELV negativo. Sana.",
    },
    timeline: [
      {
        date: "2024-07-15",
        title: "Rescate",
        description: "Rescatada de colonia con su hermano.",
        icon: "rescue",
      },
      {
        date: "2024-08-10",
        title: "Esterilización",
        description: "Operación exitosa.",
        icon: "vet",
      },
    ],
  },
  {
    id: "15",
    name: "Bruno",
    species: "Perro",
    breed: "Boxer",
    age: 4,
    ageText: "4 años",
    sex: Sex.MALE,
    size: Size.LARGE,
    location: "Benimàmet",
    status: AnimalStatus.ADOPTION,
    images: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Bruno es un perro juguetón y protector. Ideal para casa con jardín. Es muy leal y cariñoso con su familia.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [
        { name: "Rabia", date: "2024-06-20" },
        { name: "Polivalente", date: "2024-06-20" },
      ],
      healthNotes: "Sano.",
    },
    timeline: [
      {
        date: "2024-05-10",
        title: "Entrada",
        description: "Entregado por problemas económicos.",
        icon: "home",
      },
    ],
  },
  {
    id: "16",
    name: "Pelusa",
    species: "Gato",
    breed: "Angora",
    age: 6,
    ageText: "6 años",
    sex: Sex.FEMALE,
    size: Size.MEDIUM,
    location: "Paterna",
    status: AnimalStatus.FOSTER,
    images: [
      "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Pelusa es una gata blanca preciosa. Es muy tranquila y perfecta para personas mayores. Le gusta la rutina.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [{ name: "Trivalente", date: "2024-02-15" }],
      healthNotes: "Hipertiroidismo controlado con medicación.",
    },
    timeline: [
      {
        date: "2023-12-20",
        title: "Entrada",
        description: "Dueña ingresada en residencia.",
        icon: "home",
      },
      {
        date: "2024-09-01",
        title: "Casa de acogida",
        description: "Acogida por tratamiento.",
        icon: "heart",
      },
    ],
  },
  {
    id: "17",
    name: "Kira",
    species: "Perro",
    breed: "Husky Siberiano",
    age: 3,
    ageText: "3 años",
    sex: Sex.FEMALE,
    size: Size.LARGE,
    location: "Benimàmet",
    status: AnimalStatus.URGENT,
    images: [
      "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Kira necesita mucho ejercicio y espacio. Es muy cariñosa pero con carácter. Experiencia con la raza recomendada.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [
        { name: "Rabia", date: "2024-04-10" },
        { name: "Polivalente", date: "2024-04-10" },
      ],
      healthNotes: "Sana. Necesita ejercicio intenso diario.",
    },
    timeline: [
      {
        date: "2024-03-15",
        title: "Entrada",
        description: "Cedida por no poder atender necesidades.",
        icon: "home",
      },
    ],
  },
  {
    id: "18",
    name: "Tigre",
    species: "Gato",
    breed: "Común Europeo Atigrado",
    age: 4,
    ageText: "4 años",
    sex: Sex.MALE,
    size: Size.MEDIUM,
    location: "Benimàmet",
    status: AnimalStatus.ADOPTION,
    images: [
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Tigre es un gato atigrado muy guapo y sociable. Le gusta estar cerca de las personas y recibir mimos.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [{ name: "Trivalente", date: "2024-07-05" }],
      healthNotes: "Sano.",
    },
    timeline: [
      {
        date: "2024-06-01",
        title: "Rescate",
        description: "Encontrado en una urbanización.",
        icon: "rescue",
      },
    ],
  },
  {
    id: "19",
    name: "Canela",
    species: "Perro",
    breed: "Cocker Spaniel",
    age: 7,
    ageText: "7 años",
    sex: Sex.FEMALE,
    size: Size.MEDIUM,
    location: "Paterna",
    status: AnimalStatus.ADOPTION,
    images: [
      "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Canela es una perrita senior muy dulce. Ideal para hogar tranquilo. Necesita revisiones periódicas de oídos.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [
        { name: "Rabia", date: "2024-01-15" },
        { name: "Polivalente", date: "2024-01-15" },
      ],
      healthNotes: "Otitis crónica controlada. Limpieza regular.",
    },
    timeline: [
      {
        date: "2023-11-20",
        title: "Entrada",
        description: "Cedida por fallecimiento del dueño.",
        icon: "home",
      },
    ],
  },
  {
    id: "20",
    name: "Oso",
    species: "Perro",
    breed: "Pastor Belga",
    age: 5,
    ageText: "5 años",
    sex: Sex.MALE,
    size: Size.LARGE,
    location: "Benimàmet",
    status: AnimalStatus.ADOPTION,
    images: [
      "https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Oso es un perro negro imponente pero muy bueno. Necesita dueño con experiencia. Excelente guardián.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [
        { name: "Rabia", date: "2024-08-20" },
        { name: "Polivalente", date: "2024-08-20" },
      ],
      healthNotes: "Sano.",
    },
    timeline: [
      {
        date: "2024-07-10",
        title: "Entrada",
        description: "Cedido por cambio de vivienda.",
        icon: "home",
      },
    ],
  },
  {
    id: "21",
    name: "Miel",
    species: "Gato",
    breed: "Común Europeo",
    age: 0.5,
    ageText: "6 meses",
    sex: Sex.FEMALE,
    size: Size.SMALL,
    location: "Paterna",
    status: AnimalStatus.URGENT,
    images: [
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Miel es una gatita naranja muy juguetona. Está en la edad perfecta para adaptarse a cualquier hogar.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [{ name: "Trivalente", date: "2024-10-15" }],
      healthNotes: "Sana. Recién esterilizada.",
    },
    timeline: [
      {
        date: "2024-09-20",
        title: "Rescate",
        description: "Rescatada de un parking.",
        icon: "rescue",
      },
      {
        date: "2024-10-15",
        title: "Esterilización",
        description: "Operación exitosa.",
        icon: "vet",
      },
    ],
  },
  {
    id: "22",
    name: "Duke",
    species: "Perro",
    breed: "Dóberman",
    age: 6,
    ageText: "6 años",
    sex: Sex.MALE,
    size: Size.LARGE,
    location: "Benimàmet",
    status: AnimalStatus.ADOPTION,
    images: [
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Duke es elegante y noble. Necesita dueño experimentado. Es protector pero muy equilibrado.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [
        { name: "Rabia", date: "2024-03-25" },
        { name: "Polivalente", date: "2024-03-25" },
      ],
      healthNotes: "Sano. Chequeos cardíacos anuales recomendados.",
    },
    timeline: [
      {
        date: "2024-02-15",
        title: "Entrada",
        description: "Cedido por problemas de salud del dueño.",
        icon: "home",
      },
    ],
  },
  {
    id: "23",
    name: "Nina",
    species: "Gato",
    breed: "Común Europeo Tricolor",
    age: 2,
    ageText: "2 años",
    sex: Sex.FEMALE,
    size: Size.SMALL,
    location: "Paterna",
    status: AnimalStatus.ADOPTION,
    images: [
      "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Nina es una gata tricolor preciosa. Es tímida al principio pero muy cariñosa cuando coge confianza.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [{ name: "Trivalente", date: "2024-09-10" }],
      healthNotes: "Sana.",
    },
    timeline: [
      {
        date: "2024-08-05",
        title: "Rescate",
        description: "Encontrada en zona industrial.",
        icon: "rescue",
      },
    ],
  },
  {
    id: "24",
    name: "Zeus",
    species: "Perro",
    breed: "Rottweiler",
    age: 4,
    ageText: "4 años",
    sex: Sex.MALE,
    size: Size.LARGE,
    location: "Benimàmet",
    status: AnimalStatus.FOSTER,
    images: [
      "https://images.unsplash.com/photo-1567752881298-894bb81f9379?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Zeus es un perro impresionante pero dulce con su familia. Necesita socialización y experiencia con razas grandes.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [
        { name: "Rabia", date: "2024-05-30" },
        { name: "Polivalente", date: "2024-05-30" },
      ],
      healthNotes: "En tratamiento por displasia de cadera leve.",
    },
    timeline: [
      {
        date: "2024-04-15",
        title: "Rescate",
        description: "Rescatado de situación de maltrato.",
        icon: "rescue",
      },
      {
        date: "2024-10-01",
        title: "Casa de acogida",
        description: "Rehabilitación física y emocional.",
        icon: "heart",
      },
    ],
  },
  {
    id: "25",
    name: "Copito",
    species: "Gato",
    breed: "Común Europeo Blanco",
    age: 8,
    ageText: "8 años",
    sex: Sex.MALE,
    size: Size.MEDIUM,
    location: "Paterna",
    status: AnimalStatus.ADOPTION,
    images: [
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Copito es un gato blanco senior muy tranquilo. Ideal para persona mayor o piso pequeño. Es muy mimoso.",
    medical: {
      neutered: true,
      microchipped: true,
      vaccinated: true,
      vaccines: [{ name: "Trivalente", date: "2024-04-12" }],
      healthNotes: "Insuficiencia renal leve, dieta especial.",
    },
    timeline: [
      {
        date: "2024-03-01",
        title: "Entrada",
        description: "Cedido por fallecimiento de la dueña.",
        icon: "home",
      },
    ],
  },
];
