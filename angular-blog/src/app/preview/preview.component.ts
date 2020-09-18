import { Component, OnInit } from '@angular/core';
import { BlogService, Post }  from '../blog.service';
import { Parser, HtmlRenderer } from 'commonmark';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  post: Post;
  username: string;
  reader: Parser;
  writer: HtmlRenderer;
  rTitle: string;
  rBody: string;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    this.username = this.blogService.getUsername();
    this.reader = new Parser;
    this.writer = new HtmlRenderer;
    this.route.params.subscribe(params => {
      this.post = this.blogService.getPost(this.username, params.id)
      this.renderPost();
    });
  }

  renderPost(): void {
    this.rTitle = this.writer.render(this.reader.parse(this.post.title));
    this.rBody = this.writer.render(this.reader.parse(this.post.body));
  }

}
