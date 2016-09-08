// Demo: trackBy
// Angular uses object identity to track insertions and deletions 
// within the iterator and reproduce those changes in the DOM


import {Component, Input, ElementRef, AfterViewInit,  Renderer, ViewChild} from '@angular/core';
import {Directive, AfterContentInit, QueryList,ContentChildren} from '@angular/core';



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




@Component({
  selector: 'my-comp',
  template: `
      <p>
        <a (click)="shuffleCollections()">Shuffle collections</a>.
      </p>
      <h3> Friends </h3>
      <ul>
        <li *ngFor="let friend of friends ; let index = index;  trackBy:$id" nodeLogger="{{ friend.name }} at index {{ index }}.">
          {{ friend.name }}
        </li>
      </ul>
      <h3> Enemies </h3>
      <ul>
        <li *ngFor="let enemy of enemies ; let index = index ; trackBy:personIdentity" nodeLogger="{{ enemy.name }} at index {{ index }}.">
          {{ enemy.name }}
        </li>
      </ul>`
})
export class MyComp {
  friends;
  enemies;
  
  constructor() {
    this.friends = this.buildCollection( "Fiona", "Fay", "Franny", "Francis", "Fifi" );
    this.enemies = this.buildCollection( "Ella", "Erin", "Eva", "Ester", "Eveline" );
  }
   // provide a custom track-by function that tracks a person based on
  // the ID, not the object identity (aka object reference).
  personIdentity( index, person ) {
    //   console.log( "TrackBy:", person.name, "at index", index );
      return( person.id );
  }

    // I shuffle (reverse) each of the people collection.
    shuffleCollections() {
        console.log( "- - - - - - - - - - - - - - - - -" );
        console.log( "Shuffling both collections." );
        console.log( "- - - - - - - - - - - - - - - - -" );
        
        // When we reverse the friends collection, notice that we are
        // returning a new array; however, the actual items within that
        // array are the same OBJECT REFERENCES that they were in the
        // previous array - we are only affecting the collection.
        this.friends = this.friends.slice().reverse();
        // When we reverse the enemies collection, on the other hand, we
        // are creating both a NEW ARRAY and creating NEW ITEM references
        // within that array.
        this.enemies = this.enemies.reverse().map(
            function operator( enemy ) {
                // CAUTION: Creating a new item object.
                return({
                    id: enemy.id,
                    name: enemy.name
                });
            }
        );
        // Log out the collections so that we can inspect the objects
        // for any mutations applied by Angular.
        console.info( "Friends:", this.friends );
        console.info( "Enemies:", this.enemies );
    }

    buildCollection(...names) {
        return names.map(
                                    ( name, i ) => ({
                                            id: ( i + 1 ),
                                            name: name
                                        })
                                  );
                                    
        
    }
  
  
}

