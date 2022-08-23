import Container from '@components/layout/Container'
import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'

const Content: FC<{ page: number; direction: number }> = ({
  page,
  direction,
}) => {
  return (
    <Container className="min-h-screen flex flex-col items-center">
      <AnimatePresence custom={direction} exitBeforeEnter>
        {page === 0 ? (
          <PageOne
            key={`production-slider-1`}
            page={page}
            direction={direction}
          />
        ) : page === 1 ? (
          <PageTwo
            key={`production-slider-2`}
            page={page}
            direction={direction}
          />
        ) : null}
      </AnimatePresence>
    </Container>
  )
}

export default Content
