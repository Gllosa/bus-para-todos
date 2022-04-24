export interface IPost {
  id: string
  author: string;
  title: string;
  description: string;
  answers: IAnswer[];
}

export interface IAnswer {
  author: string;
  answer: string;
}