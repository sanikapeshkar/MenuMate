import { Order } from "../../pages/Cart/cart.types";

export interface OrderProps{
    orderId:string;
    menu:Menu[];
    onOrderStatusChange:()=>void;
    order:Order;
    status:string;
}


