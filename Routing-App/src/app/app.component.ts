import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SideNav Toolbar App';
  isSidenavOpen = true;
  sideNavItemList : SideNavItem[] = [
    {iconName : "credit_card",name : "Credit Cards",routePath:"credit-cards-list"},
    {iconName : "video_call",name : "Video Calls", routePath:"video-calls-list"}
  ];

  triggerTheSideNav(){
    this.isSidenavOpen = !this.isSidenavOpen
  }

  onRowClicked(item){
    console.log(item)

  }
}


class SideNavItem {
  iconName : string;
  name : string;
  routePath :string;
}





