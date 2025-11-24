export enum AnimalStatus {
  ADOPTION = 'En Adopción',
  FOSTER = 'En Acogida',
  RESERVED = 'Reservado',
  URGENT = 'Urgente',
  ADOPTED = 'Adoptado'
}

export enum Sex {
  MALE = 'Macho',
  FEMALE = 'Hembra'
}

export enum Size {
  SMALL = 'Pequeño',
  MEDIUM = 'Mediano',
  LARGE = 'Grande'
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon?: 'rescue' | 'vet' | 'home' | 'heart' | 'info';
}

export interface MedicalInfo {
  neutered: boolean;
  microchipped: boolean;
  vaccinated: boolean;
  vaccines: { name: string; date: string }[];
  healthNotes: string;
}

export interface Animal {
  id: string;
  name: string;
  species: 'Perro' | 'Gato' | 'Otro';
  breed: string;
  age: number; // in years
  ageText: string; // e.g., "2 años y 3 meses"
  sex: Sex;
  size: Size;
  location: string; // Center name
  status: AnimalStatus;
  images: string[];
  description: string;
  medical: MedicalInfo;
  timeline: TimelineEvent[];
}
