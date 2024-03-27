
const API = 'https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/services'

let result = document.querySelector(".result")

async function getServices() {
    try {
        const res = await fetch(API)
        const data = await res.json()
        console.log(data)
        showServices(data)
    } catch (error) {
        console.log(error)
    }
}

getServices()

function showServices(data) {
    result.innerHTML = data.map((x) => {
        return `
        <div class="product">
            <img src="${x.image}" alt="" />
            <p>${x.name}</p>
            <p>${x.category}</p>
        </div>
        `
    }).join("")
}