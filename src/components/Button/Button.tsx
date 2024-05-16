import styles from './button.module.scss'
import { ButtonProps } from './button.types'



export const Button=({text,onclick}:ButtonProps)=>{
    return <button className={styles.Button} onClick={onclick}>{text}</button>
}

 