import { Component, OnInit } from '@angular/core';
import { SharedCardComponent } from '../../shared/shared-card/shared-card.component';
import { TableComponent } from '../../components/table/table.component';
import { StaticProductService } from '../../services/static-product.service';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-products',
  imports: [SharedCardComponent,TableComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products!:Iproduct[];

  constructor(private productsService:StaticProductService){}

  ngOnInit(): void {
    this.products=this.productsService.getAllProducts();
    console.log(this.products);
    this.products=this.productsService.getAllProducts();
  }

}
