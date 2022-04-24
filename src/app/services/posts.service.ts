import { IPost } from './../interfaces/IPost';
import { Injectable } from '@angular/core';
import { collection, doc, getDocs, getFirestore } from 'firebase/firestore';
import { environment } from '../../environments/environment';

const db = getFirestore(environment.app);

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: IPost[];

  postsCollection = collection(db, 'posts');

  async getPosts() {
    const querySnap = await getDocs(this.postsCollection);
    const posts: IPost[] = [];
    querySnap.forEach(doc => 
      posts.push(doc.data() as IPost)
    )
    return posts;
  }
}
