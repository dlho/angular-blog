import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title = "";
  @Input() content: string = "";
  @Input() loveIts: number = 0;
  @Input() created_at: Date = new Date;

  constructor() { }

  ngOnInit() {
  }

  getLovesIt() {
    return this.loveIts;
  }

  getColor() {
    if(this.getLovesIt() > 0) {
      return 'green';
    } else if(this.getLovesIt() < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }

  loveIt () {
    this.loveIts++;
  }

  dontLoveIt () {
    this.loveIts--;
  }

}
