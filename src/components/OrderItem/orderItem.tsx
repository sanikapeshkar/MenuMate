import { useState } from "react";
import { Button } from "../Button/Button";
import { OrderProps } from "./order.types";
import styles from "./orderItem.module.scss";
import axios from "axios";
import authAxios from "../../services/AxiosInstance";

const OrderItem = ({ orderId, menu, order, status,onOrderStatusChange }: OrderProps) => {
  const [active, setActive] = useState(false);
  const [assigned, isAssigned] = useState(false);

  const items = order.items;
  const orderdetails = items.map((item) => {
    const menuItem = menu.find((menu) => menu._id === item.itemId);
    return menuItem;
  });

  const StartOrder = async (orderId: string) => {
    console.log(orderId)
    try {
      
  const response = await authAxios.put(
        `/orders/update-status/${orderId}`,{isAssigned:true},
        {
          headers: {
            "ngrok-skip-browser-warning": "skip-browser-warning",
          },
        }
      );
      onOrderStatusChange()
      console.log(response)
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const CompleteOrder = async (orderId: string) => {
    console.log(orderId)
    try {
      
      const response = await authAxios.put(
        `/orders/update-status/${orderId}`,{isActive:false},
        {
          headers: {
            "ngrok-skip-browser-warning": "skip-browser-warning",
          },
        }
      );
      onOrderStatusChange()
      console.log(response)
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className={styles.Order}>
        <div>{}</div>
        {orderdetails.map((order) => (
          <div className={styles.OrderItems}>
            <h3>{}</h3>
            <h1>{order?.name} </h1><span>  Time required : {order?.averageCookingTime} Mins</span>
            <Button text="View Recipe" onclick={() => setActive(true)} />
            
            {active && (
              <div className={styles.Recipe}>
                <div className={styles.RecipeEach}>
                  <span
                    className={styles.Cross}
                    onClick={() => setActive(false)}
                  >
                    X
                  </span>
                  <h2>Recipe</h2>
                  <p>{order?.recipe}</p>
                </div>
              </div>
            )}
          </div>
        ))}

   { status==='Start' && <Button text={status} onclick={() => StartOrder(orderId)} />}
   
   { status==='Complete' && <Button text={status} onclick={() => CompleteOrder(orderId)} />}
      </div>
    </>
  );
};

export default OrderItem;
