export interface IComics {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }[];
  pageCount: number;
  prices:{
    type: string;
    price: number;
  }[];
  creators:{
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
      role: string;
    }[];
  };
  dates:{
    type: string;
    date: string;
  }[];
}
