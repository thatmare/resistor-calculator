function getUsers () {
    return fetch('http://localhost:5000/api')
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.error('Error fetching users:', error)
    })
}

export { getUsers };