import { Button } from "../../components/Button/Button";


export default function MainDashboard({GotoPage}:MainDashboardProps){

    return<><Button text="<-" onclick={GotoPage('home')}/><h2> Orders</h2></>
}