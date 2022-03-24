function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        (rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.bottom >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
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
document.addEventListener("scroll", check);
document.addEventListener("resize", check);


item = document.getElementById("copyThis");
item.addEventListener("click", copy)
function copy()
{
    if(navigator.clipboard)
    {
        item = document.getElementById("copyThis");
        navigator.clipboard.writeText(item.innerText.trim()).then(() =>
        {
            item.innerHTML = "Email Copied!";
            setTimeout(() => {item.innerHTML = "ld2425@nyu.edu";},1000)

        });
    }
}