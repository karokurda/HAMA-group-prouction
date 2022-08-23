import { FC } from 'react'
import Container from '../../../../layout/Container'

const items = [
  {
    title: 'ئەم فۆڕمە تەنها بە زمانی ئینگلیزی پڕ دەکرێتەوە',
  },
  {
    title:
      'لە تەنیشت هەر داواکاریەکەوە نمونەیەک هەیە کە پێت دەڵێت چۆن پڕی بکەیتەوە',
  },
  {
    title:
      'تکایە بە بەرپرسیارانە و بە زانیاری ڕاست و دروست ئەم فۆڕمە پڕ بکەرەوە',
  },
  {
    title:
      'ئەگەر دەتەوێت ببیت بە ئەستێرەی داهاتووی هاما کلیک لەسەر (Start) بکەو فۆڕمەکە پڕ بکەرەوە',
  },
]

const Kurdish = () => {
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

const ListItem: FC<{ title: string; num: number }> = ({ title, num }) => {
  return (
    <div className="flex text-xl gap-1 w-full justify-end">
      <p>{title}</p> <p className="w-max"> -{num}</p>
    </div>
  )
}

export default Kurdish
