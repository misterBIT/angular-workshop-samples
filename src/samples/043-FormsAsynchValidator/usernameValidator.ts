import { Control } from "@angular/common";

interface ValidationResult{
   [key:string]:boolean;
}


export class UsernameValidator {

    static startsWithNumber(control: Control): ValidationResult { 
    
      if ( control.value !="" && !isNaN(control.value.charAt(0)) ){
        return {"startsWithNumber": true};
      }
    
      return null;
    }
   
    static usernameTaken(control: Control): Promise<ValidationResult> {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "puki") {
                    resolve({"usernameTaken": true})
                } else {
                    resolve(null);
                };
                
            }, 1000);
        });

    }
}