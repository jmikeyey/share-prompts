"use client";

import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";
import { Post, PromptCardListTypes } from "@utils/types/postTypes";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [post, setPost] = useState<Post[]>([]);

  const handleSearchChange = (e: any) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPost(data);
    };
    fetchPost();
  }, []);

  return (
    <section className="feed">
      <form className="retalive w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a usename"
          value={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
          required
        />
      </form>
      <PromptCardList data={post} handleTagClick={() => {}} />
    </section>
  );
};

const PromptCardList = (props: PromptCardListTypes) => {
  const { data, handleTagClick } = props;

  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};
export default Feed;
