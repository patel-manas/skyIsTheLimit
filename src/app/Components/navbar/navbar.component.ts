import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'sky-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() linkClickHandler: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  linkClicked(item) {
    this.linkClickHandler.emit(item);
  }
}
