import { PostCard } from '@/components/PostCard'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div>
      <div className="space-y-5">
        <h1>What I&apos;m Listening To</h1>
        <p>List of album reviews and music opinions of mine.</p>
      </div>

      <div className="mt-16">
        <h2>Recent posts:</h2>
      </div>
      <div className="mt-10 space-y-12 border-t border-gray-200 pt-10 dark:border-gray-700">
        {!posts ||
          (posts.length === 0 && <p>No posts yet. Check back again later.</p>)}
        {/* {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))} */}
      </div>
    </div>
  )
}
