import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SWikiService } from 'src/app/s-wiki.service';
import { Wiki } from 'src/app/wiki';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
