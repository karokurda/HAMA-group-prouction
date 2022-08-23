import Head from 'next/head'
import { FC } from 'react'

interface IMetaProps {
  pageTitle?: string
  description: string
  link?: string
}

const Meta: FC<IMetaProps> = ({ description, pageTitle, link = '' }) => {
  const host = 'https://www.hamaproduction.com'

  const url = `${host}${link}`

  const title = pageTitle ? `${pageTitle} | HAMA Production` : 'HAMA Production'

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="" />
    </Head>
  )
}

export default Meta
