import { useEffect, useState } from "react"
import { getStaffUsers } from "../../services/userService"
import { Users } from "../../users/Users"
import "./Employees.css"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then(employeeArray => {setEmployees(employeeArray)})
    }, [])

    return <div className="employees">
        {employees.map(employeeObj => {
            return <Users user = {employeeObj} />
        })}
    </div>
}