export interface ISeries {
  id: number;
  title: string;
  description: string;
  images: {
    path: string;
    extension: string;
  }[];
}
