import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/interfaces/IPost';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {}
  post: IPost | null = null;

  async ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.post = await this.postService.getPostById(postId);
      console.log(this.post);
    }
  }
}
