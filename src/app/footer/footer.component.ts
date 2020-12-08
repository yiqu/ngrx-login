import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class AppFooterComponent implements OnInit {

  footerTitle: string = "@KQ 2020";
  myUrl: string = "https://yiqu.github.io/";


  constructor() { }

  ngOnInit() { }
}
