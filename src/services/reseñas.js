import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/review'

const getAll = () =>{
    const request = axios.get(baseUrl)
    const nonExixting={
        id: 10000,
        cotenido: 'Not saved to server',
        nombreAutor: 'Not name',
        date: new Date().toISOString()
    }
    return request.then(response => response.data.concat(nonExixting))
}

const create = newObject =>{
    const request = axios.post(baseUrl,newObject)
    return request.then(response=>response.data)
}

const update=(id,newObject)=>{
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default{getAll,create,update}