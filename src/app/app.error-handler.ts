import {Response} from '@angular/http'
import {Observable} from 'rxjs/observable'

export class ErrorHandler {
    // tslint:disable-next-line:one-line
    static handleError(error: Response | any){
        let errorMessage: string
        if (error instanceof Response) {
            errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
        } else {
            console.log(errorMessage)
        }
        console.log(errorMessage)
        return Observable.throw(errorMessage)
    }
}
