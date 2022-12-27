const likeCount = document.getElementById("like")
const comment = document.getElementById('comment')
const submit = document.getElementById("titleButton")
        
const toLinkedIn = ()=>{
  chrome.tabs.update({url: 'https://www.linkedin.com/feed/'})

  chrome.tabs.onUpdated.addListener((tabId,changeInfo,tab)=>{

    if(changeInfo.status === "complete"){

        if(tab.url.includes("linkedin.com/feed/")){
            
            chrome.scripting.executeScript({
                files: ['content.js'],
                target: {
                    tabId: tabId
                }
            })


            
            // Send the amount of likes
           setTimeout(() => {
            chrome.tabs.sendMessage(tabId, {
              "likeCount": likeCount.value,
              "comment":comment.value
            })
           }, 1000);


        } 
    }
})

}




submit.onclick = toLinkedIn

likeCount.addEventListener('input', ()=>{
  if(likeCount.value && comment.value){
    submit.removeAttribute('disabled')
  }else{
    submit.setAttribute("disabled", "true")
  }
})

comment.addEventListener('input', ()=>{
  if(likeCount.value && comment.value){
    submit.removeAttribute('disabled')
  }else{
    submit.setAttribute("disabled", "true")
  }
})

