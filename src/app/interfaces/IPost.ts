export interface IPost {
  author: string;
  title: string;
  description: string;
  answers: IAnswer[];
}

export interface IAnswer {
  author: string;
  description: string;
}