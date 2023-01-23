import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http' 
import { take } from 'rxjs';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {

  countries: any[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.httpClient.get('https://restcountries.com/v2/all')
    .subscribe((res: any) => {
      console.log(res);
      this.countries = res;
    });
  }

}
