import { Component, OnInit } from '@angular/core';
import {Video} from './../video';
import { VideoServiceService } from '../video-service.service';
@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers:[VideoServiceService]

})
export class VideoCenterComponent implements OnInit {

selectedVideo:Video;
videos:Array<Video>;
  constructor(private videoservice:VideoServiceService) { }

  videoSelect(video:any){
  this.selectedVideo = video;
  console.log(this.selectedVideo);
  }
  ngOnInit() {
    this.videoservice.getVideos()
        .subscribe(video => this.videos=video);
  }
  onSubmitAddVideo(video:Video){
    this.videoservice.addVideo(video)
                    .subscribe(resp => this.videos.push(resp));
    this.selectedVideo = video;
  }
}
