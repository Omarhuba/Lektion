import axios from "axios"
axios.defaults.baseURL= 'http://localhost:8000/api/v1'
// axios.defaults.headers.common['Content-Type'] = `application/json`;


export async function login(email, password){
    return await axios.post('/auth', {email, password})
}

export async function getPosts(){
    return await axios.get('/posts', {})
}

export function saveToken(token){
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// const BASE_URL =  'http://localhost:8000/api/v1'

// export async function login (email, password){
//     const request = await fetch(`${BASE_URL}/auth`,  {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({email, password})
//     })
//     const data = await request.json()
//     return data
// }

// export async function getPosts(token){
//     const request = await fetch(`${BASE_URL}/posts`,{
//         methods: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         },
//     })
//     const data = await request.json()
//     return data
// }
