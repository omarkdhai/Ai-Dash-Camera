import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const savedLang = localStorage.getItem('user-lang');
    if (savedLang) {
      const code = savedLang.toLowerCase();
      // Reinforce the cookie to ensure Google engine picks it up on every page load
      document.cookie = `googtrans=/en/${code}; path=/`;
    }
  }
}
