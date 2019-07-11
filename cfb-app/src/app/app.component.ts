import { Component } from '@angular/core';
import { fader } from './route-animations';
import { RouterOutlet, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
     fader
  ]
})

export class AppComponent {
  title = 'cfb-app';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

