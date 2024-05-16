import { create } from 'zustand';

export const usePostStore = create((set) => ({
    posts: [
        {
            id: 1,
            title: "Post 1",
            description: "Post description",
        },
        {
            id: 2,
            title: "Post 2",
            description: "Post description",
        },
    ],
    addPost: (newPost) => {
        set((state) =>{
            return {posts: [...state.posts, newPost]}
        });
    },
    editPost: (id, updatedPost) => {
        set((state) => {
            const updatedPosts = state.posts.map((post) => {
                if(post.id === id) {
                    return {...post, ...updatedPost};
                }
                return post;
            });
            
            return {posts: updatedPosts}
        })
    },

    deletePost: (id) => {

        set((state) =>{
            const updatedPosts = state.posts.filter((post) => post.id != id);
            return {posts: updatedPosts};
        });
    }

}));