import styles from "./card.module.css"
import { Link } from "react-router-dom";
import iconFavorite from"./favorite.png"
import iconUnFavorite from"./unfavorite.png"
import { useFavoriteContext } from "../../context/Favorites";

function Card ({ id }) {
 
   const{favorite, addFavorite } = useFavoriteContext()
   const isFavorite = favorite.some((fav)=>fav.id === id)
   const icone = !isFavorite ?  iconUnFavorite : iconFavorite

   return(

      <section className={styles.card}>

        <Link to={`../Watch/${id}`}
        
        >
            <img src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="Capa"
             className={styles.capa}
            >
            
            </img>
        </Link>
        <figure className={styles.icon}>
                  <img 
                  src={icone} 
                  alt="ícone"
                  onClick={() => addFavorite({id})}
                  />
          </figure>
      </section>

   );

}

export default Card