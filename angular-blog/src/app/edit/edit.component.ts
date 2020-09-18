import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { BlogService, Post }  from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  post: Post;
  origTitle: string;
  origBody: string;
  username: string;
  id: number;
 
  constructor(private route: ActivatedRoute, private blogService: BlogService, public router: Router) { 
  	this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {  
    this.username = this.blogService.getUsername();
    this.route.params.subscribe(params => {
      if (this.post) { this.save(); }
      this.id = Number(params.id);
      this.post = this.blogService.getPost(this.username, this.id);
      if (!this.post) {
        this.post = new Post();
        this.post.title = '';
        this.post.body = '';
        this.blogService.fetchPosts(this.username)
        .then(() => { 
          this.post = this.blogService.getPost(this.username, this.id);
          if (!this.post) { this.router.navigate(['/']); }
	  else {
            this.origTitle = this.post.title.slice(0);
            this.origBody = this.post.body.slice(0);
          }
        });
      }
      else {
        this.origTitle = this.post.title.slice(0);
        this.origBody = this.post.body.slice(0);
      }
    });
  }

  ngOnDestroy() {
    if (this.post) { this.save(); }
  }

  delete() {
    this.blogService.deletePost(this.username, this.id);
    this.post = null;
    this.router.navigate(['/']);
  }

  save() {
  if(this.post.title === this.origTitle && this.post.body === this.origBody) { return; }
    this.blogService.updatePost(this.username, this.post);
    this.post = this.blogService.getPost(this.username, this.id);
    this.origTitle = this.post.title.slice(0);
    this.origBody = this.post.body.slice(0);
  }

  preview() {
    this.save();
    this.router.navigate(['/preview/' + this.id]);
  }

  @HostListener('window:beforeunload') onUnload() {
    if (this.post) { this.save(); }
  }
}
