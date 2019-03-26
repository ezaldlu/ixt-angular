import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/ticket', title: 'New Ticket',  icon: 'theaters', class: '' },
    { path: '/list-ticket', title: 'List Ticket',  icon: 'list', class: '' },
    { path: '/approval', title: 'Approval Ticket',  icon: 'inbox', class: '' },
    { path: '/my-ticket', title: 'My Ticket',  icon: 'message', class: '' },
    { path: '/assignment', title: 'Assignment Ticket',  icon: 'assignment', class: '' },
    { path: '/employee', title: 'Employees',  icon: 'assessment', class: '' },
    { path: '/user', title: 'User',  icon: 'person', class: '' },
    { path: '/job-role', title: 'Job Roles',  icon: 'accessibility', class: '' },
    { path: '/department', title: 'Departments',  icon: 'business', class: '' },
    { path: '/dept-division', title: 'Department Division',  icon: 'work', class: '' },
    { path: '/category', title: 'Category',  icon: 'markunread_mailbox', class: '' },
    { path: '/subcategory', title: 'Sub Category',  icon: 'find_in_page', class: '' },
    { path: '/technician', title: 'Technician',  icon: 'recent_actors', class: '' },
    { path: '/report-technician', title: 'Report Technician',  icon: 'find_in_page', class: '' },
    { path: '/sla', title: 'SLA',  icon: 'timeline', class: '' },
    { path: '/information', title: 'Information',  icon: 'info', class: '' },
    { path: '/news', title: 'News',  icon: 'language', class: '' },

    // Native code

    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
