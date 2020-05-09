let App = {
    init() {
        console.log('initializing remote jobs');

        // Replace the placeholder for location search fields
        $('.form-control__google-location').attr('placeholder', 'Base Location (Optional)');

        // Add search tips for job seekers link
        $('.quick-search .form-control__google-location').parent().append('<a href="/blog/job-seekers-guide-to-remotejobs/" id="search-tips" target="_blank">Search tips</a>');

        // Add search tips for employers link
        $('#add-listing-form [data-field="custom_field_HowRemote_2028"]').append('<a href="/blog/employers-guide-to-remotejobs/" id="search-tips" target="_blank">Read our job posting tips</a>');
    }
};

let waitForjQuery = setInterval(function () {
    if (typeof $ !== 'undefined') {
        App.init();
        clearInterval(waitForjQuery);
    }
}, 10);
