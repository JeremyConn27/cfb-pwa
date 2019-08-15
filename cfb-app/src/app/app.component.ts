import { Component, OnInit, ViewChildren, ElementRef, Renderer2, QueryList, AfterViewInit} from '@angular/core';
import { fader } from './route-animations';
import { RouterOutlet, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
     fader,
  ]
})


export class AppComponent implements OnInit, AfterViewInit {
  title = 'cfb-app';
  // @ViewChild('header') headerElement: HeaderComponent;
  // @ViewChildren('header') header: QueryList<any>;
  el: any;
  elTwo: any;
  observer = new IntersectionObserver(entries => {
  console.log(entries);
  if (entries[0].boundingClientRect.top < 0) {
    console.log('Past 20px!');
    //x.classList.add('stuck')
      // Array.of(this.el).every(x => console.log(x));
      for (let x = 0; x < this.el.length; x++) {
        this.el[x].classList.add('stuck');
      }

    // this.elTwo.classList.add('stuck');
  } else {
    console.log('Not past 20px');
    for(let x = 0; x < this.el.length; x++){
      this.el[x].classList.remove('stuck');
    }
   // this.elTwo.classList.remove('stuck');
  }
  });


  constructor() {}

  ngAfterViewInit() {
    this.el = document.getElementsByClassName('animated');
    // this.elTwo = document.querySelector('body > app-root > main > app-schedule > h1');
    console.log(this.el);
  }

  ngOnInit() {
    this.observer.observe(document.querySelector('#pixel-to-watch'));
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

