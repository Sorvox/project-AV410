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
  }

  searchImg() {
    this.os.col1=[];
    this.os.col2=[];
    this.os.col3=[];
    this.UnsplashService.searchImg()
    .subscribe((result: any) => {
      result.results.forEach((element, index) => {
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
