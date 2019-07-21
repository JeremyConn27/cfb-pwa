import { Injectable } from '@angular/core';
import { Schedule } from './models/schedule';
import { SCHEDULE } from './models/schedule2019';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {

  constructor() { }

  getSchedule(): Schedule[]{
    return SCHEDULE;
  }
}
