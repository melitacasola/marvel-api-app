export interface IComics {
  id: number;
  title: string;
  description: string;
  images: {
    path: string;
    extension: string;
  }[];
}
