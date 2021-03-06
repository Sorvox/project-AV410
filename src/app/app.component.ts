import { Component } from '@angular/core';
import { opSearch } from './general-val';
import { UnsplashService } from './unsplash.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [UnsplashService]
})

export class AppComponent {
  title = 'project-AV410';
  os = opSearch;
  constructor(private UnsplashService: UnsplashService, private router: Router) {}

  searchByKey(event) {
    if(event.keyCode === 13){
      this.searchImg();
   }
  }

  searchImg() {
    this.os.length = 1;
    this.os.previousPageIndex = 1;
    this.os.pageIndex = 1;
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
      this.router.navigateByUrl('/');
   })
 }

}