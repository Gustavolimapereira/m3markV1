export default function Grafico2() {
  return (
    <div className="flex space-x-6 w-full">
      <div
        className="w-50 bg-white px-3 relative rounded-xl items-center pt-4"
        style={{ height: '340px' }}
      >
        <div className="flex">
          <div
            className="flex space-x-2.5 pl-3 mb-0"
            style={{ marginTop: '180px' }}
          >
            <div
              className=" bg-customColorBlue h-14 hover:bg-cyan-400"
              style={{ width: '10px' }}
            ></div>
            <div
              className=" bg-customColorBlue h-9 hover:bg-cyan-400"
              style={{ width: '10px' }}
            ></div>
          </div>
          <div className="flex space-x-2.5 justify-start items-end pl-2.5 pr-3 mb-14">
            <div
              className=" bg-customColorBlue h-28 hover:bg-cyan-400"
              style={{ width: '10px' }}
            ></div>
            <div
              className=" bg-customColorBlue h-20 hover:bg-cyan-400"
              style={{ width: '10px' }}
            ></div>
            <div
              className=" bg-customColor h-40 hover:bg-slate-700"
              style={{ width: '10px' }}
            ></div>
            <div
              className=" bg-customColorBlue h-24 hover:bg-cyan-400"
              style={{ width: '10px' }}
            ></div>
            <div
              className=" bg-customColorBlue h-32 hover:bg-cyan-400"
              style={{ width: '10px' }}
            ></div>
            <div
              className=" bg-customColorBlue h-16 hover:bg-cyan-400"
              style={{ width: '10px' }}
            ></div>
          </div>
        </div>
        <p className="text-customColor font-bold text-xl mt-4 pl-2.5">30%</p>
        <p className="text-customColor text-xs mt-1 pl-2.5">Mais resultados</p>
      </div>
    </div>
  )
}
