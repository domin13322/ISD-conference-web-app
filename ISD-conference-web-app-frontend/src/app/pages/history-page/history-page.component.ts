import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'isd-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})

export class HistoryPageComponent implements OnInit {
  readonly PADDING_BETWEEN_SECTIONS = '1rem';

  constructor() { }

  ngOnInit(): void {
  }

}
