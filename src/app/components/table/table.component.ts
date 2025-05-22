import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsComponent } from '../../pages/products/products.component';

@Component({
  selector: 'app-table',
  imports: [CommonModule,ProductsComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
products: any;

}
