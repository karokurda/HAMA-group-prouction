import { FC } from 'react'
import PageContainer from '../../PageContainer'

const PageTwo: FC<{ page: number; direction: number }> = ({
  page,
  direction,
}) => {
  return (
    <PageContainer page={page} direction={direction}>
      Page two
    </PageContainer>
  )
}

export default PageTwo
