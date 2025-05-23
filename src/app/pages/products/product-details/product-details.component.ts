import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StaticProductService } from '../../../services/static-product.service';
import { Iproduct } from '../../../models/iproduct';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule,RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  productId:any;
  product?: Iproduct;
  constructor(private activatedRoute : ActivatedRoute, private productService : StaticProductService){
  }
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id') ;  
    this.product=this.productService.getProductById(this.productId) ;
  }
}
