import styles from "./MenuList.module.scss";
import { Button } from "../../components/Button/Button";
import MenuItem from "../../components/MenuItem/MenuItem";

export default function MenuList({
  tableNumber,
  menu,
  addtocart,
  GotoPage,
}: MenuProps) {
  return (
    <div className={styles.MenuListMain}>
      <h4 className={styles.heading}>
        Your are Ordering from Table {tableNumber}
      </h4>
      <h2 className={styles.heading}>
        Showing You the list of Tastes to choose from
      </h2>
      <span onClick={() => GotoPage("cart")}>
        <Button text="Cart" onclick={addtocart} />
      </span>
      <div className={styles.Allmenu}>
        {menu.map((each) => (
          <MenuItem
            key={each._id}
            id={each._id}
            name={each.name}
            desc={each.description}
            picture={each.picture}
            price={each.price}
            onclick={addtocart}
            GotoPage={GotoPage}
          />
        ))}
      </div>
    </div>
  );
}
