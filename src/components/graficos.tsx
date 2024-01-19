export default function Graficos() {
  return (
    <div className=" w-full h-full flex justify-center items-center">
      <div className="w-3/4 h-40 bg-customColorCard py-6 px-6 relative space-y-2 rounded-xl">
        <div className="flex space-x-5 justify-start items-center">
          <div
            className=" bg-customColorGray rounded-full h-2"
            style={{ width: '15%' }}
          ></div>
          <div
            className=" bg-customColorWaterBlue rounded-full h-2"
            style={{ width: '50%' }}
          ></div>
          <p className="text-white">80%</p>
        </div>
        <div className="flex space-x-5 justify-start items-center">
          <div
            className=" bg-customColorGray rounded-full h-2"
            style={{ width: '15%' }}
          ></div>
          <div
            className=" bg-customColorBlue rounded-full h-2"
            style={{ width: '15%' }}
          ></div>
          <p className="text-white">30%</p>
        </div>

        <div className="flex space-x-5 justify-start items-center">
          <div
            className=" bg-customColorGray rounded-full h-2"
            style={{ width: '15%' }}
          ></div>
          <div
            className=" bg-white rounded-full h-2"
            style={{ width: '65%' }}
          ></div>
          <p className="text-white">100%</p>
        </div>

        <div className="flex space-x-5 justify-start items-center">
          <div
            className=" bg-customColorGray rounded-full h-2"
            style={{ width: '15%' }}
          ></div>
          <div
            className=" bg-customColorGreen rounded-full h-2"
            style={{ width: '45%' }}
          ></div>
          <p className="text-white">75%</p>
        </div>
      </div>
    </div>
  )
}
