export default function Graficos() {
  return (
    <div className=" w-full h-full flex flex-col justify-center items-center">
      <div className="w-3/4 h-40 bg-customColorCard px-3 relative space-y-2 rounded-xl mb-6">
        <div className="flex space-x-2.5 justify-start items-center py-4">
          <div className=" bg-customColorRed rounded-full h-2.5 w-2.5"></div>
          <div className=" bg-customColorYellow rounded-full h-2.5 w-2.5"></div>
          <div className=" bg-customColorDarkGreen rounded-full h-2.5 w-2.5"></div>
        </div>

        <div className="flex space-x-5 justify-start items-center pl-4">
          <div
            className=" bg-customColorGray rounded-full h-2"
            style={{ width: '15%' }}
          ></div>
          <div
            className=" bg-customColorWaterBlue rounded-full h-2"
            style={{ width: '50%' }}
          ></div>
          <p className="text-white text-xs">80%</p>
        </div>

        <div className="flex space-x-5 justify-start items-center pl-4">
          <div
            className=" bg-customColorGray rounded-full h-2"
            style={{ width: '15%' }}
          ></div>
          <div
            className=" bg-customColorBlue rounded-full h-2"
            style={{ width: '15%' }}
          ></div>
          <p className="text-white text-xs">30%</p>
        </div>

        <div className="flex space-x-5 justify-start items-center pl-4">
          <div
            className=" bg-customColorGray rounded-full h-2"
            style={{ width: '15%' }}
          ></div>
          <div
            className=" bg-white rounded-full h-2"
            style={{ width: '65%' }}
          ></div>
          <p className="text-white text-xs">100%</p>
        </div>

        <div className="flex space-x-5 justify-start items-center pl-4">
          <div
            className=" bg-customColorGray rounded-full h-2"
            style={{ width: '15%' }}
          ></div>
          <div
            className=" bg-customColorGreen rounded-full h-2"
            style={{ width: '45%' }}
          ></div>
          <p className="text-white text-xs">75%</p>
        </div>
      </div>

      <div className="w-48 h-40 bg-customColorCard px-3 relative rounded-xl">
        <div className="flex space-x-2.5 justify-start items-center py-4">
          <div className=" bg-customColorRed rounded-full h-2.5 w-2.5"></div>
          <div className=" bg-customColorYellow rounded-full h-2.5 w-2.5"></div>
          <div className=" bg-customColorDarkGreen rounded-full h-2.5 w-2.5"></div>
        </div>

        <div className="flex space-x-2.5 justify-start items-end pl-4">
          <div
            className=" bg-customColorBlue rounded-full h-6"
            style={{ width: '6%' }}
          ></div>
          <div
            className=" bg-customColorBlue rounded-full h-4"
            style={{ width: '6%' }}
          ></div>
          <div
            className=" bg-customColorBlue rounded-full h-16"
            style={{ width: '6%' }}
          ></div>
          <div
            className=" bg-customColorBlue rounded-full h-12"
            style={{ width: '6%' }}
          ></div>
          <div
            className=" bg-customColorGray rounded-full h-24"
            style={{ width: '6%' }}
          ></div>
          <div
            className=" bg-customColorBlue rounded-full h-16"
            style={{ width: '6%' }}
          ></div>
          <div
            className=" bg-customColorBlue rounded-full h-20"
            style={{ width: '6%' }}
          ></div>
          <div
            className=" bg-customColorBlue rounded-full h-9"
            style={{ width: '6%' }}
          ></div>
        </div>
      </div>

      <div className="w-60 h-40 bg-customColorCard px-3 relative space-y-2 rounded-xl mb-4">
        <div className="flex space-x-2.5 justify-start items-center py-4">
          <div className=" bg-customColorRed rounded-full h-2.5 w-2.5"></div>
          <div className=" bg-customColorYellow rounded-full h-2.5 w-2.5"></div>
          <div className=" bg-customColorDarkGreen rounded-full h-2.5 w-2.5"></div>
        </div>

        <div className="flex flex-col space-y-4 justify-start items-end pl-4 pt-4">
          <div
            className=" bg-customColorGray rounded-full h-2"
            style={{ width: '35%' }}
          ></div>
          <div
            className=" bg-customColorGray rounded-full h-2"
            style={{ width: '35%' }}
          ></div>
          <div
            className=" bg-customColorGray rounded-full h-2"
            style={{ width: '35%' }}
          ></div>
        </div>
      </div>
    </div>
  )
}
