interface MainProps{
    tableNumber:number;
    menu:Menu[];
    addtocart:(id:string,quantity:number)=>void;
    GotoPage:(page:string)=>void;
}