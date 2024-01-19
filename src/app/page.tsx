import Image from 'next/image'
import Graficos from '../components/graficos'

export default function Home() {
  return (
    <div className="h-screen w-screen bg-customColor px-32 py-10">
      <div className="h-20 flex">
        <div className="w-full grid grid-cols-2">
          <div className="h-full flex justify-start items-center">
            <Image
              src="/LogoM3Mark.png"
              width={184}
              height={50}
              alt="logo M3 Mark"
            />
          </div>
          <div className="flex justify-center items-center space-x-40">
            <a className="text-white font-bold" href="">
              Serviços
            </a>
            <a className="text-white font-bold" href="">
              Quem Somos
            </a>
            <a className="text-white font-bold" href="">
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
      <div className=" flex mt-14 ">
        <div className="grid grid-cols-2">
          <div className="h-auto space-y-10 p-16">
            <h1 className="text-5xl font-bold tracking-tight text-white ">
              Aumente a performance da sua empresa
            </h1>
            <p className="text-white">
              Soluções empresariais para aumento de resultado nas redes sociais
              e na aproximação do seu público alvo.
            </p>
            <div className="space-x-10">
              <button
                type="button"
                className="text-black bg-customColorButton hover:bg-green-800 
                focus:ring-4 font-bold
                rounded-3xl py-4 px-8
                  focus:outline-none "
              >
                Contrate agora
              </button>

              <button
                type="button"
                className="text-white hover:bg-customColorButton border-white border
                focus:ring-4 font-bold
                rounded-3xl py-4 px-8
                  focus:outline-none "
              >
                Conheça mais
              </button>
            </div>
          </div>

          <div className="grid grid-rows-2">
            <Graficos></Graficos>
            <div className=" flex justify-center items-center space-x-5">
              <Image
                className="rounded-2xl"
                src="/grafico1.png"
                width={184}
                height={50}
                alt="logo M3 Mark"
              />
              <Image
                className="rounded-2xl"
                src="/grafico2.png"
                width={250}
                height={250}
                alt="logo M3 Mark"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
