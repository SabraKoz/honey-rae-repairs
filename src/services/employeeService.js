export const getAllEmployees = (id) => {
    return fetch(`http://localhost:8080/employees?userId=${id}&_expand=user&_embed=employeeTickets`).then((res) => res.json())
}