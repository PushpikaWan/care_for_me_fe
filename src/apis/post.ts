import {createGetRequest} from './common';
import {Post} from "../models/Post";

const BASE_URL = 'https://careformebe-qprfrmgb5a-as.a.run.app';

export async function getAllPosts(): Promise<Post[]> {
  let url = `${BASE_URL}/posts?pageSize=20&page=0`;
  const request = await createGetRequest(url);
  const response = await fetch(request);
  const data = await response.json();
  console.log("here data", data);
  return data;
}

export async function getPostById(postId: String): Promise<Post> {
  let url = `${BASE_URL}/posts/${postId}`;
  const request = await createGetRequest(url);
  const response = await fetch(request);
  const data = await response.json();
  console.log("here data", data);
  return data;
}