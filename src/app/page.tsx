import Image from 'next/image'
import Graficos from '../components/graficos'

export default function Home() {
  return (
    <>
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
            <div className="flex justify-center items-center space-x-20">
              <a
                className="text-white font-bold hover:text-CustomColorOrange"
                href=""
              >
                Serviços
              </a>
              <a
                className="text-white font-bold hover:text-CustomColorOrange"
                href=""
              >
                Quem Somos
              </a>
              <a
                className="text-white font-bold hover:text-CustomColorOrange"
                href=""
              >
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
                Soluções empresariais para aumento de resultado nas redes
                sociais e na aproximação do seu público alvo.
              </p>
              <div className="space-x-10">
                <button
                  type="button"
                  className="text-black bg-customColorGreen hover:bg-green-500
                focus:ring-4 font-bold
                rounded-full py-4 px-8
                  focus:outline-none "
                >
                  Contrate agora
                </button>

                <button
                  type="button"
                  className="text-white hover:bg-customColorGreen hover:text-customColor hover:border-customColorGreen border-white border
                focus:ring-4 font-bold
                rounded-full py-4 px-8
                  focus:outline-none "
                >
                  Conheça mais
                </button>
              </div>
            </div>

            <div className="grid grid-rows-2">
              <Graficos></Graficos>
            </div>
          </div>
        </div>
      </div>
      <div className="px-32 pb-32">
        <div className="flex justify-center items-center pt-12">
          <p>Nossos Serviços</p>
        </div>
        <div className="flex justify-center items-center pt-5">
          <h1 className="text-4xl">
            Tudo o que sua empresa precisa para se destacar
          </h1>
        </div>
        <div className="flex pt-12">
          <div className="grid grid-cols-3 h-auto w-screen gap-28">
            <div>
              <div className="h-80 w-full bg-red-500 rounded-lg"></div>
              <p>Gestão de Tráfego</p>
              <p>
                Tudo para o melhor desempenho e captação de leads para sua
                empresa
              </p>
              <a href="">Saiba mais</a>
            </div>

            <div>
              <div className="h-80 w-full bg-yellow-500 rounded-lg"></div>
              <p>Produção Audiovisual</p>
              <p>Elaboração de vídeos para aproximação B2C e B2B</p>
              <a href="">Saiba mais</a>
            </div>
            <div>
              <div className="h-80 w-full bg-gray-500 rounded-lg"></div>
              <p>Designer Gráfico</p>
              <p>As melhores artes para publicidade empresarial.</p>
              <a href="">Saiba mais</a>
            </div>
          </div>
        </div>
        <div
          style={{
            height: '300px',
            width: '300px',
          }}
        ></div>
      </div>
    </>
  )
}
