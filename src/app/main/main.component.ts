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
    this.FizzBuzzGame();
  }

  FizzBuzzGame(){
    this.fbg = "";
    for(let i = 1; i < 101;i++){
      this.fbg += ((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : ((i % 3) ? 'Buzz' : ' Buzz')) || i) + ', ';
    }
    this.fbg = this.fbg.substring(0, this.fbg.length - 2);
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
