import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ottvideotype',
  templateUrl: './ottvideotype.component.html',
  styleUrls: ['./ottvideotype.component.css']
})
export class OttvideotypeComponent implements OnInit {
  env=environment;
  ottEpisodeData: any;
  id: string;
  episode: string;

  constructor(private dataService: ApiService,private route:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.episodeDetail();
  }

  episodeDetail(){
    this.id= this.activatedRoute.snapshot.params['episode']; 
    this.dataService.ottepisodeDetail(this.id).subscribe((result) => {
    this.ottEpisodeData = result;
    console.log(this.ottEpisodeData);
    this.episode = this.ottEpisodeData[0].episode;
    }); 
  }

  videoDetail(event,id){
    event.preventDefault();
    this.route.navigate(["/ottvideodetail/"+id]);
  }
}
