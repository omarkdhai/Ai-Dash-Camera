import { Directive, ElementRef, OnInit, Renderer2, NgZone } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective implements OnInit {
  constructor(
    private el: ElementRef, 
    private renderer: Renderer2,
    private ngZone: NgZone // 1. Inject NgZone
  ) {}

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'reveal-hidden');

    // 2. Run the observer outside Angular to prevent unnecessary lagging
    this.ngZone.runOutsideAngular(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // 3. Use requestAnimationFrame to let the browser handle the timing
            requestAnimationFrame(() => {
              this.renderer.addClass(this.el.nativeElement, 'reveal-visible');
            });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05 });

      observer.observe(this.el.nativeElement);
    });
  }
}