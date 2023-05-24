import React from 'react';
import Nav from '../Nav/Nav';
import  mediaone from "../../assets/MEDIAONE.jpeg"
import  mediatwo from "../../assets/MEDIATWO.jpg"
import  mediathree from "../../assets/MEDIATHREE.jpg"

const NewsMedia = () => {
    return (
        <div>
            <Nav className=" "></Nav>
           

            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 px-4 mx-4  items-center justify-items-center">
  <div>
    <img src={mediaone} alt="First Picture" class="w-full p-3" />
  </div>
  <div class="p-2">
    <div className='flex gap-3  items-center justify-items-center'>
    <div>
      <img src={mediaone} alt="Second Picture" class="w-full p-1"  />
    </div>
    <div>
      <img src={mediaone} alt="Third Picture" class="w-full p-1" />
    </div>
    </div>
    <div className='flex gap-3   items-center justify-items-center'>
    <div>
      <img src={mediaone} alt="Second Picture" class="w-full p-1"/>
    </div>
    <div>
      <img src={mediaone} alt="Third Picture" class="w-full p-1" />
    </div>
    </div>
     
  </div>
</div>

        </div>
    );
};

export default NewsMedia;