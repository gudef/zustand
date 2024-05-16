import Image from 'next/image'
import styles from './page.module.css'
import Posts from '@/components/posts/posts'
import PostsCount from '@/components/postsCount/postsCount'

export default function Home() {
  return (
    <main className={styles.main}>
      <Posts />
      <PostsCount />
    </main>
  )
}
