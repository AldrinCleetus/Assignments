const likeAndCommentButtons = document.getElementsByClassName('feed-shared-social-actions')

let posts = []

for (let index = 0; index < likeAndCommentButtons.length; index++) {
  const element = likeAndCommentButtons[index].getElementsByClassName('react-button__trigger')[0]
  const element2 = likeAndCommentButtons[index].getElementsByClassName('comment-button')[0]
  posts.push({
    "like":element,
    "comment": element2
  }) 
}
console.log(posts)

const likeAndCommentRandomPosts = (count,commentToWrite)=>{

  if(count > posts.length){
    count = posts.length
  }

  for (let index = 0; index < count; index++) {

    const post = posts[index].like
    const comment = posts[index].comment

    // like
    post.click()
    comment.click()

    document.getElementsByClassName('comments-comment-box-comment__text-editor')[index].getElementsByTagName('p')[0].innerHTML = commentToWrite
    setTimeout(() => {
      document.getElementsByClassName('comments-comment-box__submit-button')[0].click()
    }, 2000);

  }
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(request.likeCount)
  console.log(request.comment)
  likeAndCommentRandomPosts(request.likeCount,request.comment)

});

