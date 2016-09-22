import {NgModule} from "@angular/core";
import {ModalCompoonent} from "./modal.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations:[ModalCompoonent],
    providers:[],
    imports:[CommonModule],
    exports:[ModalCompoonent]
})
export class ModalModule{}
