import { useState } from "react"

interface RouteProps{
    path:string
    children:JSX.Element
}




export const Route=({path,children}:RouteProps,)=>{
    const [currentPath,setcurrentPath]=useState(window.location.pathname)
    function Router(){
    setcurrentPath(path);

    }
    return<>{children}</>

}