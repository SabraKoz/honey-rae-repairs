import { useEffect, useState } from "react"
import { getStaffUsers } from "../../services/userService"
import { Users } from "../users/Users"
import "./Employees.css"
import { Link } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then(employeeArray => {setEmployees(employeeArray)})
    }, [])

    return <div className="employees">
        {employees.map(employeeObj => {
            return <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}><Users user = {employeeObj} /></Link>
        })}
    </div>
}