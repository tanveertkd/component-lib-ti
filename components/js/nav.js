const navMenuList = document.querySelector(".nav-menu-list");
const navMenuLink = document.querySelectorAll(".nav-menu-link");
const navMenuIcn = document.querySelector(".nav-menu-icn");
const navIcnMenu = document.querySelector(".nav-icn-menu");
const navIcnClose = document.querySelector(".nav-icn-close");

const toggleNavigation = () => {
    if(navMenuList.classList.contains("nav-menu-active")){
        navMenuList.classList.remove("nav-menu-active");
        navIcnClose.style.display = "none";
        navIcnMenu.style.display = "block";
    } else {
        navMenuList.classList.add("nav-menu-active");
        navIcnClose.style.display = "block";
        navIcnMenu.style.display = "none";
    }
}

navMenuIcn.addEventListener('click', toggleNavigation);

navMenuLink.forEach((item) => { 
    item.addEventListener("click", toggleNavigation);
  }
)