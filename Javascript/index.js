document.addEventListener("DOMContentLoaded",()=>{
    //Obtener el objeecto que se servirá para mostrar 
    const tabla=document.getElementById("table-container")
    const crearPost=document.querySelector(".form-container")
    const btnAgregar=document.querySelector(".btnAdd")


    const fechDatos=(async()=>{
        try{
            const respuesta= await axios.get("http://localhost:8080/api/v1/posts")//https://uiverse.io/gharsh11032000/bitter-cow-59
            const posteos= respuesta.data
            tabla.innerHTML=""
            posteos.array.forEach(post => {
                const tableRow=document.createElement("tr")

                const title=document.createElement("td")
                const content=document.createElement("td")
                const actions=document.createElement("td")

                title=post.title
                content=post.content

                const btnEliminar=document.createElement("button")
                btnEliminar.innerText="Elimniar"
                btnEliminar.addEventListener("click",()=>{deletePost(post.id)})

                const btnModificar=document.createElement("button")
                btnEliminar.innerText="Modificar"
                
            })
        }
        catch(error){
            console.log(error)
        }

        
    })

    const deletePost= async(id)=>{
        try{
            await axios.delete(`http://localhost:8080/api/v1/posts/${id}`)
        }catch(error){
            console.log(error)
        }
    }

    btnAgregar.addEventListener("click",()=>{
        crearPost.classList.toggle("form-container-active")
    })
})



