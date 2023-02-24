import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bùm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bùm Bùm" />
        <p className="description">
          Test nhúng link <Link href="https://google.com"><a>Google</a></Link>
          Đẹp trai không cần yêu ai, chym to không lo chết đói! <code>Bùm!</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
