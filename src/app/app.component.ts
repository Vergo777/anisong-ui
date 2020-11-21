import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'anisong-ui';

  public constructor(private titleService: Title)  {}

  ngOnInit(): void {
    this.setTitle('Anisong Events');
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
