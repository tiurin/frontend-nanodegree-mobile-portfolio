## Website Performance Optimization portfolio project

### Setup

1. Make sure you have `node.js` installed.
1. Run `npm install` in root directory.
1. Run `grunt` in root directory

Now you have all distribution files generated and may inspect them opening html files with the browser.

1. Make sure you have python and ngrok installed
1. Run `python -m SimpleHTTPServer 8080` to start the server.
1. Run `ngrok http 8080` to make it accessible via URL globally.

Now pages are available for analyzing with PageSpeed Insights.

####Part 1: Optimize PageSpeed Insights score for index.html

What was changed:

* Add package.json to manage optimization tools
* Add responsive images generation with grunt-responsive-images task
* Update image links to optimized ones
* Shorten critical rendering path for index.html:
  * Inline main css
  * Set media query on print css
  * Make webfont loading non-blocking
* Minify all top-level html files

####Part 2: Optimize Frames per Second in pizza.html

What was changed:

* Use optimized images
* Separate read and write values for layout so that reading does not trigger layout run for every loop cycle, as described in https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing#avoid-layout-thrashing
* Use requestAnimationFrame to queue animation changes on scroll events. There are multiple scroll events in a short period of time, let browser decide when is the best time to render changes fired by those scrolls.
