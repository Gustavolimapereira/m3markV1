export default function Home() {
  return (
    <div className="h-screen w-screen bg-customColor">
      <div
        className="w-1293 h-1293 bg-customColorCircle rounded-full absolute"
        style={{
          width: '1650px',
          height: '1600px',
          top: '-789px',
          right: '-789px',
          zIndex: 1,
        }}
      ></div>
      <div className="absolute h-30 w-screen bg-white  z-10 mt-20 mx-10">
        <div className="grid grid-cols-2 h-20">
          <div className="bg-red-200">
            <p>teste</p>
            <img src="./Logo M3 Mark.svg" alt="" />
          </div>
          <div className="bg-yellow-200">teste 2</div>
        </div>
      </div>
    </div>
  )
}
