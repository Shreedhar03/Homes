import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form action="">
        <input type="text" placeholder="search by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>

      <section class="results">
        <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
      </section>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = []
  housingService: HousingService = inject(HousingService)
  filteredLocationList:HousingLocation[] = []
  
  constructor() {
    this.housingService.getAllHousingLocation().then((result: HousingLocation[]) => {
      this.housingLocationList = result
      this.filteredLocationList = result
    })
  }

  filterResults(filter: string){
    if(!filter) this.filteredLocationList = this.housingLocationList

    this.filteredLocationList = this.housingLocationList.filter(house=>
      house?.city.toLowerCase().includes(filter.toLowerCase())
    )
  }
}
