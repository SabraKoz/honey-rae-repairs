export const getAllEmployees = () => {
    return fetch(`http://localhost:8080/employees?_expand=user`).then((res) => res.json())
}

export const getEmployeeById = (id) => {
    return fetch(`http://localhost:8080/employees?_expand=user&_embed=employeeTickets&userId=${id}`).then((res) => res.json())
}

export const updateEmployee = (employee) => {
    return fetch(`http://localhost:8080/employees/${employee.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    })
}