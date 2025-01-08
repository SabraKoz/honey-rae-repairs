export const getAllEmployees = () => {
    return fetch(`http://localhost:8080/employees?_expand=user`).then((res) => res.json())
}