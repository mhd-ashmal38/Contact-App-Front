import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allContacts:any=[],searchTerm:string,property:string): any[] {
    let result:any=[]

    if(!allContacts||searchTerm===""||property===""){
      return allContacts
    }
    else{
      allContacts.forEach((item:any) => {
        if(item[property].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())){
          result.push(item)
        }
      });
    }
    return result;
  }

}
