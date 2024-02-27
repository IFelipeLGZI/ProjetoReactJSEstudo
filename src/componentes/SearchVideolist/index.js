import { useEffect, useState } from "react";
import VideoList from "../videolist";
import styles from "./SearchVideolist.module.css"
import Loader from "../Loader";


function filtervideos(videos, searchText) {
     return videos.filter((video) => video.category.includes(searchText) || 
     video.title.includes(searchText) )
}


function SearchVideolist({videos}) {

     const[searchText, setSearchText] = useState('')
     const foundvideos = filtervideos(videos, searchText)

     const[ loading, setLoading] = useState(true)
     useEffect( () => {
          setTimeout(() => setLoading(false) , 2000)  
     }, [])

 return(
   
    
    <section className={styles.container}>
       <input 
        type="search"
        placeholder="Pesquisar.."
        value={searchText}
        onChange={event => setSearchText(event.target.value)}
       />
 {  
                   loading ? <Loader/>  :        
          <VideoList videos = {foundvideos}
               emptyHeading={`Sem vídeos sobre "${searchText}"`}
          /> 
}

    </section>
    
    
  
 );


} 

export default SearchVideolist