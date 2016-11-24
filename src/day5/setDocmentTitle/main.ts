// import the custom element
import {Component, NgModule} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Title, BrowserModule} from '@angular/platform-browser';


@Component({
    selector: 'app',
    template: `<p> Select the title: </p>

    <ul>
        <li><a (click)="setTitle( 'Good morning!' )">Morning</a>.</li>
        <li><a (click)="setTitle( 'Good evening!' )">Evening</a>.</li>
    </ul>
`
})
export class AppComponent {
    public constructor(private titleService: Title) {
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
class AppModule {

}
platformBrowserDynamic().bootstrapModule(AppModule);
