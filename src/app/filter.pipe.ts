
import { PipeTransform, Pipe } from "@angular/core";

@Pipe ({ 
    name : 'filter',
})

export class filterPipe implements PipeTransform{
    filterData : any=[];
    transform( data , text){
        this.filterData =[];
        console.log("data:",data,"text",text );
        if(text == undefined ){
            this.filterData = data ;
        }else {
            data.forEach(movie => {
                if(movie.name.toLowerCase().indexOf(text)>=0 || movie.genere.toLowerCase().indexOf(text)>=0 ){
                    this.filterData.push(movie);
                }
            });
        }
        return this.filterData ;
    }
}
