// Using template literals for HTML fragments

const article = {
    title: 'Exercitando Template Strings',
    intro: 'Uma breve explicação de como se utilizar template strings do ES6 em meu código hoje!',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue sem nec magna placerat, et ultricies ipsum congue. Sed ut velit sit amet nisi condimentum rhoncus quis quis arcu',
    
    tags: [`ES6`, `JS`,`template-literal`],
    
};

function renderAuthor(name) {
    return(name) ? name : 'unknown';
}

const markup = `
    <article>
        <header>
            <h1>${article.title}</h1>
        </header>
        <section>
            <p>${article.intro}</p>
        </section>
        <footer>
            <ul>
                ${article.tag.map((tag) => `<li>${tag}</li>`).join('')}
            </ul>
            <p>Author: ${renderAuthor(article.author)}</p>

        </footer>
    </article>
`;

document.body.innerHTML = markup;