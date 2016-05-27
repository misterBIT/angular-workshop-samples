import {Component} from '@angular/core';
import {NgStyle} from '@angular/common';
@Component({
    selector: 'demo-builtin-directives',
    styles: [`.active{color:red}`, `.disabled{background:grey}`],
    template: `
    <h1 [ngStyle]="{'font-style': style, 'font-size': size, 'font-weight': weight}">
        God is a DJ
    </h1>
    <hr>
    <label>Italic: <input type="checkbox" (change)="changeStyle($event)"></label>
    <label>Bold: <input type="checkbox" (change)="changeWeight($event)"></label>
    <label>Size: <input type="text" [value]="size" (change)="size = $event.target.value"></label>
    <hr>
    <button [ngClass]="{active: isOn, disabled: isDisabled}"
         (click)="toggle()">
         Click me!
     </button>
     <hr>
     <h1 [ngSwitch]="toeChoice">
     
        <template [ngSwitchWhen]="'Eenie'">Eenie</template>
        <template [ngSwitchWhen]="'Meanie'">Meanie</template>
        <template [ngSwitchWhen]="'Miney'">Miney</template>
        <template [ngSwitchWhen]="'Moe'">Moe</template>
        <template ngSwitchDefault>Other</template>
    </h1>
     
    `,
    directives: [NgStyle]
})
export class DemoBuiltinDirectives {
    style = 'normal';
    weight = 'normal';
    size = '20px';
    isOn = true;
    isDisabled = false;
    toeChoice = 'Moe';
    changeStyle($event: any) {
        this.style = $event.target.checked ? 'italic' : 'normal';
    }
    changeWeight($event: any) {
        this.weight = $event.target.checked ? 'bold' : 'normal';
    }
    toggle(){
        this.isOn = !this.isOn;
        this.isDisabled = !this.isDisabled;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        function timeout(duration = 0) {
            return new Promise((resolve, reject) => {
                setTimeout(
                    ()=>{
                        console.log('Timeout Done');
                        resolve(42);    
                        // reject('Big Badabum');
                    },
                    duration
                );
            })
        }

        var prm = timeout(1000);
        
        prm.then((res) => {
            console.log('Aha!', res);
        });
        
        setTimeout(()=>{
            prm.then((res) => {
                console.log('The Ultimate Answer!', res);
             });
        }, 2000);
        
        
        
        prm.catch(err=> {
            console.log(err);
        });
        
        
        // }).then(() => {
        //     throw new Error("hmm");
        // }).catch(err => {
        //     return Promise.all([timeout(100), timeout(200)]);
        // })
        
        
        
        
        
        
        
        
    }
}