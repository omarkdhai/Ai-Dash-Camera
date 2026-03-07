import { Component, OnInit, HostListener } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { TranslateService } from '@ngx-translate/core';

const LANG_STORAGE_KEY = 'accent-lang';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private theme: ThemeService,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('fr');
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === 'en' || saved === 'fr') {
      translate.use(saved);
    } else {
      translate.use('fr');
    }
    document.documentElement.lang = translate.currentLang || 'fr';
  }

  ngOnInit() {
    document.documentElement.classList.add('page-section-scroll');
    document.body.classList.add('page-section-scroll');
    document.documentElement.lang = this.translate.currentLang || this.translate.defaultLang || 'fr';
    this.translate.onLangChange?.subscribe(() => {
      document.documentElement.lang = this.translate.currentLang || 'fr';
    });
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    const target = e.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.scrollToNextSection();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.scrollToPreviousSection();
    }
  }

  private getSections(): HTMLElement[] {
    return Array.from(document.querySelectorAll('.scroll-section'));
  }

  private scrollToNextSection(): void {
    const sections = this.getSections();
    if (!sections.length) return;
    const scrollY = window.scrollY;
    const threshold = 120;
    for (let i = 0; i < sections.length; i++) {
      const top = sections[i].getBoundingClientRect().top + scrollY;
      if (top > scrollY + threshold) {
        window.scrollTo({ top: top, behavior: 'smooth' });
        return;
      }
    }
  }

  private scrollToPreviousSection(): void {
    const sections = this.getSections();
    if (!sections.length) return;
    const scrollY = window.scrollY;
    const threshold = 120;
    for (let i = sections.length - 1; i >= 0; i--) {
      const top = sections[i].getBoundingClientRect().top + scrollY;
      if (top < scrollY + threshold) {
        const prevIndex = i - 1;
        const targetTop = prevIndex >= 0
          ? sections[prevIndex].getBoundingClientRect().top + window.scrollY
          : 0;
        window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
