export interface DataApi<T> {
  code: number;
  status: string;
  data: {
    results: T[];
  };
}
