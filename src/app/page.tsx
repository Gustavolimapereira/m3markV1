import Image from 'next/image'

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
      <div className="absolute h-30 w-screen  z-10 mt-8 mx-10 bg-slate-500">
        <div className="grid grid-cols-2 h-20">
          <div className="pl-14 flex justify-start items-center">
            <Image
              src="/LogoM3Mark.png"
              width={184}
              height={50}
              alt="Capa do álbum do Drake"
            />
          </div>
          <div className=" flex justify-center items-center space-x-32">
            <a
              href="#"
              className="font-medium text-white dark:text-white-500 hover:underline font-sans font-weight-600"
            >
              Serviço
            </a>
            <a
              href="#"
              className="font-medium text-white dark:text-white-500 hover:underline"
            >
              Quem Somos
            </a>
            <a
              href="#"
              className="font-medium text-white dark:text-white-500 hover:underline"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
