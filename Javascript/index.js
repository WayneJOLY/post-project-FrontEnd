document.addEventListener("DOMContentLoaded",()=>{
    //Obtener el objeecto que se servirá para mostrar 
    const tabla=document.querySelector("#table-content")
    const crearPost=document.querySelector(".form-container")
    const btnAgregar=document.querySelector(".btnAdd")

console.log(crearPost)
    const fechDatos=(async()=>{
        
        try{
            const respuesta= await axios.get("http://localhost:8080/api/v1/posts")//https://uiverse.io/gharsh11032000/bitter-cow-59
            const posteos= respuesta.data
            console.log(posteos)
            tabla.innerHTML=""
            posteos.forEach(post => {
                const tableRow=document.createElement("tr")
                const title=document.createElement("td")
                const content=document.createElement("td")
                const actions=document.createElement("td")

                title.innerHTML=post.title
                content.innerHTML=post.content

                const btnEliminar=document.createElement("button")
                btnEliminar.innerText="Eliminar"
                btnEliminar.classList.add("btnEliminar")
                btnEliminar.addEventListener("click",()=>{deletePost(post.id)})

                const btnModificar=document.createElement("button")
                btnModificar.innerText="Modificar"
                btnAgregar.classList.add("btnEditar")

                actions.appendChild(btnEliminar)
                actions.appendChild(btnAgregar)

                tableRow.appendChild(title)
                tableRow.appendChild(content)
                tableRow.appendChild(actions)
                tabla.appendChild(tableRow)
            })
        }
        catch(error){
            console.log(error)
        }

        
    })

    crearPost.addEventListener("submit",(e)=>{
        e.preventDefault()
        const newpost={
            title:document.querySelector("#title").value,
            content:document.querySelector("#content").value
        }
        
        try{
            axios.post(`http://localhost:8080/api/v1/posts`,newpost)
        }catch{
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
        tabla.classList.toggle("opacar")
    })

    tabla.addEventListener("click",()=>{
        crearPost.classList.remove("form-container-active")
        tabla.classList.remove("opacar")
    })

    fechDatos()
})



