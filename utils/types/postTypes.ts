export type Post = {
  _id?: string;
  prompt: string;
  tag: string;
  creator?: {
    image: string;
    username: string;
    email: string;
  };
};

export interface FormTypes {
  type: string;
  post: Post;
  setPost: (e: Post) => void;
  submitting: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface PromptCardListTypes {
  data: Post[];
  handleTagClick: () => void;
}
export interface PromptCardTypes {
  key: string | undefined;
  post: Post;
  handleTagClick: () => void;
  handleEdit: () => void;
  handleDelete: () => void;
}
