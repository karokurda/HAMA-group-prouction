import { FC } from 'react'
import Container from '../../../../layout/Container'

const items = [
  {
    title: 'یرجی ملئ الاستمارة بللغة الانکلیزیة فقط',
  },
  {
    title: 'هناك نموذج شرح في کل فقرة مطلوبة',
  },
  {
    title: 'یرجی ملئ الاستمارة بمسؤولیة وبمعلومات صحیح',
  },
  {
    title: [
      'وابدأ بملئ اذا کنت ترید ان تصبح نجم هاما التالي، اضغط زر',
      'Start',
      'الاستمارة',
    ],
  },
]

const Arabic = () => {
  return (
    <Container className="lg:w-1/2 w-full">
      <div className="flex flex-col items-end">
        <h2 className="text-4xl font-extrabold font-helvetica-black text-right">
          ڕێنمایی
        </h2>
        <div className="h-[6px] justify-self-end w-10 bg-white mt-3" />
      </div>

      <div className="mt-10 text-2xl font-bold font-helvetica-black flex flex-col gap-5">
        {items.map((item, index) => (
          <ListItem title={item.title} key={index} num={index + 1} />
        ))}
      </div>
    </Container>
  )
}

const ListItem: FC<{ title: string | string[]; num: number }> = ({
  title,
  num,
}) => {
  return (
    <div className="flex text-xl gap-1 w-full justify-end">
      {typeof title === 'string' ? (
        <p>{title}</p>
      ) : (
        title.map((t, _idx) => <p key={_idx}>{t}</p>)
      )}
      {/* <p>{typeof title === 'string' ? title : title.join(' ')}</p> */}
      <p className="w-max"> -{num}</p>
    </div>
  )
}

export default Arabic
