import Link from "next/link"

function Posts({posts}){
    return(
        <div>
        {posts.map((each)=>{
            return(
                <div key={each.id}>
                <Link href={`/posts/${each.id}`}><h1>{each.title}</h1></Link>
                <p>{each.body}</p>
                </div>
            )
        })}
        </div>
    )
}
export default Posts

export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    
    return{
        props:{
            posts:data.slice(0,3),
        }
    }
}