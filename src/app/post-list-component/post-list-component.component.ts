import { Component, Input, OnInit } from '@angular/core';
import Post from '../../types/Post';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})

export class PostListComponentComponent implements OnInit {

  @Input() posts: Post[] = [];

  @Input() title!: string;
  @Input() content!: string;

  constructor() { }

  ngOnInit() {
  }


  onValiderPost() {
    const post = new Post();
    post.title = this.title;
    post.content = this.content;
    this.title = "";
    this.content = "";
    this.posts.push(post);
  }

}
