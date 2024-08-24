const photoContainer = document.querySelector(".container")
const btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    num = 6
    addNewImages()
})
function addNewImages() {
    for (let index = 0; index < num; index++) {
        const newImg = document.createElement("img")
        newImg.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 2000)}`
        photoContainer.appendChild(newImg)
    }

}