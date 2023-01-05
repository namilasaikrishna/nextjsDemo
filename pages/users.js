import UserLists from "../components/UserList"
function UserList({users}){
    return(
        <div>
        <h2>UserList</h2>
        <ul>
        {users.map((each)=><UserLists user={each} key={each.id}/>)}
        </ul>
        </div>
    )
}

export default UserList

export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data)

    return{
        props:{
            users:data,
        }
    }
}