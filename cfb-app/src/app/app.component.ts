import { Component, OnInit, ElementRef, AfterViewInit} from '@angular/core';
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
  el: any;
  elTwo: any;
  observer = new IntersectionObserver(entries => {
  console.log(entries);
  if (entries[0].boundingClientRect.top < 0) {
    console.log('Past 20px!');
      for (let x = 0; x < this.el.length; x++) {
        this.el[x].classList.add('stuck');
      }
  } else {
    console.log('Not past 20px');
    for(let x = 0; x < this.el.length; x++){
      this.el[x].classList.remove('stuck');
    }
  }
  });

  constructor() {}

  ngAfterViewInit() {
    this.el = document.getElementsByClassName('animated');
    console.log(this.el);
  }

  ngOnInit() {
    this.observer.observe(document.querySelector('#pixel-to-watch'));
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  let gyroscope = new Gyroscope({frequency: 60});

  gyroscope.addEventListener('reading', e => {
    if(gyroscope.y = 500){
      alert("Device is moving up and down");
      
    }
    console.log("Angular velocity along the Y-axis " + gyroscope.y);
    console.log("Angular velocity along the Z-axis " + gyroscope.z);
  });
  gyroscope.start();
}

