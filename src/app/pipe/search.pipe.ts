import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any  ) : any {
    if(!args ){
      return value;
    }else{
      args=args.toLocaleLowerCase();
    }
    return value.filter((book:any) =>{
      return book?.bookName.toLocaleLowerCase().includes(args) | book.bookName?.toLocaleLowerCase().includes(args);
    })
  }
}
