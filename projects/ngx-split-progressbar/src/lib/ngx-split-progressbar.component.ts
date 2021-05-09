import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ngx-split-progressbar',
  templateUrl: 'ngx-split-progressbar.component.html',
  styleUrls: ['ngx-split-progressbar.component.scss'],
})
export class NgxSplitProgressbarComponent implements OnInit {
  @Input() data: any = [
    { name: 'Slot one', color: '#AEC6F4', weightage: 20 },
    { name: 'Slot two', color: '#C5C9E5', weightage: 20 },
    { name: 'Slot three', color: '#BBDBCE', weightage: 20 },
    { name: 'Slot four', color: '#F8E6A6', weightage: 40 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
