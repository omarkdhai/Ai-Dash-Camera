import { Injectable } from '@angular/core';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'accent-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _theme: Theme = 'dark';

  get theme(): Theme {
    return this._theme;
  }

  get isDark(): boolean {
    return this._theme === 'dark';
  }

  constructor() {
    this._theme = this.loadStoredTheme();
    this.applyToDocument();
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
    return 'dark';
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
