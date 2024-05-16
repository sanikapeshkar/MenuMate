interface MenuProps {
  tableNumber:number;
  menu: Menu[];
  addtocart: (id: string,quantity:number) => void;
  GotoPage: (page: string) => void;
}

interface Menu {
  _id: string;
  name: string;
  description: string;
  picture: string;
  price: number;
  recipe: string;
  averageCookingTime:number;
}

