import { Component, OnInit, Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
@Directive({
  selector: '[header]'
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
