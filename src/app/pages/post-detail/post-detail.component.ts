import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/interfaces/IPost';
import { AuthService } from 'src/app/services/auth.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private postService: PostsService,
    public authService: AuthService
  ) {}
  post: IPost | null = null;
  userPicture: string = '../../../assets/usuario.png';
  postId = this.route.snapshot.paramMap.get('id');
  answer: string = ''

  async ngOnInit() {
    if (this.postId) {
      this.post = await this.postService.getPostById(this.postId);
    }
  }

  async enviarRespuesta() {
    if (this.postId) {
      await this.postService.addResponseToPost(this.postId, {
        author: this.authService.user?.displayName ?? 'Anónimo',
        answer: this.answer
      });
    }
    this.answer = '';
    window.location.reload()
  }
}
