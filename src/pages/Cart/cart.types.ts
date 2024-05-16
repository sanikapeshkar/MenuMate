export interface CartProps{
    tableNumber:number;
    menu:Menu[];
    cart:CartItem[];
    GotoPage:(page:string)=>void;
}
export interface CartItem {
    itemId: string;
    quantity:number;
    price: number;
    averageCookingTime: number;
  }
  
 export interface Order {

    tableNumber:number;
    items:CartItem[];
    isPaid:boolean;
  }
export interface AllOrders {
    tableNumber: number;
    items: Order[];
    averageTimeNeeded: number;
    createdAt?: Date;
    totalPrice: number;
    isPaid: Boolean;
  }