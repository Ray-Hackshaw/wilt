import { ThemeProvider } from '@/app/providers'
import { Container } from '@/components/Container'
import { Navigation } from '@/components/Navigation'
import ThemeSwitch from '@/components/ThemeSwitch'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import './global.css'

const meta = {
  title: "What I'm Listening To",
  description: 'Blog for album reviews for music I listen to',
  image: `${WEBSITE_HOST_URL}/og-preview.jpg`,
}

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: '%s | Hunter Chang',
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: meta.image,
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    card: 'summary_large_image',
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <header className="sticky top-0 py-4">
            <div className="mx-auto flex max-w-2xl items-center justify-between py-6 lg:max-w-7xl">
              <Navigation />
              <ThemeSwitch />
            </div>
          </header>
          <main>
            <Container>{children}</Container>
          </main>
          <footer className="py-16"></footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
