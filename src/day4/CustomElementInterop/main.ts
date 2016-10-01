// import the custom element
import './web-component';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);



@Component({
    selector: 'my-app',
    template:
    `<p> Select the title: </p>

    <ul>
        <li><a (click)="setTitle( 'Good morning!' )">Morning</a>.</li>
        <li><a (click)="setTitle( 'Good evening!' )">Evening</a>.</li>
    </ul>
`
})
export class AppComponent {
    public constructor(private titleService: Title ) { }

    public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }
}