import { Component } from '@angular/core';
import { SliderComponent } from "../../components/slider/slider.component";
import { AboutUsComponent } from "../../components/about-us/about-us.component";

@Component({
  selector: 'app-home',
  imports: [SliderComponent, AboutUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
