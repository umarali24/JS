api = "https://jsonplaceholder.typicode.com/users"

response = fetch(api).then(response => {
    return response.json()  
}).then(data => {
    console.log(data);
}).catch(error => {
    console.error('Error:', error);
});