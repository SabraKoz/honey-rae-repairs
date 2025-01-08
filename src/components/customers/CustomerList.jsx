import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/userService"
import { Users } from "../../users/Users"
import "./Customers.css"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then(customerArray => {setCustomers(customerArray)})
    }, [])

    return <div className="customers">
        {customers.map(customerObj => {
            return <Users user={customerObj} />
        })}
    </div>
}