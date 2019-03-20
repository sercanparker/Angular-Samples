import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Grid-FxFlex-App';
  isSidenavOpen = true;
  sideNavItemList : SideNavItem[] = [
    {iconName : "folder_open",name : "Folders"},
    {iconName : "verified_user",name : "Verified Users"},
    {iconName : "credit_card",name : "Credit Cards"},
    {iconName : "video_call",name : "Video Calls"},
    {iconName : "account_circle",name : "Active Accounts"}
  ];

  menuItemList : MenuItem[] = [
    {iconName : "notifications", name : "Notifications", numberOfNotifications :5 },
    {iconName : "dialpad", name : "Redial", numberOfNotifications :7}
  ]

  totalNumberOfNotification = 0;

  triggerTheSideNav(){
    this.isSidenavOpen = !this.isSidenavOpen
  }

  ngOnInit(): void {
    this.menuItemList.forEach(element => {
      this.totalNumberOfNotification += element.numberOfNotifications;
    });  
  }
  
}


class SideNavItem {
  iconName : string;
  name : string;
}

class MenuItem {
  iconName : string;
  name : string;
  numberOfNotifications: number
}
