import styles from "./notfound.module.css";
import erro404 from "./erro404.png";
import Header from "../../Header";
import Footer from "../../footer"

function notfound(){
    return(
          <>
                   <Header/>
        <section className={styles.container}>
          <h2>Conteúdo não localizado</h2>
          <img src={erro404} alt="Página não localizada"/>
        </section>
         <Footer/>  

          
          
          
          
          </>
    );

} 

export default notfound