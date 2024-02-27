import Header from "../../Header";
import Footer from "../../footer";
import Banner from "../../Banner";
import Container from "../../Contatiner/idex";
import Card from "../../Card"
import Category, {categorias, filtrar} from "../../Categoria"
import Carrosel from "../../Carrosel";
import ScrollToTopButton from "../../top";


function Home() {


  return (
    <> 
    <ScrollToTopButton />
    <Header />   
    <Banner imagem="home"/> 
    <Container >     



  {  
  categorias.map( (category, index)=>
  <Category categoria={category}>
    <Carrosel> 
  {filtrar(index).map((video) => <Card id= {video.id} key={video.id}  /> ) }
  </Carrosel>
  </Category>        
  )
 
 } 
  
  
   </Container>
  
  
   <Footer />
   </>
  );
}

export default Home;