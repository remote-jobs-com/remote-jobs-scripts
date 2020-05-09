let App = {
    init() {
        console.log('initializing remote jobs');

        // Replace the placeholder for location search fields
        $('.form-control__google-location').attr('placeholder', 'Base Location (Optional)');
    }
};

let waitForjQuery = setInterval(function () {
    if (typeof $ !== 'undefined') {
        App.init();
        clearInterval(waitForjQuery);
    }
}, 10);
