import { IAnisongEvent } from './../model/anisong-model';
import { Component, OnInit } from '@angular/core';
import { AnisongService } from '../common/anisong.service';

@Component({
  selector: 'app-anisong-overview',
  templateUrl: './anisong-overview.component.html',
  styleUrls: ['./anisong-overview.component.css']
})
export class AnisongOverviewComponent implements OnInit {
  public eventData: IAnisongEvent[] = [];
  eventFilterText: any;

  constructor(public anisongService: AnisongService) { }

  ngOnInit() {
    this.getEventData();
  }

  public getEventData() {
    this.anisongService.getEvents().subscribe((values: IAnisongEvent[]) => {
      this.eventData = values;
    }, (error) => {
      console.error('Getting event data was unseccessful', error.toString());
    });
  }

  public filterEvents = (event: IAnisongEvent) => {
    if (this.eventFilterText === undefined) {
      return true;
    }

    return event.description.toLowerCase().indexOf(this.eventFilterText.toLowerCase()) > -1;
  }

}
