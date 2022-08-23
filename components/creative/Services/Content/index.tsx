import Container from '@components/layout/Container'
import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'
import PageFive from './pages/PageFive'
import PageFour from './pages/PageFour'
import PageOne from './pages/PageOne'
import PageThree from './pages/PageThree'
import PageTwo from './pages/PageTwo'

const Content: FC<{ page: number; direction: number }> = ({
  page,
  direction,
}) => {
  return (
    <Container className="min-h-screen flex flex-col items-center">
      <AnimatePresence custom={direction} exitBeforeEnter>
        {page === 0 ? (
          <PageOne page={page} direction={direction} key={`service-page-1`} />
        ) : page === 1 ? (
          <PageTwo page={page} direction={direction} key={`service-page-2`} />
        ) : page === 2 ? (
          <PageThree page={page} direction={direction} key={`service-page-3`} />
        ) : page === 3 ? (
          <PageFour page={page} direction={direction} key={`service-page-4`} />
        ) : page === 4 ? (
          <PageFive page={page} direction={direction} key={`service-page-5`} />
        ) : null}
      </AnimatePresence>
    </Container>
  )
}

export default Content
