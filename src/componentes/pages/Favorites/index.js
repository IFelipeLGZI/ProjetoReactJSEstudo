import styles from "./Favorites.module.css";
import Header from "../../Header";
import Container from "../../Contatiner/idex.js";
import Footer from "../../footer";
import VideoList from"../../videolist";
import { useFavoriteContext } from "../../../context/Favorites";
import ScrollToTopButton from "../../top";
function Favorites(){

    const {favorite} = useFavoriteContext()
    
    return(
          <>  
           <ScrollToTopButton />
           <Header/>
            <Container>
       
               <section className={styles.favoritos}>
               <h2>Meus favoritos</h2>
                 { <VideoList videos ={favorite}  emptyHeading="Sem favoritos" />}
               </section>
            </Container>
             <Footer/>
           </>

    )
}

export default Favorites