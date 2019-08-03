import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sky-nav-wrapper',
  templateUrl: './nav-wrapper.component.html',
  styleUrls: ['./nav-wrapper.component.scss']
})
export class NavWrapperComponent implements OnInit {

  @Output() sectionSelected: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  navSelected(event){
    this.sectionSelected.emit(event);
  }
}
