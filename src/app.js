let App = {
    init() {
        console.log('initializing remote jobs');

        $('.form-control__google-location').attr('placeholder', 'Base Location (Mostly, Part, Adhoc Remote)');
    }
};


let waitForjQuery = setInterval(function () {
    if (typeof $ !== 'undefined') {
        App.init();
        clearInterval(waitForjQuery);
    }
}, 10);
