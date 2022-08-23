import Underline from '../../Underline'

const SectionTwo = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url(https://hama-group.s3.eu-central-1.amazonaws.com/images/ryan-stefan-473230-unsplash+copy.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="min-h-screen flex justify-center items-center px-5"
    >
      <div className="lg:p-16 p-5 font-bold font-Helvetica-bold bg-white w-full max-w-lg text-[1.3rem] lg:text-[1.9rem]">
        <p className="leading-tight">
          We have extensive media integration experience along the full spectrum
          of budget sizes. We also have best-in-class partners in the industry
          and the insider knowledge of where to most efficiently source
          inventory for each channel.
        </p>
        <Underline color="purple" />
      </div>
    </div>
  )
}

export default SectionTwo
