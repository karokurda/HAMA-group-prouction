import Left from './Left'
import Right from './Right'

const MediaPlanning = () => {
  return (
    <div className="min-h-screen flex items-center flex-col lg:flex-row">
      <Left />
      <div className="h-[400px] hidden lg:flex w-px bg-gray-200" />
      <Right />
    </div>
  )
}

export default MediaPlanning
