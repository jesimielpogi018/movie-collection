import type { MovieType } from "./Movies";

export interface ApiCallReturn {
  entries: number;
  page: string;
  next: string;
  results: MovieType[];
}
