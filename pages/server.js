import { useState } from "react"
import {useRouter} from 'next/router'

function Server({eventList}){
    const[events,setEvents] = useState(eventList)
    const router = useRouter

    const fetchSportsCategory = async() =>{
        const response = await fetch(`https://localhost:4000/events?category=sports`) 
        const data = response.json()
        setEvents(data)
        router.push('/events?category=sports',undefined,{sallow:true})
    }

    return(
        <div>
        <button onClick={fetchSportsCategory}>addSports</button>
        {events.map((each)=>{
            return(
                <div key={each.id}>
                <h1>{each.News}</h1>
                <h5>{each.category}</h5>
                </div>
            )
        })}
        
        </div>
    )

}

export async function getServerSideProps(context){

    const{query} = context
    const{category} = query
    const queryString = category? "category=sports":""

    const response = await fetch(`https://localhost:4000/events?${queryString}`) 
    const data = response.json()

    return{
        props:{
            eventList:data,
        }
    }
}

export default Server

