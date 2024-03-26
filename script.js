//Select all the elements that will make the fadeIn animation;
const elements = document.querySelectorAll('.hidden');

//Create an observer that verify if an element is visible or not;
const observer = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    })
})

//Observe each element individually;
elements.forEach( (element) => {observer.observe(element)});
