import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import PostCard from "../post_card/post_card";
import {Post} from "../../models/Post";
import {getPostById} from "../../apis/post";
import './post_page.scss';

export default function PostPage() {
  const [post, setPost] = useState<null | Post>(null);
  const {postId} = useParams();

  useEffect(() => {
    console.log('post id', postId);
    if (postId) {
      getPostById(postId).then(post => setPost(post)).catch(_ => console.log("network failure"));
    }
  }, [])


  const renderDownloadButton = () => {
    return <a className="android-link"
              href='https://play.google.com/store/apps/details?id=com.care_for_me.care.prod'><img
        className="android-link-button"
        alt='android'
        src="/android-icon.png"/></a>
  }

  return (
      <div className="post-page-main-container">
        {post != null ? <PostCard post={post}/> : null}
        {renderDownloadButton()}
      </div>
  );
}