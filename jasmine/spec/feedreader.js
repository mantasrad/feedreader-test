/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {

        // tests to make sure that the
        // allFeeds variable has been defined and that it is not
        // empty

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // test that loops through each feed
        // in the allFeeds object and ensures it has a URL defined
        // and that the URL is not empty.


        it('urls are defined in the feeds', function() {
            allFeeds.forEach(function(el) {
                expect(el.url).toBeDefined();
                expect(el.url.length).not.toBe(0);
            });
        });

        // test that loops through each feed
        // in the allFeeds object and ensures it has a name defined
        // and that the name is not empty.

        it('names are defined in the feeds', function() {
            allFeeds.forEach(function(el) {
                expect(el.name).toBeDefined();
                expect(el.name.length).not.toBe(0);
            });
        });

    });


    describe('The menu', function() {

        // test that ensures the menu element is
        // hidden by default

        it('mennu is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // test that ensures the menu changes
        // visibility when the menu icon is clicked

        it('menu changes visibility when clicked', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });


    // test that ensures when the loadFeed
    // function is called and completes its work, there is at least
    // a single .entry element within the .feed container.

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('after loadFeed is called and completed there should be at least 1 entry', function(done) {
            expect($('.feed .entry-link .entry').length).not.toBeLessThan(1);
            done();
        });

    });

    // test that ensures when a new feed is loaded
    // by the loadFeed function that the content actually changes.

    describe('New Feed Selection', function() {


        let prevFeedData;
        let currentFeedData;


        beforeEach(function(done) {
            loadFeed(0, loadFeed(1, function() {
                currentFeedData = $('body').html();
                done();
            }));
            prevFeedData = $('body').html();

        });

        it('should check if content changes when new feed is loaded', function() {

            expect(currentFeedData).not.toBe(prevFeedData);

        });

    });



}());
