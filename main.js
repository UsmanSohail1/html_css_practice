const nav = document.querySelector('.nav');
const scrollWatcher = document.createElement('div'); 
scrollWatcher.setAttribute('data-scroll-watcher','');
scrollWatcher.style.height = "1px";
scrollWatcher.style.width = "100%";
scrollWatcher.style.position = "relative"; 
scrollWatcher.style.top = "35px";

nav.before(scrollWatcher);



const logo = nav.querySelector("img");
const navObserver = new IntersectionObserver((entries) => {
  const isIntersecting = entries[0].isIntersecting;

  nav.classList.toggle('sticking', !isIntersecting);

  if (!isIntersecting) {
    logo.src = "images/logo_black.png"; 
    
  } else {
    logo.src = "images/logo.png";
  }
});

navObserver.observe(scrollWatcher);
