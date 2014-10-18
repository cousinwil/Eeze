#Eeze v0.6

##What  
Eeze is a clean slate for front end developers creating custom applications. Easy access to mix and match all your favorite open source libraries like bootstrap, font awesome, lesshat, etc.

##Why
We’ve included the most common building blocks and base file structure for a new application's view layer. There are no base preset styles to work around, delete, or overwrite. Just clone the app, choose your presets, and start writing *your* code in seconds.

##How
There are a few base files for you to work with...

* `images/` - where you put your images
* `stylesheets/`
  * `less/`
    * `app-components/`
      * `buttons.less` - empty to start - this is where *you* write all your button styles.
      * `nav.less` - empty to start - this is where *you* write all your nav styles.
    * `app-library/`
      * `bootstrap/`
      * `grids/`
      * `icons/`
      * `mixins/`
      * `reset/`
    * `app-styles/`
      * `application.less` - empty to start - this is where *you* write all your base application styles.
      * `elements.less` - empty to start - this is where *you* add all your base element styles.
      * `media-queries.less` - sets up your media queries
      * `variables.less` - empty to start - this is where *you* define all your color variables, font family variables, etc.
    * `app.less` - compiles the styles you have declared into app.css
    * `base.less` - compiles your custom base.css file
    * `bootstrap.less` - compiles your own version of bootstrap.css
  * `app.css` - out of the box compiled CSS (doesn't look like much, it shouldn't until you write this part.)
  * `base.css` - mix and match reusables, grids, normalize or reset, etc  
* `base.html` - base elements of a modern front end HTML5 template, ready to go!


###Project Info:

Eeze front-end application starter kit   
by Wil Everts (@cousinwil)  
[http://eeze.us](http://eeze.us)  
Version 0.6 - 10/18/2014  
Version 0.3 - 9/21/2012  

_Copyright 2014, Willaim Paul Everts II
Dual licensed under the MIT or GPL Version 2 licenses._
