import Header from "../../Header";
import styles from "./watch.module.css"
import Footer from "../../footer";
import Container from "../../Contatiner/idex";
import { useParams } from "react-router-dom";
import videos from "../../../json/videos.json"
import PageNotFound from "../pagenotfound";

function Watch () { 

       const param = useParams()
       const video = videos.find((video) => {return video.id === param.id})
      if(!video) {return <PageNotFound/> }
return (
 <>
  <Header></Header>
 <Container>
    
    
    
 <section className={styles.watch}>
        <h1>Assistir</h1>
        <iframe 
        width="854" height="480" 
        src={`https://www.youtube.com/embed/${video.id}`} 
        title="YouTube video player"
       frameborder="0"
       allow="accelerometer; autoplay;
           clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </section>
    
    
    
    
     </Container>

 
  <Footer></Footer>

 </>

); 

}



export default Watch;