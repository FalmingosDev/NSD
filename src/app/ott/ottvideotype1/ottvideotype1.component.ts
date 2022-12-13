import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ottvideotype1',
  templateUrl: './ottvideotype1.component.html',
  styleUrls: ['./ottvideotype1.component.css']
})
export class Ottvideotype1Component implements OnInit {

  env=environment;
  ottSeriesData: any;
  id: string;
  episode: string;
  type:string;
  season:string;
  name: string;
  series:string;
  

  constructor(private dataService: ApiService,private route:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.seriesDetail();
  }

  seriesDetail(){
    this.id= this.activatedRoute.snapshot.params['episode']; 
    this.type= this.activatedRoute.snapshot.params['type']; 
    this.season= this.activatedRoute.snapshot.params['season']; 
    this.series= this.activatedRoute.snapshot.params['series']; 

    // alert(this.id+' '+this.type+' '+this.season) 
    this.dataService.ottseriesDetail(this.id,this.type,this.season,this.series).subscribe((result) => {
    this.ottSeriesData = result;
    this.name = this.ottSeriesData[0].name;
    this.episode = this.ottSeriesData[0].episode;
    }); 
  }

  // episodeDetail(event,type,epId,seasonId,seriesId){
  //   event.preventDefault();
  //   this.route.navigate(["/ottvideotype2/"+type+"/"+epId+"/"+seasonId+"/"+seriesId]);

  // }
  


  videoDetail(event,id){
    event.preventDefault();
    this.route.navigate(["/ottvideodetail/"+id]);
  }

}
