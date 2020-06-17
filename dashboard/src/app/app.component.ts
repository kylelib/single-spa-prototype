import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dashboard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  showTitle: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log("Dashboard init");

    window.addEventListener('single-spa:before-routing-event', (evt:any) => {
      if (location.pathname === "/") {
        this.showTitle = true;
      } else {
        this.showTitle = false;
      }
    });
  }

  ngOnDestroy() {
    console.log("Dashboard Destroyed");
  }
}
