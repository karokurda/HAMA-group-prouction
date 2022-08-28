import PageOne from './Content/pages/PageOne'

const Slider = () => {
  return (
    <div className="w-full relative">
      {/* <LeftButton
        onClick={decreaseHandler}
        isActive={page > 0 ? true : false}
      />
      <RightButton
        onClick={increaseHandler}
        isActive={page < 4 ? true : false}
      /> */}

      <PageOne />
    </div>
  )
}

export default Slider
// <div
//     style={{
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//     }}
//     className="min-h-screen hidden lg:block bg-primary-gray-2 relative overflow-hidden"
//   >
//     <div style={{ zIndex: 9999 }}>
//       <LeftButton
//         isActive={page === 0 ? false : true}
//         onClick={decreaseHandler}
//       />
//       <RightButton
//         isActive={page === 4 ? false : true}
//         onClick={increaseHandler}
//       />
//     </div>
//     <div style={{ zIndex: -999 }}>
//       <Content direction={direction} page={page} />
//     </div>
//   </div>
