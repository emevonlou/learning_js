// Using if

function goodNews(note) {
    if(note >= 7) {
        console.log('Approved with ' + note);
    }
}

goodNews(8.1);
goodNews(6.1);

function r(value) {
    if(value) {
        console.log('Its true...' + value);
    }
}

r();
r(null);
r(undefined);
r('');
r(0);
r(-1);
r(' ');
r('?');
r([]);
r([1, 2]);
r({});