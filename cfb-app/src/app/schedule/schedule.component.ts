import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import { Schedule } from '../models/schedule';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.less']
})
export class ScheduleComponent implements OnInit {
  games: Schedule[];

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames(): void {
    this.games = this.scheduleService.getSchedule();
  }
  show(){
    alert('Button Clicked!');
  }
}
