import {Directive} from '@angular/core';

@Directive({
    selector: '[nodeLogger]',
    inputs: ['nodeLogger']
})
export class NodeLoggerDirective {
    nodeLogger;
    constructor() {}
    
    ngOnChanges( event ) {
      // If this is the first change of this value, it means that this
      // is the initial binding of the input after the directive has
      // just been instantiated for this DOM node.
      if ( event.nodeLogger.isFirstChange() ) {
          console.log( "Node logger ** instantiated **:", this.nodeLogger );
      } else {
          console.log( "Node logger __ updated __:", this.nodeLogger );
      }
    }
    
}
