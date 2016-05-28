import {Component} from '@angular/core';
import {TabComponent} from './tab.component';
@Component({
    selector: 'tabs',
    // styles: [`li.active {color:orange}`],
    template: `
    <ul class="nav nav-tabs">
        <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
            <a href="#">{{tab.tabTitle}}</a>
        </li> 
    </ul>
    <ng-content></ng-content>
    `
})

export class TabsComponent{
    tabs:TabComponent[] = [];
    
    addTab(tab:TabComponent) {
        if (this.tabs.length === 0) tab.active = true;
        this.tabs.push(tab);
    }  
    selectTab(tab:TabComponent) {
        this.tabs.forEach((tab) => {
            tab.active = false;
        });
        tab.active = true
    }
}