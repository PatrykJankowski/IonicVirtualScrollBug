import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public items = [
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750673.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750673.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750673.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750673.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
    {id: 1, name: 'Name name name', imageUrl: 'https://image.flaticon.com/icons/svg/2750/2750656.svg'},
  ];

  constructor() {}

  ngOnInit() {

  }
}
