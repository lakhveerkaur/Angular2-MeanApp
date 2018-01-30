import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Video} from './video';

@Injectable()
export class VideoServiceService {

private _getUrl ="/api/videos";
private _postUrl = "/api/video";

  constructor(private http:Http) { }
  getVideos(){
      return this.http.get(this._getUrl)
                      .map(res => res.json());
  }
  addVideo(video: Video) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this._postUrl, JSON.stringify(video), options)
        .map(response => response.json());
    }
}
