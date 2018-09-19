
import { PipeTransform, Pipe } from "@angular/core";

@Pipe ({ 
    name : 'filter'
})

export class filterPipe implements PipeTransform{
    filterData : any=[];
    transform( data , text){
        console.log("data:",data,"text",text )
        if(text == undefined ){
            this.filterData = data ;
        }else {
            data.array.forEach(movie => {
                if(movie.name.indexof(text)>=0){
                    this.filterData.push(movie);
                }
            });
        }
        return this.filterData ;
    }
}
