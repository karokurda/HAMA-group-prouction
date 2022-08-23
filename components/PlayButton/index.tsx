import { IoMdPlay } from 'react-icons/io'

const PlayButton = () => {
  return (
    <div className="bg-primary-orange-1 hover:shadow-lg cursor-pointer hover:shadow-primary-orange-1 duration-200 flex justify-center items-center p-10 w-max">
      <IoMdPlay className="text-white" size={34} />
    </div>
  )
}

export default PlayButton
