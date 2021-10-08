import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-service',
  templateUrl: './product-service.component.html',
  styleUrls: ['./product-service.component.css']
})
export class ProductServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public index:number=0;
  public left:any='';

  leftMove(){
    this.index--;
    if(this.index===-1){
        this.index=3;
    }
    this.left=-this.index*295+'px';
  }

  rightMove(){
    this.index++;
    if(this.index===4){
        this.index=0;
    }
    this.left=-this.index*295+'px';
  }
}
