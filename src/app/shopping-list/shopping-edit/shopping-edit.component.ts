import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('#txtName', { static: true }) txtName: ElementRef;
  @ViewChild('#txtAmount', { static: true }) txtAmount: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
