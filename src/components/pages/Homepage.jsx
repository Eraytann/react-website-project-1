import React from 'react';
import Header from '../Header';
import GridContainerMain from '../GridContainerMain';
import GalleryPage from './GalleryPage';
import ContentPage from './ContentPage';
import NewsContentPage from './NewsContentPage';
import MainSlider from '../MainSlider';

export default function Homepage(){
  return (
    <div>    
        <Header/>
        <GridContainerMain/>
    </div>
  );
}
