document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("banner-tablinks")[0].click();
});

function selectTab(evt, tabs) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("banner-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("banner-tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        tablinks[i].className = tablinks[i].className.replace(" button-selected", "");
    }

    document.getElementById(tabs).style.display = "block";
    evt.currentTarget.className += " active";
}

function changeColor(id) {
    $("#"+id).css("background-color", "black");
    $("#"+id).css("color", "white");
}





// Trending indian section 

const tabsBox = document.querySelector(".tabs-box"),
allTabs = tabsBox.querySelectorAll(".tab"),
arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;

const handleIcons = (scrollVal) => {
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -340 : 340;
        handleIcons(scrollWidth);
    });
});

allTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
    });
});

const dragging = (e) => {
    if(!isDragging) return;
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft -= e.movementX;
    handleIcons(tabsBox.scrollLeft)
}

const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
}

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);



document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("india-tablinks")[0].click();
});

function selectState(evt, stateName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("india-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("india-tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        tablinks[i].className = tablinks[i].className.replace(" TID-button-selected", "");
    }

    document.getElementById(stateName).style.display = "block";
    evt.currentTarget.className += " active";
}


document.addEventListener("DOMContentLoaded", function() { 
    const carousel = document.querySelector(".carousel"); 
    const arrowBtns = document.querySelectorAll(".wrapper i"); 
    const wrapper = document.querySelector(".wrapper"); 
  
    const firstCard = carousel.querySelector(".card"); 
    const firstCardWidth = firstCard.offsetWidth; 
  
    let isDragging = false, 
        startX, 
        startScrollLeft, 
        timeoutId; 
  
    const dragStart = (e) => {  
        isDragging = true; 
        carousel.classList.add("dragging"); 
        startX = e.pageX; 
        startScrollLeft = carousel.scrollLeft; 
    }; 
  
    const dragging = (e) => { 
        if (!isDragging) return; 
      
        // Calculate the new scroll position 
        const newScrollLeft = startScrollLeft - (e.pageX - startX); 
      
        // Check if the new scroll position exceeds  
        // the carousel boundaries 
        if (newScrollLeft <= 0 || newScrollLeft >=  
            carousel.scrollWidth - carousel.offsetWidth) { 
              
            // If so, prevent further dragging 
            isDragging = false; 
            return; 
        } 
      
        // Otherwise, update the scroll position of the carousel 
        carousel.scrollLeft = newScrollLeft; 
    }; 
  
    const dragStop = () => { 
        isDragging = false;  
        carousel.classList.remove("dragging"); 
    }; 
  
    const autoPlay = () => { 
      
        // Return if window is smaller than 800 
        if (window.innerWidth < 800) return;  
          
        // Calculate the total width of all cards 
        const totalCardWidth = carousel.scrollWidth; 
          
        // Calculate the maximum scroll position 
        const maxScrollLeft = totalCardWidth - carousel.offsetWidth; 
          
        // If the carousel is at the end, stop autoplay 
        if (carousel.scrollLeft >= maxScrollLeft) return; 
    }; 
  
    carousel.addEventListener("mousedown", dragStart); 
    carousel.addEventListener("mousemove", dragging); 
    document.addEventListener("mouseup", dragStop); 
    wrapper.addEventListener("mouseenter", () =>  
        clearTimeout(timeoutId)); 
    wrapper.addEventListener("mouseleave", autoPlay); 
  
    // Add event listeners for the arrow buttons to  
    // scroll the carousel left and right 
    arrowBtns.forEach(btn => { 
        btn.addEventListener("click", () => { 
            carousel.scrollLeft += btn.id === "left" ?  
                -firstCardWidth : firstCardWidth; 
        }); 
    }); 
}); 

document.addEventListener("DOMContentLoaded", function() { 
  const carousel = document.querySelector(".carousel1"); 
  const arrowBtns = document.querySelectorAll(".wrapper1 i"); 
  const wrapper = document.querySelector(".wrapper1"); 

  const firstCard = carousel.querySelector(".card1"); 
  const firstCardWidth = firstCard.offsetWidth; 

  let isDragging = false, 
      startX, 
      startScrollLeft, 
      timeoutId; 

  const dragStart = (e) => {  
      isDragging = true; 
      carousel.classList.add("dragging"); 
      startX = e.pageX; 
      startScrollLeft = carousel.scrollLeft; 
  }; 

  const dragging = (e) => { 
      if (!isDragging) return; 
    
      // Calculate the new scroll position 
      const newScrollLeft = startScrollLeft - (e.pageX - startX); 
    
      // Check if the new scroll position exceeds  
      // the carousel boundaries 
      if (newScrollLeft <= 0 || newScrollLeft >=  
          carousel.scrollWidth - carousel.offsetWidth) { 
            
          // If so, prevent further dragging 
          isDragging = false; 
          return; 
      } 
    
      // Otherwise, update the scroll position of the carousel 
      carousel.scrollLeft = newScrollLeft; 
  }; 

  const dragStop = () => { 
      isDragging = false;  
      carousel.classList.remove("dragging"); 
  }; 

  const autoPlay = () => { 
    
      // Return if window is smaller than 800 
      if (window.innerWidth < 800) return;  
        
      // Calculate the total width of all cards 
      const totalCardWidth = carousel.scrollWidth; 
        
      // Calculate the maximum scroll position 
      const maxScrollLeft = totalCardWidth - carousel.offsetWidth; 
        
      // If the carousel is at the end, stop autoplay 
      if (carousel.scrollLeft >= maxScrollLeft) return; 
  }; 

  carousel.addEventListener("mousedown", dragStart); 
  carousel.addEventListener("mousemove", dragging); 
  document.addEventListener("mouseup", dragStop); 
  wrapper.addEventListener("mouseenter", () =>  
      clearTimeout(timeoutId)); 
  wrapper.addEventListener("mouseleave", autoPlay); 

  // Add event listeners for the arrow buttons to  
  // scroll the carousel left and right 
  arrowBtns.forEach(btn => { 
      btn.addEventListener("click", () => { 
          carousel.scrollLeft += btn.id === "left-icon" ?  
              -firstCardWidth : firstCardWidth; 
      }); 
  }); 
}); 



// Skeleton Animation 

const placeholder=document.querySelectorAll(".placeholder");
const backgroundPlaceholder=document.querySelectorAll(".background-placeholder")
        
          window.setTimeout(removePlaceholder,3000);
          function removePlaceholder(){
            placeholder.forEach(element => {
              element.classList.remove("placeholder");
             
              document.getElementById("headerImg").src="https://res.cloudinary.com/dsovyumur/image/upload/v1710767536/gogaga_logo-removebg-preview_gyjfuo.png"
              document.getElementById("navPackages").textContent="Packages";
              document.getElementById("navTours").textContent="Tours";
              document.getElementById("navHelp").textContent="Help";
              document.getElementById("navMenbership").textContent="Membership";
              document.getElementById("membershipIcon").src="https://res.cloudinary.com/drkgjrufs/image/upload/v1712061538/gem_uys2rl.png";
              document.getElementById("navGiftCards").textContent="Gift cards"
              document.getElementById("giftCardIcon").src="https://res.cloudinary.com/drkgjrufs/image/upload/v1712061554/gift-card_1_h9s6eh.png"
              document.getElementById("faBar").classList.add("d-flex")
              document.getElementById("faUser").classList.add("d-flex")
             document.getElementById("logInSection").style. border="1px solid gray";
             document.getElementById("bannerHead").textContent="Discover Your Next Adventure";
             document.getElementById("bannerDesc").textContent="Unlock your path to adventure, start your journey of discovery - wherevery destination awaits your exploration";
             document.getElementById("packagesButton").textContent="Packages";
             document.getElementById("toursButton").textContent="Tours";
             document.getElementById("destinationText").textContent="Destination";
             document.getElementById("destination").placeholder="Enter the City";
             document.getElementById("hotelBtn").style.border="1px solid #717171";
             document.getElementById("checkInText").textContent="Check-in";
             document.getElementById("check-in").type="date";
             document.getElementById("hotelBtn1").style.border="1px solid #717171";
            document.getElementById("faMoon").classList.add("d-flex");
            document.getElementById("ntText").textContent="1 Night";
            document.getElementById("checkOutText").textContent="Check-out";
            document.getElementById("check-out").type="date";
            document.getElementById("guestsText").textContent="Guests and Rooms";
            document.getElementById("guestsDetails").textContent="2 adults, 0 children, 1 room";
            document.getElementById("hotelBtn2").style.border="1px solid #717171";
            document.getElementById("faCaret").classList.add("d-flex");
            document.getElementById("faMagnifyingGlass").classList.add("d-flex");
            document.getElementById("starHead").textContent="Star Rating ";
            document.getElementById("faStar1").classList.add("d-flex");
            document.getElementById("faStar2").classList.add("d-flex");
            document.getElementById("faStar3").classList.add("d-flex");
            document.getElementById("TIDHeading").textContent="Travellers' Favourite Indian Trips"   
            document.getElementById("Text1").textContent="Quality Checked Hotels"    
            document.getElementById("Text2").textContent="Full Day Tours"    
            document.getElementById("Text3").textContent="Gaurantee Stays"     
            document.getElementById("faBuilding1").classList.add("d-flex");
            document.getElementById("faBuilding2").classList.add("d-flex");
            document.getElementById("faBuilding3").classList.add("d-flex");
            document.getElementById("left").classList.add("d-flex");
            document.getElementById("right").classList.add("d-flex");
            document.getElementById("TIDFamilyHeading").textContent="Family | Honeymoon";
            document.getElementById("TIDRating").textContent="4.3";
            document.getElementById("TIDRatingText").textContent="Amazing - 36 Reviews";
            document.getElementById("TIDCardTitle").textContent="Surprising Kerala";
            document.getElementById("TIDCardDesc2").textContent="4 Days Trip";
            document.getElementById("TIDCardPrice").textContent="19,999";
            document.getElementById("TIDCardScratchedPrice").textContent="Rs.20,999";
            document.getElementById("TIDFamilyHeading2").textContent="Family | Honeymoon";
            document.getElementById("TIDRating2").textContent="4.3";
            document.getElementById("TIDRatingText2").textContent="Amazing - 36 Reviews";
            document.getElementById("TIDCardTitle2").textContent="Surprising Kerala";
            document.getElementById("TIDCardDesc22").textContent="4 Days Trip";
            document.getElementById("TIDCardPrice2").textContent="19,999";
            document.getElementById("TIDCardScratchedPrice2").textContent="Rs.20,999";

          
           
  

            });
          }










