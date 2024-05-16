import { Button } from "../Button/Button";
import styles from './counter.module.scss'
interface CounterProps{
    count:number,
    setCount:(count:number)=>void
}
export default function Counter({count,setCount}:CounterProps){

    return  <div className={styles.Counter}>
    <Button text="+" onclick={()=>setCount(count+1)}/>{count}<Button text="-" onclick={()=>setCount(count-1)}/>

    </div>
}