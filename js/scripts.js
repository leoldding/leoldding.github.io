function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        (rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.bottom >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

function viewportCheck(element)
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

viewportCheck();
document.addEventListener("scroll", viewportCheck);
document.addEventListener("resize", viewportCheck);


itemCopy = document.getElementById("copyThis");
itemCopy.addEventListener("click", copy);
function copy()
{
    if(navigator.clipboard)
    {
        itemCopy = document.getElementById("copyThis");
        navigator.clipboard.writeText("ld2425@nyu.edu").then(() =>
        {
            itemCopy.innerHTML = "Email Copied!";
            setTimeout(() => {itemCopy.innerHTML = "Email Me: ld2425@nyu.edu";},1000)

        });
    }
}