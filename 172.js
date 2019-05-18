// Async/Await how to handle errors

async function getPosts() {
    try {
        const response = await fetch('http://atalepa.blogspot.com/');
        const data = await response.json();

        return data.map(post => {
            console.log(post.title);
        });
    }
    catch (err) {
        console.error('oh noo, we got an error!', error);
    }
}

getPosts();