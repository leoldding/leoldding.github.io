function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function check(element)
{
  fadeBlocks = document.querySelectorAll(".block");
  fadeTitles = document.querySelectorAll(".title");
  fadeBlocks.forEach(function(element){
    if(isInViewport(element) && !element.classList.contains("fadeIn"))
    {
      element.classList.add("fadeIn");
    }
  });
  fadeTitles.forEach(function(element){
    if(isInViewport(element) && !element.classList.contains("fadeIn"))
    {
      element.classList.add("fadeIn");
    }
  });
}

check();
document.addEventListener('scroll', check);
document.addEventListener('resize', check);
