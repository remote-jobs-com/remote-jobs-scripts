let App = {
    init() {
        console.log('initializing remote jobs');

        // Replace the placeholder for location search fields
        $('.form-control__google-location').attr('placeholder', 'Base Location (Optional)');

        // Add link to search tips
        $('.quick-search .form-control__google-location').parent().append('<a href="/blog/employers-guide-to-remotejobs/" id="search-tips" target="_blank">Search tips</a>');
    }
};

let waitForjQuery = setInterval(function () {
    if (typeof $ !== 'undefined') {
        App.init();
        clearInterval(waitForjQuery);
    }
}, 10);
