import { Component } from '@angular/core';
import Post from '../types/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts: Post[] = [];

  constructor() {
  }

}
