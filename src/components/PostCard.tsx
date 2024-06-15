import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

export const PostCard = ({
  date,
  url,
  title,
  description,
  cover,
  artist,
}: Post) => {
  return (
    <article className="flex flex-col items-start justify-between rounded-md border-2 bg-gray-100 p-2 dark:bg-slate-700">
      <div className="flex items-center gap-2">
        <div className="pointer-events-none overflow-hidden rounded-md">
          <Image
            alt={`${title} cover`}
            src={`/images/covers/${cover}`}
            width={100}
            height={100}
            priority
          />
        </div>
        <div className="relative space-y-0">
          <time className="text-xs" dateTime={date}>
            {format(parseISO(date), 'LLLL d, yyyy')}
          </time>

          <div className="space-y-0">
            <h3 className="text-lg font-semibold">
              <Link className="link" href={url}>
                <span className="absolute inset-0" />
                {title}
              </Link>
            </h3>
          </div>
          <p className="pointer-events-none text-sm opacity-90">{artist}</p>
          <p className="line-clamp-3 text-sm leading-6">{description}</p>
        </div>
      </div>
    </article>
  )
}
