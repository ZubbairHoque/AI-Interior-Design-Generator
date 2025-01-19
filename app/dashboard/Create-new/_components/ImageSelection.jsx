"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function ImageSelection({ selectedImage }) {
  const [file, setFile] = useState();

  const onFileSelected = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
    selectedImage(event.target.files[0]);
  };

  return (
    <div>
      <label>Select Image of your image</label>
      <div>
        <label htmlFor="upload-image">
          <div className={`p-28 border-dotted rounded-xl border-primary
           bg-slate-200 cursor-pointer hover:shadow-lg 
            ${file&&'p-0 bg-white'}
            `}>
              {!file ? <Image alt='' src="/ImageUpload.svg" width={70} height={70} />
              :<Image alt='' src={URL.createObjectURL(file)} width={300} height={300} 
              className='w-[300px] h-[300px] object-cover' 
              />}
          </div>
        </label>
        <input type='file' accept='image/*' 
        id="upload-image" 
        style={{ display: 'none' }} 
        onChange={onFileSelected} 
        />
      </div>
    </div>
  );
}

export default ImageSelection;