export default function Grafico2() {
  return (
    <div className="flex space-x-6 w-full">
      <div
        className="w-50 bg-white px-3 relative rounded-xl items-center pt-4"
        style={{ height: '275px' }}
      >
        <div className="flex mt-2">
          <div
            className="flex space-x-2 justify-start pl-3"
            style={{ marginTop: '120px' }}
          >
            <div
              className=" bg-customColorBlue h-10 hover:bg-cyan-400"
              style={{ width: '8px' }}
            ></div>
            <div
              className=" bg-customColorBlue h-8 hover:bg-cyan-400"
              style={{ width: '8px' }}
            ></div>
          </div>
          <div className="flex space-x-2 justify-start items-end pl-2.5 pr-3 mb-10">
            <div
              className=" bg-customColorBlue h-20 hover:bg-cyan-400"
              style={{ width: '8px' }}
            ></div>
            <div
              className=" bg-customColorBlue h-14 hover:bg-cyan-400"
              style={{ width: '8px' }}
            ></div>
            <div
              className=" bg-customColor h-28 hover:bg-slate-700"
              style={{ width: '8px' }}
            ></div>
            <div
              className=" bg-customColorBlue h-20 hover:bg-cyan-400"
              style={{ width: '8px' }}
            ></div>
            <div
              className=" bg-customColorBlue h-24 hover:bg-cyan-400"
              style={{ width: '8px' }}
            ></div>
            <div
              className=" bg-customColorBlue h-12 hover:bg-cyan-400"
              style={{ width: '8px' }}
            ></div>
          </div>
        </div>
        <p className="text-customColor font-bold text-xl mt-4 pl-2.5">30%</p>
        <p className="text-customColor text-xs mt-1 pl-2.5">Mais resultados</p>
      </div>
    </div>
  )
}
