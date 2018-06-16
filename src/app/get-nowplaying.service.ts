import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class GetNowplayingService {

  private nowplaying: any = [];
  private url: string = 'https://api.spotify.com/v1/me/player/currently-playing';

  accessToken: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient) { }

  //アクセストークン取得
  public auth() {
    this.route.fragment.subscribe(fragment => {
      let result: string[];
      result = fragment.split((/=|&/));
      this.accessToken = result[1];
    })
  }

  //HTTPヘッダー
  private headers: any = new Headers({
    'Authorization': 'Bearer ' + this.accessToken
  });

  public getNowPlaying() {
    console.log(this.headers);
    return this.http.get(this.url, {
      headers: {
        'Authorization': 'Bearer ' + this.accessToken
      }
    })
      .toPromise()
      .then((res) => {
        const response: any = res;
        return response;
      })
      .catch(this.errorHandler);

  }

  private errorHandler(err) {
    console.log('Error occured.', err);
    return Promise.reject(err.message || err);
  }

}