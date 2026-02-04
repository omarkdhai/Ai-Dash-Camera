import { Injectable } from '@angular/core';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'accent-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _theme: Theme;

  get theme(): Theme {
    return this._theme;
  }

  get isDark(): boolean {
    return this._theme === 'dark';
  }

  constructor() {
    // Initialize with system preference as default
    this._theme = this.loadStoredTheme();
    this.applyToDocument();
    this.watchSystemTheme();
  }

  private watchSystemTheme(): void {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      // Update immediately if no manual preference is set
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored || (stored !== 'dark' && stored !== 'light')) {
        this._theme = mediaQuery.matches ? 'dark' : 'light';
        this.applyToDocument();
      }
      
      // Listen for system theme changes
      mediaQuery.addEventListener('change', (e) => {
        // Only update if user hasn't manually set a preference
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored || (stored !== 'dark' && stored !== 'light')) {
          this._theme = e.matches ? 'dark' : 'light';
          this.applyToDocument();
        }
      });
    }
  }

  setTheme(theme: Theme): void {
    this._theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
    this.applyToDocument();
  }

  toggle(): void {
    this.setTheme(this._theme === 'dark' ? 'light' : 'dark');
  }

  private loadStoredTheme(): Theme {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
    // Detect system/browser preference
    return this.getSystemTheme();
  }

  private getSystemTheme(): Theme {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    // Fallback to light if matchMedia is not available (more common default)
    return 'light';
  }

  /** Applied automatically; exposed for tests / manual sync. */
  applyToDocument(): void {
    const html = document.documentElement;
    if (this._theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
}
