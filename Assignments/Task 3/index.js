function getUser(id){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve({id: id, name: "Ram"})
        }, 1000)
    })
};

function getPost(userId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["post1", "post2"])
        }, 1000)
    })
};

function getComment(postId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["nice", "good"])
        }, 1000)
    })
}


getUser(1)
    .then((user) => {
        console.log("User fetched")
        console.log(user)
        return getPost(user.id)
    })
    .then((post) => {
        console.log("Post fetched")
        console.log(post)
        return getComment(post[0])
    })
    .then((comment) => {
        console.log("Comment Fetched")
        console.log(comment)
    })
    .catch((error) => {
        console.log(error)
    })