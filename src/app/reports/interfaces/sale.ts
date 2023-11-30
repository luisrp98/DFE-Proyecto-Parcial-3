export interface Sale {
  id: number;
  date: string;
  total: number;
  items: itemsInSale[];
}

export interface itemsInSale {
  title: string;
  plataform: string;
  quantity: number;
  PriceUnit: number;
  Subtotal: number;
}
