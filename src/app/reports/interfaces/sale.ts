export interface Sale {
  id: number;
  date: string;
  total: number;
  // items: ItemVendido[];
}

interface ItemVendido {
  titulo: string;
  plataforma: string;
  cantidad: number;
  precioUnitario: number;
  precioSubtotal: number;
}
