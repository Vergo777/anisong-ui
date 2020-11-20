import { IAnisongEvent } from './../../model/anisong-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anisong-overview-event',
  templateUrl: './anisong-overview-event.component.html',
  styleUrls: ['./anisong-overview-event.component.css']
})
export class AnisongOverviewEventComponent implements OnInit {
  @Input() public event: IAnisongEvent;

  constructor() { }

  ngOnInit() {
  }

  public convertIsoStringToDate(isoString: string) {
    let date = new Date(isoString);

    return date.toLocaleString();
  }

}
