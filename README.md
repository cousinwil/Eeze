#Eeze v0.6

##What  
Eeze is a clean slate for front end developers creating custom applications. Easy access to mix and match all your favorite open source libraries like bootstrap, font awesome, lesshat, etc.


##Why
We’ve included the most common building blocks and base file structure for a new application's view layer. There are no base preset styles to work around, delete, or overwrite. Just clone the app, choose your presets, and start writing *your* code in seconds.


##How
There are a few base files for you to work with... We use these to mix and match libraries we'd like to use to create our app. Want fontawesome icons, bootstrap grids, and lesshat mixins? No problem! By selecting the building blocks you want to use and commenting out the others you can quickly build the foundation of your app.

* `images/` - where you put your images
* `stylesheets/`
  * `less/`
    * `app-styles/`
      * `application.less` - empty to start - this is where *you* write all your base application styles.
      * `elements.less` - empty to start - this is where *you* add all your base element styles.
      * `media-queries.less` - sets up your media queries
      * `variables.less` - empty to start - this is where *you* define color variables, font variables, etc
    * `base-library/`
      * `bootstrap/` - bootstrap less files
      * `grids/` - grid system includes
      * `icons/` - icon font less files
      * `mixins/` - less mixins and reusables
      * `reset/` - css resets and normalize
    * `app.less` - compiles the styles you have declared into app.css
    * `base.less` - compiles your custom base.css file
    * `bootstrap.less` - compiles your own version of bootstrap.css
    * `fonts.less` - compiles your custom fonts.css file
  * `app.css` - out of the box compiled CSS (doesn't look like much, it shouldn't until you write this part.)
  * `base.css` - mix and match reusables, grids, normalize or reset, etc 
  * `fonts.css` - fontawesome, or whatever other icon fonts and custom web fonts you declare
* `base.html` - base elements of a modern front end HTML5 template, ready to go!


##Writing/Updating app.css, base.css, bootstrap.css, fonts.css

###app.css: 
  * Edit the imports to suit your preferences in stylesheets/less/app.less
    * Select Less Mixins for easier x-browser CSS3
    * Include your Less Variables
    * YOUR CUSTOM WRITTEN Application Styles
  * From the Eeze directory in your terminal run: 
    * `lessc stylesheets/less/app.less > stylesheets/app.css`

###base.css:
  * Edit the imports to suit your preferences in stylesheets/less/base.less
    * Select a CSS reset or Normalize
    * Add a grid like boostrap or foundation
      * Customize your bootstrap grid columns, gutters, etc in stylesheets/less/grids/bootstrap-reqs.less
    * Include generic reusable classes
  * From the Eeze directory in your terminal run: 
    * `lessc stylesheets/less/base.less > stylesheets/base.css`

###bootstrap.css:
  * Edit the imports to suit your custom bootstrap needs in stylesheets/less/bootstrap.less
  * From the Eeze directory in your terminal run: 
    * `lessc stylesheets/less/bootstrap.less > stylesheets/bootstrap.css`

###fonts.css:
  * Edit the imports to suit your preferences in stylesheets/less/fonts.less
    * Webfonts
    * Icon Fonts (some common open ones included with base library)
      * Font Awesome
      * Open Iconic 
  * From the Eeze directory in your terminal run: 
    * `lessc stylesheets/less/fonts.less > stylesheets/fonts.css`


##Project Info:

Eeze front-end application starter kit   
by Wil Everts (@cousinwil)  
[http://eeze.us](http://eeze.us)  
Version 0.6 - 10/18/2014  
Version 0.3 - 9/21/2012  

_Copyright 2014, Willaim Paul Everts II
Dual licensed under the MIT or GPL Version 2 licenses._
