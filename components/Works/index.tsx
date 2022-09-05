import { useRef, useState } from 'react'
import Container from '../layout/Container'
import { useHoverDirty } from 'react-use'
import ImageItem from './ImageItem'
import workItems from '../../json/works.json'
import Underline from '@components/Underline'

const Works = () => {
  const [works, setWorks] = useState<typeof workItems>(workItems.slice(0, 8))

  const ref = useRef(null)
  const hovered = useHoverDirty(ref)

  const seeMoreHandler = () => {
    setWorks(workItems)
  }

  return (
    <div className="min-h-screen bg-primary-gray-1 text-white " id="back">
      <Container>
        <div>
          <div className="sm:hidden mt-5 uppercase font-helvetica-condensed text-3xl "  >
            <h2>Our</h2>
            <h2>Work</h2>
            <Underline color="yellow" />
          </div>
          <div className="w-full mt-10 grid py-5 grid-cols-2 lg:grid-cols-3" >
            <div
              ref={ref}
              className="sm:flex md:p-10 hidden justify-center items-center border-8 border-primary-yellow-1"
             
            >
              <div className="flex uppercase font-Helvetica-bold flex-col hover:text-primary-yellow-1 duration-200 cursor-pointer font-extrabold text-xl sm:text-5xl xl:text-6xl">
                <p>Our</p>
                <p>Work</p>
                <div
                  className={`h-1 sm:h-2 duration-200 mt-3 bg-primary-yellow-1 ${
                    hovered ? 'w-20' : 'w-10'
                    
                  }`}
                />
              </div>
            </div>
            {works.map((item) => (
              
              <ImageItem key={item.img} img={item.img} title={item.title}  />
            ))}
          </div>
          {works.length < workItems.length && (
            <div className="flex justify-center mt-10 w-full">
              <button
                onClick={seeMoreHandler}
                className="border-4 font-Helvetica-bold w-full lg:w-max text-primary-yellow-1 border-primary-yellow-1 font-bold px-20 py-3 hover:bg-primary-yellow-1 hover:text-white duration-200 uppercase text-xs sm:text-lg"
               
              >
                More
              </button>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}


export default Works
