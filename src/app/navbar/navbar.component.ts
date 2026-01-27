import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentLang: string = 'EN';

  ngOnInit() {
    // Check if there is a saved language in local storage
    const saved = localStorage.getItem('user-lang');
    if (saved) {
      this.currentLang = saved;
    }
  }

  switchLanguage() {
    // Toggle between EN and FR
    const targetLang = this.currentLang === 'EN' ? 'fr' : 'en';
    this.currentLang = targetLang.toUpperCase();
    
    // 1. Save choice to local storage
    localStorage.setItem('user-lang', this.currentLang);

    // 2. Set the Google Translate Cookie
    // Format: /source_lang/target_lang
    document.cookie = `googtrans=/en/${targetLang}; path=/`;
    document.cookie = `googtrans=/en/${targetLang}; domain=.localhost; path=/`; // For dev
    document.cookie = `googtrans=/en/${targetLang}; domain=${window.location.hostname}; path=/`; // For production

    // 3. Reload the page to apply the translation globally
    location.reload();
  }
}
