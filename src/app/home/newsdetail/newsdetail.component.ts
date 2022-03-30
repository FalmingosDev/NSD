import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.component.html',
  styleUrls: ['./newsdetail.component.css']
})
export class NewsdetailComponent implements OnInit {

  newsUrl: any;
  sanitizer:any;
 final_url:string;


  constructor(sanitizer: DomSanitizer,) {
    this.sanitizer=sanitizer;
   }

  ngOnInit(): void {

    this.newsUrl=localStorage.getItem('url');
    this.final_url=this.getSafeUrl(this.newsUrl);
    // console.log(this.url);
  }
  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

}
