import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {
  youTubeChannelId = 'UC42-ODGHFVlhcVFcBZRGNEA'
  youTubeApilId = 'AIzaSyDSITurEPg6g9wcJAT0klSRwpMB_BJT9xg'

  constructor(private readonly http: HttpClient) { }

  getData(endPoint : string, paramsRequest? : any): Observable<any>{
    // let reqOpts = {
    //   params: new HttpParams(),
    // };
    let params = new HttpParams();
    // let reqParams = '';
    if(paramsRequest){
      for (let i = 0; i < paramsRequest.length; i++) {
        let key = paramsRequest[i].key;
        let val = paramsRequest[i].value;
        params = params.append(key,val);

        // reqParams = reqParams + key + '=' + val;
        // if (i != paramsRequest.length - 1) {
        //   reqParams = reqParams + '&';
        // }
      }
    }
    return this.http.get<any>('http://localhost/gc_api/'+endPoint,{ params: params }).pipe(
      tap(_ => { } )
     );
  }


  postData=(endPoint : string, data : any)=>{
    return this.http.post<any>('http://localhost/gc_api/'+endPoint,data).pipe(
      tap(_ => {  } )
    );
  }

  getDataFromYoutube(count = 4 ): Observable<any>{
    const youtubeApi = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=`+this.youTubeChannelId+`&order=date&type=video&key=`+this.youTubeApilId
    // let reqOpts = {
    //   params: new HttpParams(),
    // };
    let params = new HttpParams();
    // let reqParams = '';
    if(count){
      params = params.append('maxResults',count);
    }
    return this.http.get<any>(youtubeApi,{ params: params }).pipe(
      tap(_ => { } )
     );
  }
}
