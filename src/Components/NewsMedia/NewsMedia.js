import React from 'react';
import Nav from '../Nav/Nav';
import  mediaone from "../../assets/MEDIAONE.jpeg"
import  mediatwo from "../../assets/MEDIATWO.jpg"
import  mediathree from "../../assets/MEDIATHREE.jpg"
import "./NewsMedia.css"

const NewsMedia = () => {
    return (
        <div>
            <Nav className=" "></Nav>
           

            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 px-4 mx-4  items-center justify-items-center">
            <div className="  w-full   items-center justify-items-center bg-cover bg-no-repeat media">
     
        <div className=" mt-[337px] ml-[40px]                        ">
          <h1 className="text-4xl font-bold text-white">Background Image with Text</h1>
          <p className="text-lg text-white mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      
      {/* <img
        className="absolute inset-0 w-full bg-cover  p-4"
        src={mediaone}
        alt="Background"
      /> */}
    </div>
  
  <div class="p-2   bg-red-500">
    <div className='flex gap-3  items-center justify-items-center mt-1'>
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