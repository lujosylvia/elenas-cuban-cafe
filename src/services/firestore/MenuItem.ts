export interface MenuItem {
  title: string;
  "spanish-title"?: string | null;
  price: number | number[];
  quantity?: number | number[];
  flavors?: string[] | null;
  description?: string | null;
  units?: string | null;
  day?: number | null;
  imageName?: string;
}