export interface MenuItem {
    title?: string | null;
    "spanish-title"?: string | null;
    price: number | number[];
    quantity?: number | number[];
    flavors?: string[] | null;
    description?: string | null;
    units?: string | null;
    day?: number | null;
}