import { Component } from '@angular/core';
import { SharedCardComponent } from '../../shared/shared-card/shared-card.component';
import { TableComponent } from '../../components/table/table.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-products',
  imports: [SharedCardComponent, TableComponent, FormsModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
