# Westfield Deals mockup
#### Demo
[http://yarunluon.github.io/westfield/](http://yarunluon.github.io/westfield/)

#### Task
Implement [Westfield Deals mockup](https://github.com/westfield/technical_tests/blob/master/design_assets/mockup.png) using these [instructions](https://github.com/westfield/technical_tests).

I spent two days building a fully functional web-app. As I feel with most projects, this one isn't finished, and can always be improved.

#### Functionality
* Clicking on a _State_ loads new _Centres_
* Clicking on a closed _Centre_ loads new _Deals_
* Clicking on an open _Centre_ closes _Deals_

[View animated gif of functionality](https://github.com/spoka/technical_tests/blob/master/screenshots/westfield-deals-functionality.gif)

#### Non-functionality
* Clicking on a _Deal_ does nothing
* Search does nothing

#### Architecture
MVC design with a single omnipotent controller. Models and views are only self-aware with no knowledge of other components. Models and views contain no logic and are only able to emit events, listen to events, and request data. They are not able to execute commands. The controller instructs models to fetch new data and when to tell the views to rerender.

#### Mockup mode
Even though I get the data live from the APIs, I massage the data to have it appear similar to the mockup.

Differences between 'mockup mode' and live data

* Removed the states `NT` and `TAS`
* Intentionally ordered the states in this order: `NSW`, `ACT`, `QLD`, `VIC`, `SA`, `WA`
* Only show the first 6 _Centres_
* Randomly show 4 _Deals_ every time a _Centre_ is opened

Mockup mode can be disabled by passing `{ mockup: false }` into the `Westfield`, `States`, `Centres`, or `Deals` constructor.
```javascript
// Gobal property. Show all data for all models
var westfield = new Westfield({ mockup: false });

// Show all states in order retrieved from API
var states = new States({ mockup: false });

// Show all centres instead of the first 6
var centres = new Centres({ mockup: false });

// Show all deals instead of randomly showing 4
var deals = new Deals({ mockup: false });
```

#### Responsiveness
The following changes occur on small screens
* "Click more" link disappears
* _Deal_ contents become stacked
* Search and Navigation tabs become stacked

Tested on these devices in Chrome Dev Tools
* [iPad](https://github.com/spoka/technical_tests/blob/master/screenshots/westfield-deals-ipad.png)
* [iPhone 6 plus](https://github.com/spoka/technical_tests/blob/master/screenshots/westfield-deals-iphone-6plus.png)
* [Nexus 4](https://github.com/spoka/technical_tests/blob/master/screenshots/westfield-deals-nexus-4.png)

#### Browser and device compatibility
Tested to be functional in the following browsers and devices
- [x] Internet Explorer 9+
- [x] Latest Chrome
- [x] Latest Firefox
- [x] iPhone (emulated via Chrome Dev Tools using iPhone user-agent)
- [x] Android (tested on Nexus 6 and Nexus 5)

#### Sass
Sass was used to add custom styles and to override the Bootstrap styles. A gulp script watches for scss changes and automatically generates the css.

#### HTML5
The semantic elements `<section>`, `<nav>`, `<header>` are always welcome in my code.

#### CoffeeScript
CoffeeScript, the popular JavaScript pre-processor, was not used. It's on my bucket list to learn.

#### Maintainability
* Structured using MVC design
* Sass helps keep css DRY
* Require.js prevents pollution of the global namespace

#### Accessibility
* Navigate the page by pressing TAB
* Hit ENTER on a _State_ or _Centre_ to see its contents
* [_Skip Navigation_](http://webaim.org/techniques/skipnav/). Activate by pressing TAB upon page load
* Progressive enhancement of [CSS3 transitions](https://developer.mozilla.org/en/docs/Web/CSS/transition) for better focus
* `alt` attributes on `img`
* [_Glyphicons_](http://glyphicons.com/) are hidden using `aria-hidden`

[View animated gif of accessibility features](https://github.com/spoka/technical_tests/blob/master/screenshots/westfield-deals-a11y.gif)

#### Performance
Initial json for _States_, _Centres_, and _Deals_ are bootstrapped into the HTML. Pretend they were written there by the server. Any future updates query the API. Bootstrapping the json helps speed up the load time by removing three API calls. To disable bootstrapping, pass `{ bootstrap: false }` into the application.

```javascript
var westfield = new Westfield({ bootstrap: false });
```

More possible performance enhancements that were not done because of time
* Minify the js and concatendate into one file
* Precompile the templates into js

#### Frameworks/libs
* __Backbone__: MVC framework
* __Marionette__: Plugin for Backbone to manage views
* __Underscore__: Utility functions that work across many browsers
* __jQuery__: DOM manipulation
* __Require__: Module and file management
* __Backbone.CrossDomain__: Plugin for Backbone to enable IE9 CORS
* __Moment__: Locale formatting of date
* __Bootstrap__: Build in responsive design, accessibility, and components for faster development
* __[Glyphicons](http://glyphicons.com/)__: Icon fonts. Part of Bootstrap.

#### Areas of improvement
I would add these features given more time.
* Collapse the _States_ to a dropdown menu for small screens
* Write a build script to minify and concatenate all js files into one.
* Add transitions to show and hide the _Deals_
* Create a UI to show when a _State_ has no _Centres_
* Add a timeout when the API takes too long to respond
* Style the _Skip Navigation_ link
* i18n support
* Bettery a11y support. Test with JAWS.
* Disable clicking on an existing tab
* Better routing for back button functionality
* Spend more time fine-tuning fonts and spacing
* Unit and functional tests
* More commenting


## Installation
#### Install Connect Server and gulp-sass
Installs a light weight server to serve static pages. Requires [Node](https://nodejs.org/en/).
```sh
$ npm install
```

#### Start server
```sh
# http://localhost:8080
$ node server.js
```

#### Generate documentation
```sh
$ gulp jsdoc
```
