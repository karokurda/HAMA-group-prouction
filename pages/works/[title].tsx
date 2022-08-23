import fs from 'fs'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'
import Header from '../../components/work/Header'
import { Work } from '../../types'
import Footer from '../../components/layout/Footer'
import { useRouter } from 'next/router'
import Meta from '@components/Meta'
import slugify from 'slugify'

const WorkPage: FC<{ work: Work }> = ({ work }) => {
  const router = useRouter()

  if (router.isFallback) return <></>

  return (
    <>
      <Meta
        pageTitle={work.title}
        description={`Hama production work for ${work.title}`}
        link={`/works/${work.title}`}
      />
      <div className="w-full relative">
        <Header work={work} />
        {/* <Brief /> */}
        {/* <Backstage work={work} /> */}
        <Footer />
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const works: Work[] = JSON.parse(
    fs.readFileSync('./json/works.json').toString(),
  )

  return {
    paths: works.map((item) => ({
      params: { title: slugify(item.title, { lower: true }) },
    })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = (ctx) => {
  const title = ctx.params?.title

  const works: Work[] = JSON.parse(
    fs.readFileSync('./json/works.json').toString(),
  )

  const work = works.find(
    (item) => slugify(item.title, { lower: true }) === title,
  )

  if (!work) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      work,
    },
  }
}

export default WorkPage
