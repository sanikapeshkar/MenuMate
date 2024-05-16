import { useEffect, useState } from "react";
import Main from "./pages/Main/main";

import axios from "axios";
import Cart from "./pages/Cart/Cart";
import Dashboard from "./pages/Staffdashboard/dashboard";
import { CartItem } from "./pages/Cart/cart.types";
import { Route } from "./Router/Route";
import authAxios from "./services/AxiosInstance";
import MainDashboard from "./pages/MainDashabord/maindashboard";

export default function App() {
  const [page, setPage] = useState("home");

  function GotoPage(page: string) {
    setPage(page);
  }
  const [menu, setMenu] = useState<Menu[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const getMenuList = async () => {
    try {
      const res = await authAxios.get(
        "/menu/getmenu"
      );
      console.log(res.data.data);
      setMenu(res.data.data);
    } catch (error: any) {
      console.error("Error fetching menu list:", error.message);
      return [];
    }
  };

  useEffect(() => {
    getMenuList();
  }, []);

  const checkoutCart = () => {
    // implement checkout logic
  };
  function getRandomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const addtocart = (id: string, quantity: number) => {
    if(quantity>0){
    const selectedItem = menu.find((item) => item._id === id);
    if (!selectedItem) {
      console.error(`Item with id ${id} not found`);
      return;
    
    }
    const cartItem: CartItem = {
      itemId: selectedItem._id,
      quantity: quantity,
      price: selectedItem.price,
      averageCookingTime: selectedItem.averageCookingTime,
    };
    console.log(selectedItem);
    setCart((prev) => [...prev, cartItem]);
    console.log("cart", cart);
  }
  };

  return (
    <>
      {page === "home" && (
        <Main tableNumber={getRandomInteger(1, 10)}menu={menu} addtocart={addtocart} GotoPage={GotoPage} />
      )}

      {page === "cart" && (
        <Cart
          tableNumber={getRandomInteger(1, 10)}
          menu={menu}
          cart={cart}
          GotoPage={GotoPage}
        />
      )}
      {page === "dashboard" && <Dashboard menu={menu} GotoPage={GotoPage} />}

      {page === "MainDashboard" && <MainDashboard GotoPage={GotoPage} />}
    </>
  );
}
