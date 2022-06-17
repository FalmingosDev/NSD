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

  entBaseUrl:string = 'https://www.imdb.com/title/';
  entFullUrl:string = "";

  newsTitle:string="";
  newsAuthor:string="";
  newspDate:string="";
  newsImg:string="";
  newsSummary:string="";

  constructor(sanitizer: DomSanitizer,) {
    this.sanitizer=sanitizer;
   }

  ngOnInit(): void {

    // this.newsUrl=localStorage.getItem('url');
    // this.entFullUrl = this.newsUrl;
    // this.final_url=this.getSafeUrl(this.entFullUrl);
    // this.link=this.final_url + "&output=embed";
    // console.log(this.final_url);
    this.newsTitle=localStorage.getItem('title');
    this.newsAuthor=localStorage.getItem('author');
    this.newspDate=localStorage.getItem('pdate');
    this.newsImg=localStorage.getItem('img');
    this.newsSummary=localStorage.getItem('desc');
  }
  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

}
