import { useState } from "react";
import { categorias } from "../Categoria";
import styles from "./Form.module.css";
function Form(){


     // Validar Url
     function ValideUrl(url){
            
      const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/
      if(!regex.test(url) || url.length <43 ) {
        setErrors('ERRO:URL inválida!') 
        return false 
      } else{
        return url.substring(32,43)   // id do vídeo 
      }
     }    
   


       function onSave(e) {
          e.preventDefault()
           console.log(url,categor)
            
           
           // Validar categoria 
             if(!categor||categor === "-") {
          
              setErrors('ERRO:Escolha uma categoria!!!')
              return
            } else{
              setErrors('')
            }


            // Validar Url
            const urlVideo = ValideUrl(url)             
            if(urlVideo && categor) {
              // salvar os dados 
                    //    Guardar a Url e a categoria 
        const newVideo = {url, categor} 
        setVideos([...videos, newVideo])
      localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))
   //    limpar o formulário 
        setUrl('')
        setCategor('') 
             
            } else {
              setErrors('ERRO:URL inválida!')
            }
        
            
               
       }



      const[ url, setUrl] = useState ('')
      const [categor,setCategor] = useState ('')
      const [videos, setVideos] = useState([])
      const [errors, setErrors] = useState('')
    return(
         <section className={styles.container}>
            <h2>Cadastro de vídeo</h2>
          <form onSubmit={onSave}>
            <div>
             <label> URL do vídeo</label>
             <input type="text" 
              placeholder="Digite a URL do vídeo"
              required ="required"
              value={url}
              onChange ={e => setUrl (e.target.value)}
              maxLength ="43 "
              minLength="43"
             />
            </div> 

             <div>
                  <label>Categoria</label>
                  <select
                  value={categor}
                  onChange = {e => setCategor (e.target.value)}
                  required ="required"
                  > 
                     <option value="-">Selecione uma categoria </option>
                     {categorias.map(item => {
                         return <option value={item}>{item} </option>
                     })}
                  </select>

             </div>
               <div>
                <button>Cadastrar</button>
               </div>

               <div>
                {errors}
               </div>
          </form>

         </section>



    )
}
export default Form;