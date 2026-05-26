import { L, type Office } from "./types";

export const offices: Office[] = [
  {
    slug: "buenos-aires",
    headquarters: true,
    city: L("Buenos Aires", "Buenos Aires", "Buenos Aires"),
    country: L("Argentina", "Argentina", "Argentinien"),
    address: "Av. Leandro N. Alem 855, Piso 14, C1001AAD, Ciudad Autónoma de Buenos Aires",
    email: "buenosaires@ecija.com",
    phone: "+54 11 5236 4800",
    timezone: "GMT-3",
    mapQuery: "Av. Leandro N. Alem 855, Buenos Aires, Argentina",
  },
  {
    slug: "madrid",
    city: L("Madrid", "Madrid", "Madrid"),
    country: L("España", "Spain", "Spanien"),
    address: "Calle de Velázquez 70, 28001, Madrid",
    email: "madrid@ecija.com",
    phone: "+34 91 781 6160",
    timezone: "GMT+1",
    mapQuery: "Calle de Velázquez 70, Madrid, España",
  },
  {
    slug: "santiago",
    city: L("Santiago", "Santiago", "Santiago de Chile"),
    country: L("Chile", "Chile", "Chile"),
    address: "Av. Apoquindo 3721, Piso 12, Las Condes, Santiago",
    email: "santiago@ecija.com",
    phone: "+56 2 2592 3500",
    timezone: "GMT-3",
    mapQuery: "Av. Apoquindo 3721, Santiago, Chile",
  },
  {
    slug: "lima",
    city: L("Lima", "Lima", "Lima"),
    country: L("Perú", "Peru", "Peru"),
    address: "Av. Víctor Andrés Belaúnde 147, San Isidro, Lima",
    email: "lima@ecija.com",
    phone: "+51 1 700 9100",
    timezone: "GMT-5",
    mapQuery: "Av. Víctor Andrés Belaúnde 147, San Isidro, Lima, Perú",
  },
  {
    slug: "bogota",
    city: L("Bogotá", "Bogotá", "Bogotá"),
    country: L("Colombia", "Colombia", "Kolumbien"),
    address: "Carrera 7 # 71-21, Torre B, Bogotá",
    email: "bogota@ecija.com",
    phone: "+57 1 432 7370",
    timezone: "GMT-5",
    mapQuery: "Carrera 7 71-21, Bogotá, Colombia",
  },
  {
    slug: "mexico",
    city: L("Ciudad de México", "Mexico City", "Mexiko-Stadt"),
    country: L("México", "Mexico", "Mexiko"),
    address: "Paseo de la Reforma 250, Torre Niza, Juárez, Ciudad de México",
    email: "mexico@ecija.com",
    phone: "+52 55 5980 9290",
    timezone: "GMT-6",
    mapQuery: "Paseo de la Reforma 250, Ciudad de México, México",
  },
];

export function getOffice(slug: string): Office | undefined {
  return offices.find((o) => o.slug === slug);
}

export function getHeadquarters(): Office {
  return offices.find((o) => o.headquarters) ?? offices[0];
}
