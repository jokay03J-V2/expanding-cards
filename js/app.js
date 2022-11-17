import "../css/style.css"
const cards = document.getElementsByClassName("card")

for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    card.addEventListener("click", (ev) => {
        for (let iCard = 0; iCard < cards.length; iCard++) {
            const c = cards[iCard]
            console.log(c);
            console.log(ev.currentTarget);

            if (ev.currentTarget === c) {
                c.classList.toggle("active")
            } else 
            if(c.classList.contains("active") && ev.currentTarget !== c){
                c.classList.remove("active")
            }
        }
    }, true)
}