import { PostCard } from '@/components/PostCard'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

// todo: non-hardcode - from spotify api
interface CurrentTrack {
  artist: string
  name: string
  type: 'album' | 'song'
}

const currentTracks: CurrentTrack[] = [
  {
    artist: 'Ninajirachi',
    name: 'girl EDM',
    type: 'song',
  },
  {
    artist: 'Chappell Roan',
    name: 'Kaleidoscope',
    type: 'song',
  },
  {
    artist: 'JPEGMAFIA',
    name: "don't rely on other men",
    type: 'song',
  },
  {
    artist: 'EDEN',
    name: '5ever',
    type: 'song',
  },
  {
    artist: 'tsubi club',
    name: 'laced up',
    type: 'song',
  },
  {
    artist: 'Flash in the Pan',
    name: 'Jane Remover',
    type: 'song',
  },
]

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-lg font-semibold md:text-3xl">
          What I&apos;m Listening To:
        </h1>
        <div className="grid w-full gap-4 py-4 md:grid-cols-3">
          {currentTracks.map((track) => (
            // todo: composite key needed - refine this
            <div
              className="space-y-0 rounded-md bg-gray-100 p-2 dark:bg-slate-700"
              key={track.name + track.artist}
            >
              <p title={track.name} className="truncate text-xl">
                {track.name}
              </p>
              <p title={track.artist} className="truncate text-primary/70">
                {track.artist}
              </p>
            </div>
          ))}
        </div>
      </div>
      <h2>Recent posts:</h2>
      <div className="space-y-12 border-t border-gray-200 pt-10 dark:border-gray-700">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  )
}
