import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentImageIndex = 0;
  private intervalId: any;
  private isCarouselPaused = false;

  displayCount: number = 0;
  private targetCount: number = 1;
  private counterInterval: any;
  private infiniteInterval: any;

  carouselImages = [
    {
      url: 'assets/dash-camera9.png',
      alt: 'AI Dashcam with digital safety overlays',
      titleKey: 'HOME.SAFETY_SLIDE_1_TITLE',
      textKey: 'HOME.SAFETY_SLIDE_1_TEXT'
    },
    {
      url: 'assets/dash-camera7.jpg',
      alt: 'Smart fleet management and road tracking',
      titleKey: 'HOME.SAFETY_SLIDE_2_TITLE',
      textKey: 'HOME.SAFETY_SLIDE_2_TEXT'
    },
    {
      url: 'assets/dash-camera6.jpg',
      alt: 'Smart fleet management and road tracking',
      titleKey: 'HOME.SAFETY_SLIDE_3_TITLE',
      textKey: 'HOME.SAFETY_SLIDE_3_TEXT'
    },
    {
      url: 'assets/dash-camera5.png',
      alt: 'Smart fleet management and road tracking',
      titleKey: 'HOME.SAFETY_SLIDE_4_TITLE',
      textKey: 'HOME.SAFETY_SLIDE_4_TEXT'
    },
  ];

  get currentSlide() {
    return this.carouselImages[this.currentImageIndex];
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe(frag => {
      if (!frag) {
        window.scrollTo(0, 0);
      }
    });

    this.startCarousel();

    this.startRollingNumbers();
  }

  private startCarousel() {
    this.intervalId = setInterval(() => {
      if (!this.isCarouselPaused) {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.carouselImages.length;
      }
    }, 3000);
  }

  pauseCarousel() {
    this.isCarouselPaused = true;
  }

  resumeCarousel() {
    this.isCarouselPaused = false;
  }

  startRollingNumbers() {
    const duration = 2000;
    const steps = 60; 
    const increment = this.targetCount / steps;
    let current = 0;

    this.counterInterval = setInterval(() => {
      current += increment;
      if (current >= this.targetCount) {
        this.displayCount = this.targetCount;
        clearInterval(this.counterInterval);
        this.startInfiniteGrowth();
      } else {
        this.displayCount = Math.floor(current);
      }
    }, duration / steps);
  }

  startInfiniteGrowth() {
    this.infiniteInterval = setInterval(() => {
      this.displayCount++;
    }, 80); // Adjust speed here
  }

  nextSlide() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.carouselImages.length;
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.counterInterval) clearInterval(this.counterInterval);
    if (this.infiniteInterval) clearInterval(this.infiniteInterval);
  }
}