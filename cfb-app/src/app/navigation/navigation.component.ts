import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lazyLoadThis(){
  const targets = document.querySelectorAll('nav');

  const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
      console.log(entries)
      entries.forEach(entry => {
        console.log('😍');
  
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-lazy');
  
          img.setAttribute('src', src);
          img.classList.add('fade');
  
          observer.disconnect();
        }
      });
    });

    io.observe(target)
  };
  targets.forEach(lazyLoad);
  }



}
