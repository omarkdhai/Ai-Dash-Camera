import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // If there is NO fragment in the URL, force the window to the top
    this.route.fragment.subscribe(frag => {
      if (!frag) {
        window.scrollTo(0, 0);
      }
    });
  }
}
