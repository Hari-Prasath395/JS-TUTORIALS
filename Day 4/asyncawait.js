/*
async function Welcome() {
  return "Hello world";
}

//  console.log(Welcome());

Welcome()
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.error(err);
  });
*/

async function getData() {
    let blogPost = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Blog Post");
      }, 2000);
    });
  
    let blogComment = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Comments for the blog");
      }, 5000);
    });
  
    console.log("Fetching Post....");
  
    let post = await blogPost;
    console.log("Post:", post);
  
    console.log("Fetching Comments....");
  
    let comment = await blogComment; // Fix: should await blogComment, not blogPost
    console.log("Comments:", comment);
  
    return [post, comment];
  }
  
  console.log("Welcome to Blog Post");
  
  let data = getData(); // getData() returns a promise
  console.log(data);
  
  data.then((msg) => {
    console.log(msg);
  }).catch((err) => {
    console.log(err);
  });
  