import { Component } from '@angular/core';
import {Event, Router, NavigationStart, NavigationEnd} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLoadingIndicator=false;
  constructor(private _router:Router){
    this._router.events.subscribe((routerEvent: Event) =>{
      if (routerEvent instanceof NavigationStart)
      {
        this.showLoadingIndicator=true;
      }
      else if (routerEvent instanceof NavigationEnd)
      {
        this.showLoadingIndicator=false;
      }
  });
}
}
