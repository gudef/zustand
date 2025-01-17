'use client'
import styles from "./posts.module.css"
import React, { useState } from 'react'
import { usePostStore } from '@/store/Post'

function Posts() {

    const {posts, addPost ,editPost, deletePost} = usePostStore();
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [postId,setPostId] = useState(null);
    const [isEdit,setIsEdit] = useState(false);

    const handleAddPost = (e) => {
        e.preventDefault();
        if(!title && !description) return;

        const newPost = {
            id: Date.now(),
            title,
            description
        }

        addPost(newPost);

        setTitle("");
        setDescription("");

    }

    const EditAPost = (id) => {
        const post = posts.filter((post) => post.id === id)[0];
        setTitle(post.title);
        setDescription(post.description);
        setPostId(id);
        setIsEdit(true);
    }

    const handleEditPost = (e) =>{
        e.preventDefault();

        if(!title && !description) return;

        const updatedPost = {
            id: postId,
            title,
            description
        }
        
        editPost(updatedPost.id,updatedPost)
        setTitle("");
        setDescription("");
        setIsEdit(false);
    }

    const handleRemovePost = (Id) => {
        deletePost(Id);
    }

  return (
    <div className={styles.container}>
        
        <form className={styles.form}>
            <input
                type="text"
                className={styles.input}
                placeholder="Title"
                value={title}
                onChange={(e) =>setTitle(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                className={styles.input}
                onChange={(e) =>setDescription(e.target.value)} 
            ></textarea>

            <button
                className={styles.button}
                onClick={isEdit? handleEditPost : handleAddPost}
            >
              {isEdit ? "Edit Post" : "Add New Post"}
            </button>


        </form>

        <h1 className={styles.heading}>Posts</h1>
        {posts ? 
        (posts.map((post) => (

         <div key={post.id} className={styles.post}>
         <h3 className={styles.title}>{post.title}</h3>
         <p className={styles.description}>{post.description}</p>
         <button
            className={styles.editButton}
            onClick={()=>EditAPost(post.id)}
         >
         Edit
         </button>
         <button
            className={styles.deleteButton}
            onClick={()=>handleRemovePost(post.id)}
         >
         Delete
         </button>
         </div>
        ))
        ): (
            <p>No Post found.</p>
        )}
    </div>
  )
}

export default Posts