import axios from "axios";
import styles from "./card.module.scss";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import Counter from "../Counter/counter";

interface CardProps {
  id: string;
  name: string;
  desc: string;
  price:number;
  picture:string;
  onclick:(id:string,quantity:number)=>void;
  GotoPage:(page:string)=>void;
}

export default function MenuItem({id,name,desc,price,picture,onclick,GotoPage}: CardProps) {
const [count,setCount]=useState(0);

  return (
    <div className={styles.Card}>
      <img src={picture} alt="image here" height={250} width={350}></img>
      <h1>{name}</h1>
      <p>
       {desc}
      </p>
      <h3>Rs {price}</h3>
      <div className={styles.BtnContainer}>
        <div>
       <Counter count={count} setCount={setCount}/>
        </div>
          <Button text="Add to cart" onclick={()=>{onclick(id,count); }}></Button>
      </div>
    </div>
  );
}
