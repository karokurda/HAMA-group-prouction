import { FC } from 'react'
import PageContainer from '../../PageContainer'

const PageOne: FC<{ page: number; direction: number }> = ({
  page,
  direction,
}) => {
  return (
    <PageContainer direction={direction} page={page}>
      <div className="text-3xl font-bold font-helvetica-black">
        <h2>We work all over Iraq, we believe in localizing</h2>
        <h2>brands presence respecting international and</h2>
        <h2>global standards. We are happy to go where</h2>
        <h2>our journey is.</h2>
      </div>
    </PageContainer>
  )
}

export default PageOne
