import { useState } from "react"
import { genTicket, sum } from "./helper";
import "./Lottery.css";
import Ticket from "./Ticket";


export default function Lottery({n, winningSum}){
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === winningSum;

    let buyTicket = () => {
        setTicket(genTicket(3))
    }
    return (
    <div>
        <h1>Lottery Game!</h1>
        <Ticket ticket={ticket}/>
        
        <h3>{isWinning && "Congratulation, You Won!"}</h3>
        <button onClick={buyTicket}>Buy New Ticket</button>
    </div>
    );
}