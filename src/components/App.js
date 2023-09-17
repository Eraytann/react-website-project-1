import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import ContentPage from "./pages/ContentPage";
import GalleryPage from "./pages/GalleryPage";
import NewsContentPage from "./pages/NewsContentPage";

function toUrlFriendly(str) {
      return str.toLowerCase().replace(/\s+/g, "-");
    }    

export default function App(){
return(
      <Router>
            <Routes>
                  <Route path="/homepage" element={<Homepage/>}/>
                  <Route path="/content-page" element={<ContentPage/>}/>
                  <Route path="/gallery-page" element={<GalleryPage/>}/>
                  <Route path="/news-content-page" element={<NewsContentPage/>}/>
            </Routes>
      </Router>
);
}
