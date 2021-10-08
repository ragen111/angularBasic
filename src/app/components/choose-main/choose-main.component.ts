import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-main',
  templateUrl: './choose-main.component.html',
  styleUrls: ['./choose-main.component.css']
})
export class ChooseMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  check(e:any){
    if(e.target.style.backgroundColor===''){
      e.target.style.backgroundColor='#394A70';
      e.target.style.borderRadius='5px';
      return;
    }
    e.target.style.backgroundColor='';
  }

}
