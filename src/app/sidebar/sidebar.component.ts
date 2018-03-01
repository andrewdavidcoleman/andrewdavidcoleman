import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

/** @title Implicit main content with two sidenavs */
@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  ngOnInit() {
    console.log("On Init!!!");
  }

  events=[];
}
