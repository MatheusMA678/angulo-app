import '../app/styles/styles.css'
import Link from "next/link"

export default function Noticias(){

    
    return(
        
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold p-6">Fique Atualizado com o AnguloApp</h1>
            <div className="h-full p-4 grid grid-cols-4  gap-2 w-4/5">
                <div className="chuteira col-span-2 rounded-md text-white transform transition-transform hover:scale-[1.01]">
                    <Link href={"#"}>
                        <div className="flex flex-col h-full justify-end p-10  ">
                            <div className="pb-5">
                                <h1 className=' font-bold text-3xl font-sans uppercase'>Craques da Paz vence Madureira e é Campeão   Sub-13
                                </h1>
                            </div>
                            <div >
                               <ul className="list-disc">
                                    <li className="">Promessa do futsal regional se destaca na competição.</li>
                                    <li>Desempenho brilhante garante vitória merecida.</li>
                               </ul>
                            </div>
                        </div>
                    </Link>
                </div>
        
                <div className=" grid col-span-2 gap-2">
                    <div className="rounded-md campeao transform transition-transform hover:scale-[1.01]">
                        <Link href={"#"}>
                            <div className="flex flex-col h-full justify-end p-10  ">
                                <div className="pb-5 text-white">
                                    <h1 className='font-bold text-3xl uppercase'>A bola do sucesso nas Ligas: Venha fazer história com o AnguloApp!
                                    </h1>
                                </div>
                                <div >
                                   <ul className="list-disc text-white">
                                        <li className="">Simplifique a gestão de ligas com o AnguloApp.</li>
                                        <li>Maior comunidade esportiva do mundo.</li>
                                   </ul>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="rounded-md bg-futsal transform transition-transform hover:scale-[1.01] ">
                        <Link href={"#"}>
                            <div className="flex flex-col h-full justify-end p-10  ">
                                <div className="">
                                    <h1 className=' font-bold text-3xl text-white uppercase'>A Liga está prestes a começar: Prepare-se para a emoção
                                    </h1>
                                </div>
                                <div >
                                   <ul className="list-disc text-white">
                            
                                        <li>Competidores se preparam intensamente para a jornada emocionante da Liga, buscando a vitória e superando desafios.</li>
                                   </ul>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}