let waitForjQuery = setInterval(function () {
    if (typeof $ !== 'undefined') {
        console.log('hello jquery', $);

        clearInterval(waitForjQuery);
    }
}, 10);
