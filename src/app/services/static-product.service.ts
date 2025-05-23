import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductService {
  productList:Iproduct[]=[];

  constructor() { 
    this.productList =[
      {
        id: '1',
        name: 'Chair',
        price: 100,
        img: 'imgs1.png',
        quantity: 0
      },
      {
        id: '2',
        name: 'Table',
        price: 200,
        img: 'imgs2.png',
        quantity: 1
      },
      {
        id: '3',
        name: 'Sofa',
        price: 300,
        img: 'imgs3.png',
        quantity: 8
      },
      {
        id: '4',
        name: 'Bookshelf',
        price: 250,
        img: 'imgs4.png',
        quantity: 5
      },
    ];
  }
  getAllProducts():Iproduct[]{
    return this.productList;
  }
  getProductById(id:string):Iproduct | undefined{
    return this.productList.find(prod=>prod.id==id)!;
  }
  addNewProduct(product:Iproduct){
    return this.productList.push(product);
  }
  editProduct(id:string,product:Iproduct){
    
  }
  deleteProduct(productId:string){
    this.productList= this.productList.filter((product)=>product.id!= productId);
    return this.productList;
  }
}
