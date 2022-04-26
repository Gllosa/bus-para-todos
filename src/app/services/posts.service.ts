import { IPost, IAnswer, IPostPayload } from './../interfaces/IPost';
import { Injectable } from '@angular/core';
import {
  collection,
  doc,
  getDocs,
  getDoc,
  getFirestore,
  updateDoc,
  arrayUnion,
  addDoc,
} from 'firebase/firestore';
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
    querySnap.forEach(doc => {
      posts.push({ ...(doc.data() as IPost), id: doc.id });
    });
    return posts;
  }

  async getPostById(id: string) {
    const docRef = doc(db, 'posts', id);
    const docSnap = await getDoc(docRef);
    return docSnap.data() as IPost;
  }

  async addResponseToPost(postId: string, answer: IAnswer) {
    const docRef = doc(db, 'posts', postId);
    await updateDoc(docRef, {
      answers: arrayUnion(answer),
    });
  }

  async addPost(post: IPostPayload) {
    const defaultPost = {
      author: '',
      answers: [],
      description: '',
      title: '',
    };
    const { author, description, title } = post;
    const sanitizedPost = {
      ...defaultPost,
      author,
      description,
      title,
    };
    await addDoc(this.postsCollection, sanitizedPost);
  }
}
