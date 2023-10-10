// Задача 1

// async function getTodos (username) {
//     let urlUsers = 'https://jsonplaceholder.typicode.com/users'
//     let resUsers = await fetch(urlUsers)
//     let dataUser = await resUsers.json()
//     // console.log(dataUser);

//     let user = dataUser.find(elem => elem.username === username)
//     // console.log(user.id);

//     let urlTodos = 'https://jsonplaceholder.typicode.com/todos'
//     let resTodos = await fetch(urlTodos)
//     let dataTodos = await resTodos.json()
//     // console.log(dataTodos);

//     let result = dataTodos.filter(el => el.userId === user.id)
//     console.log(result);
// }

// getTodos('Bret')

// решение 2
async function getTodos (username) {
    let urlUsers = `https://jsonplaceholder.typicode.com/users?username=${username}`
    let resUsers = await fetch(urlUsers)
    let dataUser = await resUsers.json()

    // let user = dataUser.find(elem => elem.username === username)

    let urlTodos = `https://jsonplaceholder.typicode.com/todos?userId=${dataUser[0].id}`
    let resTodos = await fetch(urlTodos)
    let dataTodos = await resTodos.json()

    console.log(dataTodos);
}

// getTodos('Delphine')

// Задача 2
async function getСomments(title) {
    let urlUsers = `https://jsonplaceholder.typicode.com/posts?title=${title}`
    let res = await fetch(urlUsers)
    let posts = await res.json()
    console.log(posts);
    try {
        let urlComments = `https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`
        let resComments = await fetch(urlComments)
        let dataComments = await resComments.json()
        console.log(dataComments);
    } catch { console.log('no comments found!') }
}
// getСomments("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")

// Задача 3
async function getPhotoByNickName(username) {
    let urlUsers = `https://jsonplaceholder.typicode.com/users?username=${username}`
    // let urlUsers = `https://jsonplaceholder.typicode.com/users`
    let res = await fetch(urlUsers)
    let users = await res.json()
    console.log(users);

    let urlPhotos = `https://jsonplaceholder.typicode.com/photos?albumId=${users[0].id}`
    // let urlPhotos = `https://jsonplaceholder.typicode.com/photos`
    let resphotos = await fetch(urlPhotos)
    let photos = await resphotos.json()
    console.log(photos);
}
getPhotoByNickName('Kamren')