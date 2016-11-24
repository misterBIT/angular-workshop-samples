import {Component, trigger, style, animate, state, transition} from '@angular/core';
@Component({
    selector: 'demo-states',
    template: `
<div class="left">
    <div class="email-list-item" *ngFor="let email of emails" [class.active]="email === selectedEmail" (click)="selectedEmail = email">
        <div class="background" [@state]="email === selectedEmail ? 'active' : 'hidden'"></div>
        <h1>{{ email.subject }}</h1>
        <h2>{{ email.sender }}</h2>
    </div>
</div>
<div class="right">
    <div class="email-full" *ngFor="let email of emails" [@state]="email === selectedEmail ? 'active' : 'hidden'">
        <h1>{{ email.subject }}</h1>
        <h2>From {{ email.sender }}</h2>
        <hr>
        <div class="email-body">
            <pre>{{ email.body }}</pre>
        </div>
    </div>
</div>
    `,
animations: [
    trigger('state', [
      state('void', style({ display: 'none' })),
      state('active', style({ transform: 'translate3d(0, 0, 0)' })),
      state('hidden', style({ transform: 'translate3d(100%, 0, 0)' })),
      transition('active => hidden', [animate('350ms ease-out')]),
      transition('hidden => active', [
        style({ transform: 'translate3d(-100%, 0, 0)' }),
        animate('350ms ease-out')
      ]),
    ]),
  ]    
})
export class DemoStatesComponent {
   selectedEmail;
  emails = [
    { 
      subject: 'Angular 2 Release Date', 
      sender: 'Brad Green',
      body: `
Hey team,

I'm thinking we can ship Angular 2 in anywhere between 2 days and 2 years.

What do you think?

Cheers,
Brad Green
The boss of the Father of AngularJS      
      `
    },
    { 
      subject: 'Invite: Angular 3 Planning Meeting', 
      sender: 'Papa Misko',
      body: `
Hey team,

I'm really excited for Angular 2, but I think it's time to start thinking about Angular 3.

I'm thinking we kill off Components and switch from TypeScript to CoffeeScript.

Let me know what you think.

Misko Hevery a.k.a. Papa Misko      
      `
    },
    { 
      subject: 'Delete all the tests?', 
      sender: 'David East',
      body: `
Hey ngFolks,

Testing is really hard, so I'm just going to delete all the .spec.ts files.

Sound good? Great!      

David East
Firebase all the things
      `
    },  
    { 
      subject: 'Router vs Router', 
      sender: 'Pete Bacon Darwin',
      body: `
Hey everyone,

Just a friendly reminder that the term is router, not router.

Hope that clears everything up.

Cheers,
Pete Bacon-Router Darwin
      `
    },
    { 
      subject: 'Invitation: Your Deep Brain Stimulation Appointment', 
      sender: 'Dr Andres Lozano',
      body: `
Hey Matias,

We have you scheduled for this upcoming Friday at 9am.

Remember to bring your tin-foil.

Cheers,
Dr. Andres Lozano
      `      
    },      
  ];
  
  constructor() {
    this.selectedEmail = this.emails[0];
  }
}

class Page {
  constructor(public title: string, public content: string) {}
} 
   