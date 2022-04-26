import { IPost } from './../../interfaces/IPost';
import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { MatDialog } from '@angular/material/dialog';
import { PostCreationComponent } from '@components/index';

@Component({
  selector: 'app-foro-page',
  templateUrl: './foro-page.component.html',
  styleUrls: ['./foro-page.component.scss'],
})
export class ForoPageComponent implements OnInit {
  constructor(public postsService: PostsService, public dialog: MatDialog) {}
  posts: IPost[] = [];

  async ngOnInit() {
    this.posts = await this.postsService.getPosts();
  }

  openDialog() {
    const dialogRef = this.dialog.open(PostCreationComponent, {
      width: '80%',
    });
  }
}
