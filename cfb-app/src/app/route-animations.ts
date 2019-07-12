import { trigger, transition, style, query, group, animateChild, animate, keyframes, } from '@angular/animations';

export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'translateY(10%)',
          'will-change': 'transform'
        }),
      ], {optional: true}),
      // Animate the new page in
      query(':enter', [
        animate('500ms ease', style({ opacity: 1, transform: 'translateX(0)' })),
      ], {optional: true})
    ]),
]);
