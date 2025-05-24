import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SharedCardComponent } from "../../../shared/shared-card/shared-card.component";
import { Router, ActivatedRoute } from '@angular/router';
import { StaticProductService } from '../../../services/static-product.service';
import { Iproduct } from '../../../models/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  imports: [SharedCardComponent, FormsModule, CommonModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {
  product: Iproduct = {
    id: '',
    name: '',
    price: 0,
    quantity: 0,
    img: ''
  };

  isEditMode: boolean = false;
  productId: string = '';
  selectedFile: File | null = null;
  imagePreview: string | null = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: StaticProductService
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id') || '';

    if (this.productId && this.productId !== '0') {
      this.isEditMode = true;
      const existingProduct = this.productService.getProductById(this.productId);
      if (existingProduct) {
        this.product = { ...existingProduct };
        this.imagePreview = existingProduct.img;
      }
    } else {
      this.isEditMode = false;
      this.generateNewId();
    }
  }

  generateNewId(): void {
    const products = this.productService.getAllProducts();
    const maxId = products.length > 0 ?
      Math.max(...products.map(p => parseInt(p.id))) : 0;
    this.product.id = (maxId + 1).toString();
  }

  productHandler(e: Event): void {
    e.preventDefault();

    if (!this.isValidProduct()) {
      alert('Please fill in all required fields');
      return;
    }

    if (this.isEditMode) {
      this.productService.editProduct(this.productId, this.product);
    } else {
      this.productService.addNewProduct(this.product);
    }

    this.router.navigate(['/products']);
  }

  deleteProduct(): void {
    if (this.isEditMode && confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(this.productId);
      this.router.navigate(['/products']);
    }
  }

  isValidProduct(): boolean {
    return this.product.name.trim() !== '' &&
           this.product.price > 0 &&
           this.product.quantity >= 0;
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target?.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
      this.product.img = this.selectedFile.name;
    }
  }

  removeImage(): void {
    this.selectedFile = null;
    this.imagePreview = null;
    this.product.img = '';
  }
}
