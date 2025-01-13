export const getCustomerByUserId = (userId) => {
    return fetch(`http://localhost:8080/customers?userId=${userId}&_expand=user`).then(res => res.json())
}