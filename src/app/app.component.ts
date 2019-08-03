import { Component } from '@angular/core';

@Component({
  selector: 'sky-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'skyIsTheLimit';

  navActions(event) {
    console.log('catched secion', event);

    const section = document.getElementById(event.trim());


    console.log('catched elem', section);
    section.scrollIntoView({behavior: 'smooth'});
  }
}
