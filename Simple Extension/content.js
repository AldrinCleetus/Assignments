// inside the page script
console.log("I am in")

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(request.likeCount)
  likeRandomPost(request.likeCount)

});

const likeRandomPost = (count)=>{
  for (let index = 0; index < 3; index++) {
    let posts = document.getElementsByClassName('react-button__trigger')
    const randomIndex = Math.floor(Math.random() * posts.length)
    const post = posts[index]
    //posts = posts.splice(randomIndex,1)
    post.click()
  }
}