const titleButton = document.getElementById("titleButton")
const title = document.getElementById('title')

console.log(title)

const getTitle = async ()=>{
    await chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
        titleButton.innerHTML = tabs[0].title   
        titleButton.classList.add('inActive')
        title.classList.remove('inActive')
        title.innerHTML = tabs[0].title
    })
}




titleButton.onclick = getTitle