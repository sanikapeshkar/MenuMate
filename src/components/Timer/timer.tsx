import { useEffect, useState } from "react";
import styles from './timer.module.scss'
interface TimerProps{
    startTime:number,
    onend:()=>string;

}
export default function Timer({startTime,onend}:TimerProps){
   const [Time,setTime]=useState(startTime);

   useEffect(()=>{
    setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 10000);
   },[Time])

    return <div className={styles.Timer}>{Time}</div>
}