const titleButton = document.getElementById("titleButton")
const title = document.getElementById('title')


const linkedInUsers = ['https://www.linkedin.com/in/aldrincleetus','https://www.linkedin.com/in/boniface-noel-6215091a4/','https://www.linkedin.com/in/isanur-sardar-a14106185/']

const getTitle = async ()=>{
    await chrome.tabs.query({ currentWindow: true, active: true }, tabs => {   
        title.innerHTML = tabs[0].title

        console.log(tabs)
        
        titleButton.classList.add('inActive')
        title.classList.remove('inActive')
    })


    linkedInUsers.map((user,index) =>{
        chrome.tabs.create({
            active: true,
            url: user
        })
    })




}




titleButton.onclick = getTitle