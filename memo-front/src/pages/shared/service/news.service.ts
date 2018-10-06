import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";

const newsApiKey = environment.newsApiKey;
const newsApiUrl =  environment.newsApiUrl;

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) {
  }

  getData(url) {
    return this.http.get(`${newsApiUrl}/${url}apiKey=${newsApiKey}`);
  }

}
