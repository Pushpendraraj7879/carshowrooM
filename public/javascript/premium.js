
const User=require("../../modules/User");


const cars = [
      { image: "fsfs", heading: "lambo1", description: "high Speed car", price: "5cr" },
      { image: "fsfs", heading: "lambo2", description: "high Speed car", price: "5cr" },
      { image: "fsfs", heading: "lambo3", description: "high Speed car", price: "5cr" },
      { image: "fsfs", heading: "lambo4", description: "high Speed car", price: "5cr" },
      { image: "fsfs", heading: "lambo5", description: "high Speed car", price: "5cr" },
      { image: "fsfs", heading: "lambo6", description: "high Speed car", price: "5cr" },
      { image: "fsfs", heading: "lambo7", description: "high Speed car", price: "5cr" }
  ];


  function renderCars(carGallery, cars, currentIndex, carPerPage) {
      carGallery.innerHTML = "";

      for (let i = currentIndex; i < currentIndex + carPerPage && i < cars.length; i++) {
          let carDiv = document.createElement('div');
          carDiv.classList.add("carContainer");
          carGallery.appendChild(carDiv);

          let carDivImage = document.createElement('img');
          carDivImage.classList.add("carImage");
          carDivImage.setAttribute("src", "./image/auto-2179220_640.jpg");
          carDiv.appendChild(carDivImage);

          let carDivHeading = document.createElement('div');
          carDivHeading.classList.add("carHeading");
          carDivHeading.innerHTML = `${cars[i].heading}`;
          carDiv.appendChild(carDivHeading);

          let carDivDescription = document.createElement('div');
          carDivDescription.classList.add("carDescription");
          carDivDescription.innerHTML = `${cars[i].description}`;
          carDiv.appendChild(carDivDescription);

          let carDivPrice = document.createElement('div');
          carDivPrice.classList.add("carPrice");
          carDivPrice.innerHTML = `${cars[i].price}`;
          carDiv.appendChild(carDivPrice);
      }
  }

  
  function initializeGallery(galleryId, btnPrevId, btnNextId, cars, carPerPage) {
      let currentIndex = 0;
      let carGallery = document.getElementById(galleryId);
      let btnPrev = document.getElementById(btnPrevId);
      let btnNext = document.getElementById(btnNextId);

      function showNext() {
          if (currentIndex + carPerPage < cars.length) {
              currentIndex += carPerPage;
              renderCars(carGallery, cars, currentIndex, carPerPage);
          }
      }

      function showPrev() {
          if (currentIndex > 0) {
              currentIndex -= carPerPage;
              renderCars(carGallery, cars, currentIndex, carPerPage);
          }
      }

      btnPrev.addEventListener('click', showPrev);
      btnNext.addEventListener('click', showNext);

      renderCars(carGallery, cars, currentIndex, carPerPage);
  }


  initializeGallery('carGallery1', 'prevBtn1', 'nextBtn1', cars, 4);
  initializeGallery('carGallery2', 'prevBtn2', 'nextBtn2', cars, 4);
  initializeGallery('carGallery3', 'prevBtn3', 'nextBtn3', cars, 4);
  initializeGallery('carGallery4', 'prevBtn4', 'nextBtn4', cars, 4);


