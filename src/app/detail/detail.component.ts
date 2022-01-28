import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../unsplash.service';
import { ActivatedRoute } from '@angular/router';
import { opSearch } from '../general-val';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass'],
  providers: [UnsplashService]
})

export class DetailComponent implements OnInit {
  public id:string;
  public result;
  os = opSearch;
  popUp:boolean;
  loading:boolean;
  galleryWith: number;

  constructor(private route: ActivatedRoute,
    private UnsplashService: UnsplashService,
    private sanitizer: DomSanitizer,
    private router: Router) { }
  
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getImg(this.id);
    this.popUp=false;
    this.loading = false;
    this.galleryWith = 0;
  }

  getImg(id) {
    this.loading=true;
    this.UnsplashService.getImg(id)
    .subscribe((result: any) => {
      this.result = result;
      this.galleryWith = 45/(result.height/result.width);
      this.loading = false;
   })
  }

  searchTag(value){
    this.os.search = value;
    this.os.length = 1;
    this.os.previousPageIndex = 1;
    this.os.pageIndex = 1;
    this.router.navigateByUrl('/');
  }

  getGoogleMapsUrl(latitude, longitude)
  {
      //Change XXX for Key
      let key = 'XXXXXXXX';
      let url = 'www.google.com/maps/embed/v1/view?key='+key+'&center='+latitude+','+longitude+'&maptype=satellite&zoom=18'
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://'+ url +'/');
  }
}
