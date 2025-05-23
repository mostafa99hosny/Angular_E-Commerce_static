import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StaticProductService } from '../../services/static-product.service';
import { Iproduct } from '../../models/iproduct';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-table',
  imports: [CommonModule,RouterLink],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  products!:Iproduct[];

  constructor(private productsService:StaticProductService){}

  ngOnInit(): void {
    this.products=this.productsService.getAllProducts();
  }
  deleteHandler(productId:string){
    this.products=this.productsService.deleteProduct(productId);
    
  }

}
