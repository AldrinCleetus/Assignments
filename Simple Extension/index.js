// const titleButton = document.getElementById("titleButton")
// const title = document.getElementById('title')

// const getTitle = async ()=>{
//     await chrome.tabs.query({ currentWindow: true, active: true }, tabs => {   
//         title.innerHTML = tabs[0].title
        
//         titleButton.classList.add('inActive')
//         title.classList.remove('inActive')
//     })  
// }

// titleButton.onclick = getTitle

// This is the main function that runs when the extension is activated
// function main() {
//     // Add the input fields to the pop-up window
//     var likeCountInput = document.createElement("input");
//     likeCountInput.setAttribute("type", "text");
//     likeCountInput.setAttribute("id", "like-count");
//     likeCountInput.setAttribute("placeholder", "Like count");
//     document.body.appendChild(likeCountInput);
    
//     var commentCountInput = document.createElement("input");
//     commentCountInput.setAttribute("type", "text");
//     commentCountInput.setAttribute("id", "comment-count");
//     commentCountInput.setAttribute("placeholder", "Comment count");
//     document.body.appendChild(commentCountInput);
    
//     // Add the button to the pop-up window
//     var button = document.createElement("button");
//     button.innerHTML = "Like posts";
//     button.setAttribute("id", "like-button");
//     button.setAttribute("disabled", "true");
//     document.body.appendChild(button);
    
//     // Enable the button when both input fields have been filled in
//     likeCountInput.addEventListener("input", function() {
//       if (likeCountInput.value && commentCountInput.value) {  } else {
//         button.setAttribute("disabled", "true");
//       }
//     });
//     commentCountInput.addEventListener("input", function() {
//       if (likeCountInput.value && commentCountInput.value) {
//         button.removeAttribute("disabled");
//       } else {
//         button.setAttribute("disabled", "true");
//       }
//     });
    
//     // When the button is clicked, inject the content script into the LinkedIn Feed page and send a message to the content script
//     button.addEventListener("click", function() {
//       var likeCount = document.getElementById("like-count").value;
      
//       // Inject the content script into the LinkedIn Feed page
//       chrome.tabs.update({url: "https://www.linkedin.com/feed/"});

      
      
//       // Send a message to the content script with the number of likes to perform
//       chrome.tabs.query({active: true, currentWindow: true}, function(tabss) {

        

//         chrome.tabs.onUpdated.addListener((tabId,changeInfo,tabs)=>{

//             if(changeInfo.status === "complete"){

        
//                 if(tabs.url.includes("linkedin.com/feed/")){
//                     console.log("it is the tab")
//                     chrome.scripting.executeScript({
//                         files: ['content.js'],
//                         target: {tabId: tabId}
//                     })
//                     setTimeout(() => {
//                         chrome.tabs.sendMessage(tabId, {type: "likePosts", likeCount: likeCount});
//                     }, 2000);
//                 } 

//             }
//         })




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

            chrome.tabs.sendMessage(tabId, {"likeCount": likeCount.value})

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

