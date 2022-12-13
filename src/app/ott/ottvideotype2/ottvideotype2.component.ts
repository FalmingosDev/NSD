import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ottvideotype2',
  templateUrl: './ottvideotype2.component.html',
  styleUrls: ['./ottvideotype2.component.css']
})
export class Ottvideotype2Component implements OnInit {

  env=environment;
  ottEpisodeData: any;
  id: string;
  episode: string;
  type:string;
  season:string;
  name: string;
  series:string;

  constructor(private dataService: ApiService,private route:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.episodeDetail();
  }

  episodeDetail(){
    this.id= this.activatedRoute.snapshot.params['episode']; 
    this.type= this.activatedRoute.snapshot.params['type']; 
    this.season= this.activatedRoute.snapshot.params['season'];
    this.series= this.activatedRoute.snapshot.params['series']; 
    alert(this.series+' '+this.season)
    this.dataService.ottseriesSeasonDetail(this.season,this.series).subscribe((result) => {
    this.ottEpisodeData = result;
    this.name = this.ottEpisodeData[0].name;
    this.episode = this.ottEpisodeData[0].episode;
    }); 
  }

  videoDetail(event,id){
    event.preventDefault();
    this.route.navigate(["/ottvideodetail/"+id]);
  }

}
