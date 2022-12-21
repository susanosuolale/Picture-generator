import React from 'react';
import './ImageList.css'
import ImageCard from './ImageCard';

const ImageList = (props) => {
    console.log(props.images) 
    const images = props.images.map(image =>  <ImageCard key={image.id}  image= {image}/>  );
    return <div className='image-list'> Found: {props.images.length}
 
      {images}
    </div>
   
}

export default ImageList;