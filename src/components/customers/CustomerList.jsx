import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/userService"
import { Users } from "../users/Users"
import "./Customers.css"
import { Link } from "react-router-dom"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then(customerArray => {setCustomers(customerArray)})
    }, [])

    return <div className="customers">
        {customers.map(customerObj => {
            return <Link to={`/customers/${customerObj.id}`} key={customerObj.id}><Users user={customerObj} /></Link>
        })}
    </div>
}