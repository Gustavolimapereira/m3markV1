export default function Graficos() {
  return (
    <div className=" w-full h-full flex justify-center items-center">
      <div className="w-3/4 h-40 bg-customColorCard py-6 px-10 relative space-y-2 rounded-xl">
        <div className="flex space-x-1 justify-start items-center">
          <div
            className=" bg-gray-200 rounded-full h-2.5"
            style={{ width: '10%' }}
          ></div>
          <div
            className=" bg-red-200 rounded-full h-2.5"
            style={{ width: '60%' }}
          ></div>
          <p className="text-white pl-4">80%</p>
        </div>
        <div className="flex space-x-1 justify-start items-center">
          <div
            className=" bg-gray-200 rounded-full h-2.5"
            style={{ width: '10%' }}
          ></div>
          <div
            className=" bg-blue-200 rounded-full h-2.5"
            style={{ width: '30%' }}
          ></div>
          <p className="text-white pl-4">30%</p>
        </div>

        <div className="flex space-x-1 justify-start items-center">
          <div
            className=" bg-gray-200 rounded-full h-2.5"
            style={{ width: '10%' }}
          ></div>
          <div
            className=" bg-green-200 rounded-full h-2.5"
            style={{ width: '70%' }}
          ></div>
          <p className="text-white pl-4">100%</p>
        </div>

        <div className="flex space-x-1 justify-start items-center">
          <div
            className=" bg-gray-200 rounded-full h-2.5"
            style={{ width: '10%' }}
          ></div>
          <div
            className=" bg-gray-200 rounded-full h-2.5"
            style={{ width: '55%' }}
          ></div>
          <p className="text-white pl-4">75%</p>
        </div>
      </div>
    </div>
  )
}
