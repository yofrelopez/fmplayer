import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Layout } from '../components/Layout'
import { FmPlayer } from '../components/reproductor/FmPlayer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <Layout>
        <FmPlayer />
      </Layout>
  )
}
