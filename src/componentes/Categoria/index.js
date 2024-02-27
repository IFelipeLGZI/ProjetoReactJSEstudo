import styles from "./categoria.module.css";
import videos from "../../json/videos.json"
export const categorias =[
  "Geografia",
  "Como fazer e usar",
  "Astronomia e Geografia", 
  "Climatologia, Meteorologia, Vegetação",
  "Geologia e Hidrografia"


] 


export function filtrar (id) {
  return videos.filter( video => video.category === categorias [id])
}


function categoria ({categoria, children }) {

  return(  
    <sectiion className={styles.categoria}> 
    <h2>{categoria}</h2>
    <div className="cards">       
          {children}
 </div> 
 </sectiion>
  )

} 

export default categoria