import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService"
import { Ticket } from "./Ticket"
import { TicketFilterBar } from "./TicketFilterBar"
import "./Tickets.css"

export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([])
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        getAllTickets().then((ticketsArray) => {
            setAllTickets(ticketsArray)
            console.log("tickets set!")
        })
    }, [])

    useEffect(() => {
        if (showEmergencyOnly) {
            const emergencyTickets = allTickets.filter(ticket => ticket.emergency === true)
            setFilteredTickets(emergencyTickets)
        } else {
            setFilteredTickets(allTickets)
        }
    }, [showEmergencyOnly, allTickets])

    useEffect(() => {
        const foundTickets = allTickets.filter(ticket => ticket.description.toLowerCase().includes(searchTerm.toLowerCase()))

        setFilteredTickets(foundTickets)
    }, [searchTerm, allTickets])

    return (
        <div className="tickets-container">
            <h2>Tickets</h2>
            <TicketFilterBar setShowEmergencyOnly={setShowEmergencyOnly} setSearchTerm={setSearchTerm} />
            <article className="tickets">
                {filteredTickets.map((ticketObj) => {
                    return <Ticket ticket={ticketObj} key={ticketObj.id} />
                })}
            </article>
        </div>
    )
}