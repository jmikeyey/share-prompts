export type Post = {
  prompt: string;
  tag: string;
};

export interface FormTypes {
  type: string;
  post: Post;
  setPost: (e: Post) => void;
  submitting: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
