import { Container } from '@/components/Container'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import {
  Github,
  GithubIcon,
  MailIcon,
  PhoneCallIcon,
  TwitterIcon,
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

const meta = {
  title: 'About Me',
  description: 'I like to blog about web development',
  url: `${WEBSITE_HOST_URL}/about`,
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: meta.url,
  },
}

export default function About() {
  return (
    <div className="space-y-7">
      <h1>About</h1>
      <p>
        I wanted to make a content-driven, markdown site and also wanted to talk
        about the music I have been listening to.
      </p>
      <p>Blog posts are written with MDX and processed through Contentlayer.</p>
      
      <footer className="border-t border-gray-200 py-16 dark:border-gray-700">
        <div className="flex gap-2">
          Made by Ray Hackshaw
          <Link
            className="link"
            href="https://github.com/Ray-Hackshaw"
            target="_blank"
          >
            <GithubIcon />
          </Link>
        </div>
        <div className="flex gap-2">
          Original template by Hunter Chang
          <Link
            className="link"
            href="https://twitter.com/hunterhchang"
            target="_blank"
          >
            <TwitterIcon />
          </Link>
          <Link
            className="link"
            href="https://github.com/ChangoMan"
            target="_blank"
          >
            <GithubIcon />
          </Link>
        </div>
      </footer>
    </div>
  )
}
