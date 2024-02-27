import styles from "./search.module.css"
import Header from "../../Header";
import Footer from "../../footer";
import Container from "../../Contatiner/idex";
import VideoList from "../../videolist";
import videos from "../../../json/videos.json"
import SearchVideolist from "../../SearchVideolist";
import ScrollToTopButton from "../../top";

function Search() {


 return(
    <>
     <ScrollToTopButton />
    <Header/>
  <Container>
  <section className={styles.search}>
       
        <SearchVideolist videos = {videos }/>
    </section>
    
    
    </Container>    
 
     
  <Footer/>
    </>
  );

 
 
 
}


export default Search