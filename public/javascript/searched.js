// console.log("in Js")

// let currentIndex=0;
// const  carPerPage=4;
// let carGallery=document.getElementById("carGallery3")
// let car=[{image:"fsfs",heading:"lambo1",description:"high Speed car",price:"5cr"},{image:"fsfs",heading:"lambo",description:"high Speed car",price:"5cr"},
//       {image:"fsfs",heading:"lambo2",description:"high Speed car",price:"5cr"},{image:"fsfs",heading:"lambo",description:"high Speed car",price:"5cr"},
//       {image:"fsfs",heading:"lambo3",description:"high Speed car",price:"5cr"},{image:"fsfs",heading:"lambo",description:"high Speed car",price:"5cr"},
//       {image:"fsfs",heading:"lambo4",description:"high Speed car",price:"5cr"},{image:"fsfs",heading:"lambo",description:"high Speed car",price:"5cr"},
//       {image:"fsfs",heading:"lambofsfsfs",description:"high Speed car",price:"5cr"},
//       {image:"fsfs",heading:"lambo5",description:"high Speed car",price:"5cr"},{image:"fsfs",heading:"lambo",description:"high Speed car",price:"5cr"}
// ]

// function renderCars(){
//        carGallery.innerHTML=" ";

//        for(let i=currentIndex;((i<currentIndex+carPerPage)&&(i<car.length));i++){
          
//         let carDiv=document.createElement('div');
//         carDiv.classList.add("carContainer");
//         carGallery.appendChild(carDiv);

//         let carDivImage=document.createElement('img');
//         carDivImage.classList.add("carImage");
//         carDiv.appendChild(carDivImage);
//         carDivImage.setAttribute("src","./image/auto-2179220_640.jpg");
//       //   carDivImage.innerHTML=`${car[i].image}`;

//         let carDivHeading=document.createElement('div');
//         carDivHeading.classList.add("carHeading");
//         carDiv.appendChild(carDivHeading);
//          carDivHeading.innerHTML=`${car[i].heading}`

//         let carDivDescription=document.createElement('div');
//         carDivDescription.classList.add("carDescription");
//         carDiv.appendChild(carDivDescription);
//          carDivDescription.innerHTML=`${car[i].description}`


//         let carDivPrice=document.createElement('div');
//         carDivPrice.classList.add("carPrice");
//         carDiv.appendChild(carDivPrice);
//          carDivPrice.innerHTML=`${car[i].price}`
         
//        }


            
       
//       }
//       // document.getElementById('prevBtn').disabled=(currentIndex===0);
//       // document.getElementById('nextBtn').disabled=((currentIndex+carPerPage)>=car.length);

// function showNext3(){
//       if (currentIndex + carPerPage < car.length) { // Ensure we don't go out of bounds
//             currentIndex += carPerPage;
//             renderCars();
//         }
// }

// function showPrev3(){
//       if (currentIndex > 0) { // Ensure we don't go out of bounds
//             currentIndex -= carPerPage;
//             renderCars();
//         }
//   }

//   document.getElementById('prevBtn3').addEventListener('click', showPrev3);
// document.getElementById('nextBtn3').addEventListener('click', showNext3);

//   renderCars();