export interface CityData {
    slug: string;
    name: string;
    dept: string;
    region: string;
    isHeadquarters: boolean;
  }
  
  export const citiesData: CityData[] = [
    {
      slug: 'saint-priest',
      name: 'Saint-Priest',
      dept: '69',
      region: 'Auvergne-Rhône-Alpes',
      isHeadquarters: true, // C'est ici que tu déclenches ton avantage déloyal !
    },
    {
      slug: 'lyon',
      name: 'Lyon',
      dept: '69',
      region: 'Auvergne-Rhône-Alpes',
      isHeadquarters: false,
    },
    {
      slug: 'villeurbanne',
      name: 'Villeurbanne',
      dept: '69',
      region: 'Auvergne-Rhône-Alpes',
      isHeadquarters: false,
    }
    // Tu pourras ajouter tes autres villes ici petit à petit
  ];