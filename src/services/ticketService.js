export const getAllTickets = () => {
    return fetch("http://localhost:8080/serviceTickets?_embed=employeeTickets").then((res) => res.json())
}