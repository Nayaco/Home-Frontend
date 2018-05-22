const Get = (url)=>{
    return fetch(url)
    .then(res => res.json())
    .catch((error)=>{
        return (null, error)
    })
}

const Post = (url, data)=>{
    return fetch(url,{
        body: data,
        cache: 'no-cache',
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        referrer: 'no-referrer', 
    })
    .then(res => res.json())
    .catch((error)=>{
        return(null, error)
    })
}

export default {
    Get,
    Post
}