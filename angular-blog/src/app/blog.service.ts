import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  POSTS: Post[]= [];
  private posts: Post[];
  private username: string;

  constructor(public router: Router) {
    this.username = this.getUsername();
    this.posts = this.POSTS;
  }

  fetchPosts(username: string): Promise<void> {
    return fetch('/api/' + username, { method: 'GET', credentials: 'include' })
    .then(response => response.json())
    .then(response => {     
      this.posts.length = 0;
      response['body'].forEach(post => {
        let copy = JSON.parse(JSON.stringify(post));
        this.posts.push(copy);
      });
    });
  }

  getPosts(username: string): Post[] { 
    return this.posts;
  }

  getPost(username: string, id: number): Post {
    let result = this.posts.filter(post => post.postid == id);
    if (result.length === 0) { return null; }
    else { return result[0]; }
  }

  newPost(username: string): Promise<Post> {
    let newPost = new Post();
    newPost.postid    = this.getMaxPostId() + 1;
    newPost.created   = Date.now();
    newPost.modified  = Date.now();
    newPost.title     = '';
    newPost.body      = '';
    this.posts.push(newPost);

    return fetch('/api/' + username + '/' + newPostId.toString(), {
      method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({title: "", body: ""})
    })
    .then(response => {
      if (response.status === 201) { return newPost; }
      else {
        for(var i = this.posts.length - 1; i >= 0; i--) {
          if (this.posts[i].postid === newPostId) { this.posts.splice(i, 1); }
        }
        alert('Status ' + response.status.toString() + ': Error creating post');
        this.router.navigate(['/']);
        return null;
      }
    });
  }

  updatePost(username: string, post: Post): Promise<void> {
    let result = this.posts.filter(p => p.postid == post.postid);
    if (result.length != 1) { return Promise.resolve(); }

    let orig = JSON.parse(JSON.stringify(result[0]));
    result[0].modified = Date.now();
    result[0].title = post.title;
    result[0].body = post.body;

    return fetch('/api/' + username + '/' + post.postid.toString(), {
      method: 'PUT', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(post)
    })
    .then(response => {
      if(response.status === 200) { }
      else {
        alert('Status ' + response.status.toString() + ': Error updating post');
        result[0].modified = orig.modified;
        result[0].title = orig.title;
        result[0].body = orig.body;
        this.router.navigate(['/' , 'edit', orig.postid]);
      }
    });
  }

  deletePost(username: string, postid: number): Promise<void> {
    let result = this.posts.filter(p => p.postid == postid);
    if(result.length != 1) { return; }
    let orig = JSON.parse(JSON.stringify(result[0]));
    for(var i = this.posts.length - 1; i >= 0; i--) {
        if(this.posts[i].postid === postid) { this.posts.splice(i, 1); }
    }

    return fetch('/api/' + username + '/' + postid.toString(), { method: 'DELETE', credentials: 'include' })
    .then(response => {
      if(response.status === 204) { }
      else {
        this.posts.push(orig);
        alert('Status ' + response.status.toString() + ': Error deleting post');
        this.router.navigate(['/']);
      }
    });
  }

  getUsername(): string {
  if(!document.cookie) { return null; }
    let token = parseJWT(document.cookie);
    let username = token.usr;
    if(username) { return username; }
    else { return null; }
  }
				       
  getMaxPostId(): number {
    let mid = 0;
    this.posts.forEach(post => {
      if(post.postid > mid) mid = post.postid;
    });
    return mid;
  }
}

function parseJWT(token) {
  let base64Url = token.split('.')[1];
  let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(atob(base64));
}

export class Post {
  postid: number;
  created: Date | number;
  modified: Date | number;
  title: string;
  body: string;
}
