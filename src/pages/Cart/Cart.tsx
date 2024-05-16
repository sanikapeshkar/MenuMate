
import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import styles from "./cart.module.scss";
import axios from "axios";
import { CartItem, CartProps, Order } from "./cart.types";
import { Header } from "../../components/Header/header";
import authAxios from "../../services/AxiosInstance";

export default function Cart({menu, tableNumber, cart,GotoPage }: CartProps) {
  const [checkout, setCheckout] = useState(false);

  const [paid, setPaid] = useState(false);
  const [price, setPrice] = useState(0);
  const [order, setOrder] = useState<Order | null>(null);
const [updatedcart,setCart]=useState<CartItem[]>(cart)
  const sendOrder = async () => {
    try {
      const response = await authAxios.post(
        "/orders/neworder",
        order,
       
      );
      console.log(response);
    } catch (error: any) {
      console.error("Error fetching menu list:", error.message);
      throw error; 
    }
  };

  useEffect(() => {
    if (order) {
      sendOrder();
    }
  }, [order]);

function OrderNow(tableNumber: number, cart: CartItem[], paid: boolean) {
    setPaid(true);
    setOrder({
      tableNumber,
      items: updatedcart,
      isPaid: paid,
    });
  }
function calculateTotal(){
    cart.map((c)=>{
      const priceall=price+c.price*c.quantity;
      setPrice(priceall);
    })
    
  }
  const cartItemNames = cart.map((item) => {
    const menuItem = menu.find((menu) => menu._id === item.itemId);
    return menuItem ? menuItem.name : ""; // Return the menu item name or an empty string if not found
  });
  function RemovefromCart(itemId:string){

    const newcart=cart.filter(c=>c.itemId!=itemId);
    setCart(newcart);

  }
  
  return (<>
  <Header/>
    <div className={styles.Cart}>
      <h2>Your Order Details </h2>
      {cart.map((item, i) => {
        return (
          <div key={i} className={styles.cartItem}>
            <div>
            <h2>{cartItemNames[i]}</h2>
            
            <span>  Price {item.price}   </span>
            <span>  Quantity : {item.quantity}    </span>
            <span>  Average Time : {item.averageCookingTime}   </span>
            </div>
            <Button text="Remove Item" onclick={()=>RemovefromCart(item.itemId)}/>
            </div>
        
        );
      })}
      <Button text="Checkout" onclick={() => {setCheckout(true); calculateTotal()}} />
      <div className={styles.totalPrice}><span>Total Price</span>$ {price} </div>
      {checkout &&  <div className={styles.BtnContainer}>
        <Button text="Pay Now" onclick={() => {OrderNow(tableNumber, cart, paid)} } />
        <Button text="Pay Later" onclick={() => GotoPage('dashboard')} />
      </div>}

    </div>
    </>
  );
}