import { Component, OnInit } from '@angular/core';
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
    document.documentElement.lang = this.translate.currentLang || this.translate.defaultLang || 'fr';
    this.translate.onLangChange?.subscribe(() => {
      document.documentElement.lang = this.translate.currentLang || 'fr';
    });
  }
}
