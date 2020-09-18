import { Component, OnInit } from '@angular/core';
import { BlogService, Post }  from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	posts: Post[];
	username: string;
  constructor(private blogService: BlogService, public router: Router) { }

  ngOnInit() {
    this.username = this.blogService.getUsername();
    this.blogService.fetchPosts(this.username)
    .then(() => {
      this.getPosts();
    });
  }

  getPosts(): void {
    this.posts = this.blogService.getPosts(this.username); 
  }

  newPost(): void {
    this.blogService.newPost(this.username)
    .then(post => {
      this.getPosts();
      return post;
    })
    .then(post => { this.router.navigate(['/' , 'edit', post.postid]); });
  }
}
