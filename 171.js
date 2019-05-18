// Async/Await


async function getPosts() {
    const response = await fetch('http://atalepa.blogspot.com/');
    const data = await response.json();

    return data.map(post => {
        console.log(post.title);
    });
    /* return fetch('http://atalepa.blogspot.com/')
       .then(data => data.json())
       .then(data => data.map(post => {
           console.log(post.title);
       }));*/
}

getPosts();
