import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName ="MyFavorites"

export default function FavoritesProvider({children}) {
     
    const[favorite, setFavorite] = useState([])
 return(

    <FavoritesContext.Provider
            value={{favorite,setFavorite}}>
        {children}
    </FavoritesContext.Provider>
 );

}

// Hook personalizado 
export function useFavoriteContext() {
 const{ favorite, setFavorite} = useContext(FavoritesContext)

 function addFavorite(newFavorite){
    // verificar se o item favorito esta repetido
    const repeatedFavorite = favorite.some((item) => item.id === newFavorite.id)

    //nova lista recebe lista anterior
    let newlist = [...favorite] 

    //verificar se não tem repetido e adicionar o item na lista de favoritos
    if(!repeatedFavorite){
      newlist.push(newFavorite)
      return setFavorite(newlist)

    }
  
    // se for repetido ele será retirado da lista 
    newlist = favorite.filter((fav) => fav.id !== newFavorite.id) 
    return setFavorite(newlist)
 }
 
 return{
   favorite,
   addFavorite
 }
}