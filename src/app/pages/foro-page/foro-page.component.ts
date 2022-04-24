import { IPost } from './../../interfaces/IPost';
import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-foro-page',
  templateUrl: './foro-page.component.html',
  styleUrls: ['./foro-page.component.scss']
})
export class ForoPageComponent implements OnInit {

  constructor(public postsService: PostsService) { }
  posts: IPost[] = []

  async ngOnInit() {
    this.posts = await this.postsService.getPosts();
    this.posts = this.posts.concat(this.posts);
    this.posts = this.posts.concat(this.posts);
    console.log(this.posts[0])
  }
}