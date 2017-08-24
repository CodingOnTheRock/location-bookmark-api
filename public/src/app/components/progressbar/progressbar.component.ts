import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() mode: String = 'indeterminate';
  @Input() value: Number = 0;
  @Input() isShow: Boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
