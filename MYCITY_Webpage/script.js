function showInfo(landmark) {
    const img = document.getElementById("landmarkImg");
    const text = document.getElementById("landmarkText");
    const infoSection = document.getElementById("infoSection");
  
    let info = {
      shaniwar: {
        image: "images/landmark1.jpg",
        text: "Shaniwar Wada is a historical fortification in Pune, India built in 1732."
      },
      aga: {
        image: "images/landmark2.jpg",
        text: "Aga Khan Palace is a majestic building in Pune, India with great historical significance."
      },
      sinhagad: {
        image: "images/landmark3.jpg",
        text: "Sinhagad Fort is a hill fortress located about 35 km southwest of Pune."
      }
    };
  
    img.src = info[landmark].image;
    text.innerText = info[landmark].text;
    infoSection.classList.remove("d-none");
  }
  