import useSwr from "swr"

const fetcher = async()=>{
    const response = await fetch("https://localhost:4000/dashboard")
    const data = await response.json()
    return data
}

function DashBoard(){

    const {data,error} = useSwr('dashboard',fetcher)

    if(error){
        return <h1>An error occured</h1>
    }
    if(!data){
        return <h1>Loading...</h1>
    }

    return(
        <div>
        <h1>Post - {data.Posts}</h1>
        <h1>Likes - {data.Likes}</h1>
        <h1>Followers - {data.Followers}</h1>
        <h1>Following = {data.Following}</h1>
        </div>
    )

}
export default DashBoard