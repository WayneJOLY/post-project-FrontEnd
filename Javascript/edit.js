document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector(".form-container").classList.add("form-container-active")

    const urlParams= new URLSearchParams(window.location.search)
    const id=urlParams.get("id")
    console.log(id)
   // try{
   //     const newpost={
   //         title:document.querySelector("#title").value,
   //         content:document.querySelector("#content").value
   //     }
   // }
   // catch(error){
   //     console.log(error)
   // }
    
   const getPost=async(id)=>{
    try{
        const postdata= await axios.get(`http://localhost:8080/api/v1/posts/${id}`)
        const post=postdata.data
        console.log(post)
        document.querySelector("#new-title").value=post.title
        document.querySelector("#new-content").value=post.content
        
    }catch(error){
        console.log(error)
    }
   }

   if(id){
    getPost(id)
   }
    
   document.querySelector(".form-container").addEventListener("submit",()=>
    {
        const newpost={
            title:document.querySelector("#new-title").value.trim(),
            content:document.querySelector("#new-content").value.trim()
        }

        try{
            axios.put(`http://localhost:8080/api/v1/posts/${id}`,newpost)
            window.location.href="./../index.html"
            window.location.replace("./index.html")
        }catch{
            console.log(error)
        }
    })
})