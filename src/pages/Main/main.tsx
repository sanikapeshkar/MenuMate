
import { Header } from "../../components/Header/header";

import MenuList from "../MenuList/MenuList";


export default function Main({tableNumber,menu,addtocart,GotoPage}:MainProps) {
  return (
    <>
      <Header  />
      <MenuList tableNumber={tableNumber} menu={menu} addtocart={addtocart} GotoPage={GotoPage} />
    </>
  );
}
