// Tagged Template

const city = 'Dublin';
const something = 'Guinness';
const otherThing = 'Leprechaums';

function green(template, ...values) {
    return template.reduce((accumulator, part, i) => {
        return `
            ${accumulator}
            <spam class="green">${values[i - 1].toUpperCase()}</spam>
            ${part}
        `
});
}

const ireland = green`You live in ${city} the city of ${something} and ${otherThing}.`;

document.body.innerHTML = ireland;
