import { Component, OnInit } from '@angular/core';
import { opSearch } from '../general-val';
import { UnsplashService } from '../unsplash.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
  providers: [UnsplashService]
})
export class MainComponent implements OnInit {
  os = opSearch;
  public fbg:string;
  constructor(private UnsplashService: UnsplashService) { }

  onPageChange(event){
    opSearch.pageIndex = 1+event.pageIndex;
    opSearch.previousPageIndex = event.previousPageIndex;
    opSearch.pageSize = event.pageSize;
    this.searchImg();
  }
  
  ngOnInit(): void {
    opSearch.loading=false;
    if(this.os.result!=null && this.os.result!=undefined){
      this.searchImg();
    }
    this.fbg=this.FizzBuzzGame(3, 5, 'Fizz', 'Buzz');
  }
  
  Mod(divisor: number, dividing: number){
    return divisor%dividing
  }
  
  FizzBuzzGame(number1: number, number2:number, text1: string, text2: string): string{
    let result:string;
    for(let i = 1; i < 101;i++){
      result += (( this.Mod(i,number1) ? '' : text1) 
        + (this.Mod(i,number2)? '' : (this.Mod(i,number1) ? text2 : ' ' + text2)) || i) 
        + ', ';
    }
    return result.substring(0, result.length - 2);
  }

  searchImg() {
    this.os.col1=[];
    this.os.col2=[];
    this.os.col3=[];
    this.UnsplashService.searchImg()
    .subscribe((result: any) => {
      result.results.forEach((element, index) => {
        //** Mosaic **/
        if(this.os.col1.length==0){
          this.os.col1.push(element);
        }else if(this.os.col1.length==this.os.col2.length && this.os.col1.length==this.os.col3.length){
                this.os.col1.push(element);
              }else if(this.os.col2.length<=this.os.col3.length){
                      this.os.col2.push(element);
                    }else{
                      this.os.col3.push(element);
                    }
      });
      this.os.result = result;
      this.os.length = result.total;
   })
 }
}
