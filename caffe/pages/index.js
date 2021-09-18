import Header from '../components/Header'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      {/* Head태그 - 검색엔진에(SEO)에 추가하는데 도움이 됨 */}
      <Head>
        <title>메인 - Caffe : 온라인 커피 주문</title>
      </Head>
      <Header />
      <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Caffe</h1>
        <p className="col-md-8 fs-4">온라인 주문하고 편하게 커피를 받아보세요.</p>
        <Link href="/introduce">
          <button className="btn btn-primary btn-lg" type="button">Caffe 소개</button>
        </Link>
        <Link href="/order">
          <button className="btn btn-outline-primary btn-lg ml-2" type="button">주문하기</button>
        </Link>
      </div>
    </div>
    </div >
  )
}
