import axios from 'axios'
import React from 'react'

    
    let Base_Url = "https://api.themoviedb.org/3/"
    let Api_Key = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjkxOTNiNzkzNTBlOTliNGFhNjNkZjRmN2JlYjdmYyIsIm5iZiI6MTc1MjA0OTc0OC45OCwic3ViIjoiNjg2ZTI4NTQ5MmJjYzRiYWRlNmU4Yzg5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.vG6XZs3MsR0-kOOz1FQPxF2Zu0Ddw4rnkw7PCS9D9AI'
    
const Api_Service =  {
    getData: async (url) =>{
const responce = await axios.get(`${Base_Url}${url}`, {
    headers:{
        Authorization: Api_Key,
    },
})

return responce.data
    }
   
    
  
}

export default Api_Service