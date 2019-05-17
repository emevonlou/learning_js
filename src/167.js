// Using generators for asynchronous flows

function ajax(url) {
    fetch(url)
            .then(data => data.json())
            .then(data => data.next(data));
}

// https://github.com/emevonlou
// http://atalepa.blogspot.com/

function aGen() {
    console.log('searching posts...');
    const posts = yield ajax('http://atalepa.blogspot.com/search.json');
    console.log(posts);

    console.log('Searching GitHub data...');
    const github = yield ajax('https://github.com/emevonlou/search.json');
    console.log(github);
}

const data = aGen();
data.next();
