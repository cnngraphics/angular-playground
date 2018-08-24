import { environment } from '@env/environment';
import { Component, OnInit, enableProdMode } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;
  apuUrl = environment.serverUrl;
  // VALUES
  name = 'Theo Marcellus';
  email = 'admin@cnngraphics.com';
  phone = '954-614-3522';
  date = '2018-02-02';
  body: any[] = [];
  headers = new HttpHeaders();

  constructor( private quoteService: QuoteService, private http: HttpClient ) { }

  ngOnInit() {

  }


  requestQuote() {
    const HttpOptions = {
      headers: {
        'X-Token': environment.token,
        'X-Api-Key': environment.apiKey,
        'Content-Type':  'application/json'
      }
    };

    const body = {
      'name': this.name,
      'email' : this.email,
      'phone': this.phone,
      'date' : this.date
    };
    console.log('Options:================');
    console.log(HttpOptions);

    return this.http.post( environment.serverUrl + 'form_quote_request/add', body, HttpOptions).subscribe( res => {
      console.log( res );
    });

  }

  getAll() {
    const HttpOptions = {
      headers: {
        'X-Token': environment.token,
        'X-Api-Key': environment.apiKey,
      }
    };
     this.http.get( environment.serverUrl + 'form_quote_request/all', HttpOptions).subscribe(res => {
      console.log(res);
    });
  }

}
