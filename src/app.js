let waitForjQuery = setInterval(function () {
    if (typeof $ !== 'undefined') {
        console.log('hello remote jobs', $);

        clearInterval(waitForjQuery);
    }
}, 10);
