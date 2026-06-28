function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: 1, name: "Ram" });
  }, 1000);
}

function getPost(userId, callback) {
  setTimeout(() => {
    callback(["post1", "post2"]);
  }, 1000);
}

function getComment(postId, callback) {
  setTimeout(() => {
    callback(["nice", "good"]);
  }, 1000);
}

getUser(1, (user) => {
  console.log("User fetched");
  getPost(user.id, (post) => {
    console.log("Posts fetched");
    getComment(post[0], (comment) => {
      console.log("Comments fetched");
      console.log("User:", user);
      console.log("Posts:", post);
      console.log("Comments:", comment);
    });
  });
});