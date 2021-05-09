import { Component, Input, OnInit } from '@angular/core';
import { ProgressBarSlot } from './model';

@Component({
  selector: 'lib-ngx-split-progressbar',
  templateUrl: 'ngx-split-progressbar.component.html',
  styleUrls: ['ngx-split-progressbar.component.scss'],
})
export class NgxSplitProgressbarComponent implements OnInit {
  @Input() data: ProgressBarSlot[] = [];
  constructor() {}

  ngOnInit(): void {}
}
