import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
   <article>
      <img [src]="housingLocation?.photo" class="listing-photo" alt="housingPhoto">
      <section class="listing-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <h2 class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</h2>
      </section>

      <section class="listing-features">
        <h2 class="section-heading">About this Location</h2>
  <ul>
    <li>Available units: {{housingLocation?.availableCount}}</li>
    <li>Has Laundry? {{housingLocation?.laudary}}</li>
    <li>Has Wifi? {{housingLocation?.wifi}}</li>
  </ul>
      </section>

      <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
        <form [formGroup]="applyForm" (submit)="handleSubmitApplication()">
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" formControlName='firstName'>

        <label for="last-name">Last Name</label>
        <input type="text" id="last-name" formControlName='lastName'>

        <label for="email">Email</label>
        <input type="text" id="email" formControlName='email'>

        <button class="primary">Submit</button>
    </form>
      </section>
   </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService)
  housingLocation: HousingLocation | undefined
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  })

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id'])
    console.log("constructor", housingLocationId)
    this.housingService.getAllHousingLocationById(housingLocationId).then(result=>{
      this.housingLocation = result
    })
  }

  handleSubmitApplication(){
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    )
  }
}
