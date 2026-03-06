import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('metricsSection') metricsSection?: ElementRef<HTMLElement>;

  connectedDevicesDisplay = 0;

  private targetConnectedDevices = 40000;
  private animationFrameId?: number;
  private animationStartTimestamp?: number;
  private intersectionObserver?: IntersectionObserver;

  ngOnInit(): void {
    // Counter will be started by the intersection observer in ngAfterViewInit
  }

  ngAfterViewInit(): void {
    const el = this.metricsSection?.nativeElement;
    if (!el) return;

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          this.startConnectedDevicesCounter();
          this.intersectionObserver?.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    this.intersectionObserver.observe(el);
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== undefined) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.intersectionObserver?.disconnect();
  }

  private startConnectedDevicesCounter(): void {
    const durationMs = 4500; // 4.5 seconds total animation
    this.connectedDevicesDisplay = 0;
    this.animationStartTimestamp = undefined;

    const step = (timestamp: number) => {
      if (this.animationStartTimestamp === undefined) {
        this.animationStartTimestamp = timestamp;
      }

      const elapsed = timestamp - this.animationStartTimestamp;
      const progress = Math.min(elapsed / durationMs, 1);

      // Ease-out interpolation
      const eased = 1 - Math.pow(1 - progress, 2);
      this.connectedDevicesDisplay = Math.floor(eased * this.targetConnectedDevices);

      if (progress < 1) {
        this.animationFrameId = requestAnimationFrame(step);
      } else {
        this.connectedDevicesDisplay = this.targetConnectedDevices;
        this.animationFrameId = undefined;
      }
    };

    this.animationFrameId = requestAnimationFrame(step);
  }

}
