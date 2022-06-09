import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'hp'
})
export class uxPipe implements PipeTransform {
    transform(value1: any,limit:number) {
        if(value1.length>limit){
            return value1.substr(0,limit)+'...';
        }
        else{
            return value1;
        }
    }
}
