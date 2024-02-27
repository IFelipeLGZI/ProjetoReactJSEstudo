import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import PageNotfound from "./pages/pagenotfound"
import Search from "./pages/search";
import Favorites from "./pages/Favorites";
import FavoritesProvider from "../context/Favorites";
import VideoCadastre from "./pages/VideoCadastre";


function AppRoutes (){ 
return  (
 <BrowserRouter >
 <FavoritesProvider> 
  <Routes>
   <Route path="/" element={<Home/>}> </Route>
   <Route path="/Watch/:id" element={<Watch/>}> </Route>
   <Route path="/search" element={<Search/>}> </Route> 
   <Route path="/favorites" element={<Favorites/>}> </Route>
   <Route path="/cadastrar" element={<VideoCadastre/>} > </Route>
   <Route path="*" element={<PageNotfound/>}> </Route>
  </Routes>
  </FavoritesProvider>

 </BrowserRouter>
); 
}
export default AppRoutes