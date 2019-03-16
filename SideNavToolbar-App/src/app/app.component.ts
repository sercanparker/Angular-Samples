import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SideNav Toolbar App';
  isSidenavOpen = true;
  sideNavItemList : SideNavItem[] = [
    {iconName : "folder_open",name : "Folders"},
    {iconName : "verified_user",name : "Verified Users"},
    {iconName : "credit_card",name : "Credit Cards"},
    {iconName : "video_call",name : "Video Calls"},
    {iconName : "account_circle",name : "Active Accounts"}
  ];

  triggerTheSideNav(){
    this.isSidenavOpen = !this.isSidenavOpen
  }
}


class SideNavItem {
  iconName : string;
  name : string;
}





