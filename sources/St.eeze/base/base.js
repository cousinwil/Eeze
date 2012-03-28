/* Style + Ease = ST.EEZE.us Front End Starter-Kit v 0.3
   Author: Wil Everts - http://cousinwil.com - @cousinwil
  
                                (80 chars, the suggested maximum line length)-->
  --------------------------------------------------------------------------- */

var base = {
  
  inits: {

  /* INITs for each controller, view, just as needed...
       These allow you to load up event handlers and functions specific to
       a template or view. 
       
       Each unique init, like my 'home' init, has a three init functions:
       ready (on document ready), load (on load), and resize (on resize for 
       redrawing absolute elements, etc.)
  --------------------------------------------------------------------------- */
  
    main: {
    
      ready: function(info){
        console.log('steeze is inside base.inits.main.ready() MSG: '+info);
      }, // end base.init.main.ready 
      load: function(info){
        console.log('steeze is inside base.inits.main.load() MSG: '+info);          
      }, // end base.init.main.load     
      size: function(info){
        console.log('steeze is inside base.inits.main.size() MSG: '+info);
      }, // end base.init.main.size
      scroll: function(info){
        console.log('steeze is inside base.inits.main.scroll() MSG: '+info);
      } // end base.init.main.size
    
    }
    
  } // end base.init

};