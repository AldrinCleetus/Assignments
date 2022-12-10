// Runs on all URLs in the background


// Listen for change 
chrome.tabs.onUpdated.addListener((tabId,changeInfo,tabs)=>{

    if(changeInfo.status === "complete"){

        if(tabs.url.includes("linkedin.com/in/")){
            
            chrome.scripting.executeScript({
                files: ['content.js'],
                target: {
                    tabId: tabId
                }
            })
        } 
    }
})