function PostDetails({post}){

    return(
        <div>
        <h1>{post.id} {post.title}</h1>
        <p>{post.body}</p>
        </div>
    )
}

export default PostDetails

export async function getStaticPaths(){
   /* const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    const paths = data.map((item)=>{
        return{
            params:{
                postId:`${item.id}`
            }
        }
    }) */
    return{
        paths:[
            {
                params:{postId:"1"}
            },
            {
                params:{postId:"2"}
            },
            {
                params:{postId:"3"}
            },
           /* {
                params:{postId:"4"}
            },
            {
                params:{postId:"5"}
            },
            {
                params:{postId:"6"}
            },
            {
                params:{postId:"7"}
            },
            {
                params:{postId:"8"}
            },
            {
                params:{postId:"9"}
            },
            {
                params:{postId:"10"}
            },*/
        ],
        fallback:'blocking',
    }
}

export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    if(!data.id){
        return{
            notFound:true,
        }
    }

    return{
        props:{
            post:data
        }
    }
}