const fetchProduct=async()=>{
    const fetchLink=await fetch("https://dummyjson.com/products")
    const result= await fetchLink.json()
    return result
}

export default fetchProduct