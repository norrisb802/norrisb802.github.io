const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
let filename    = '';

const downloadBtn = document.getElementById ('download-btn');

const upLoadFile = document.getElementById ('upload-file');


//todo filters

//upload file

upLoadFile.addEventListener('change', (e) =>{
  //get File
const file = document.getElementById('upload-file').files[0];

  //init FileReader
  const reader = new FileReader();

  if(file) {
    //set file name
    fileName=file.name;
    //read data as URL
    reader.readAsDataURL(file);
  }
// Add iamge to canvas
  reader.addEventListener('load', () => {
   img = new Image();
  //set src
   img.src=reader.result;
  //on image load, add to canvas
    img.onload = function(){
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img,0,0, img.height,img.height);
    canvas.removeAttribute('data-caman-id');


    }
  }, false);



});



