const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];
const mainEl = document.getElementById("main-el");

render();

function render() {
  let htmlCodeOfPosts = "";
  for (let i = 0; i < posts.length; i++) {
    htmlCodeOfPosts += `
      <section>
        <div class="user-info align-row">
          <img
            src= "${posts[i].avatar}"
            alt="User ${posts[i].name}'s profile picture"
            class="user-avatar"
          />
          <ul>
            <li>
              <h2 class="user-name">${posts[i].name}</h2>
            </li>
            <li>
              <h3 class="user-location">${posts[i].location}</h3>
            </li>
          </ul>
        </div>
        <img src="${posts[i].post}" alt="User ${[posts[i].name]}'s post" class="user-post" />
        <div class="post-body">
          <div class="interact-area align-row">
            <img src="images/icon-heart.png" alt="Heart icon" class="icon" />
            <img
              src="images/icon-comment.png"
              alt="Comment icon"
              class="icon"
            />
            <img
              src="images/icon-dm.png"
              alt="Direct message icon"
              class="icon"
            />
          </div>
          <h3 class="post-likes">${posts[i].likes} likes</h3>
          <p class="comment-box">
            <span class="commenter">${posts[i].username}</span>
            <span class="comment">${posts[i].comment}</span>
          </p>
        </div>
      </section>
    `;
  }
  mainEl.innerHTML = htmlCodeOfPosts;
}
