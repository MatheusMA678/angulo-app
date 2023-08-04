import Image from "next/image";
import CheckIcon from '@mui/icons-material/Check';
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function Features(){
    return(
      
            <div className="flex md:h-screen ">
                <div className= " xs:w-1/4 sm:w-1/4 md:w-1/2 flex justify-center items-center">
                    <div className="img hidden md:flex">
                        <Image
                            src='/imagens/tablet.png'
                            width={1000}
                            height={100}
                            alt={"imagem celular e tablet"}
                            className="-rotate-12 "
                        />
                    </div>
                    
                </div>
                <div className="xs:w-3/4 md:w-1/2 flex items-center text-center flex-col p-4 justify-center">
                    <h1 className="md:text-2xl font-bold">Conquiste a Excelência na Gestão do Seu Campeonato com a Melhor Comunicação e Facilidade!</h1>
                    <h2 className="mt-2 text-xs md:text-sm">Apresentando o AnguloApp - Sua Solução Completa para Organização de Campeonatos e Ligas Esportivas!</h2>
                    <div className="grid grid-cols-2 gap-4 mt-4  items-center ">
                        <div className="col-span-2  ">
                            <p className="ident-8 text-justify text-xs md:text-sm">O principal objetivo do AnguloApp é simplificar e aprimorar a gestão integral de campeonatos e ligas esportivas. Com uma interface intuitiva e recursos avançados, o aplicativo oferece aos organizadores a possibilidade de criar tabelas, gerenciar rodadas, acompanhar artilharias, rankings e muito mais. </p>
                        </div>
                        <div className="hidden md:flex items-center justify-center sm:w-1/2 ">
                            <Image
                                src='/imagens/logo-angulo.png'
                                width={200}
                                height={100}
                                alt={"logo angulo"}
                                className=""
                            />
                            <p className="text-sm md:text-2xl  font-bold text-gray-800">AnguloApp</p>
                        </div>
                        <div className="text-start font-bold md:text-sm text-xs">
                           <ul >
                                <li> <CheckIcon className="text-[#3B82F6]"/> Imprima súmula das partidas.</li>
                                <li><CheckIcon className="text-[#3B82F6]"/> Estatísticas das partidas.</li>
                                <li><CheckIcon className="text-[#3B82F6]"/> Formulário de inscrição das equipes.</li>
                                <li><CheckIcon className="text-[#3B82F6]"/> Estatísticas das partidas.</li>
                                <li><CheckIcon className="text-[#3B82F6]"/> Tabelas, Rankings e muito mais.</li>
                           </ul>
                        </div>
                        <div className="flex justify-center md:hidden  ">
                            <Image
                                src='/imagens/cel.png'
                                width={150}
                                height={100}
                                alt={"imagem celular e tablet"}
                                
                            />
                        </div>
            
                    </div>
                    <div className="md:mt-10 flex items-center">
                        <Button variant="outlined" className="border border-white  text-gray-200 font-bold bg-[#0755B5] hover:bg-[#054087] hover:border-gray-300 justify-center md:p-2 items-center ">
                        Criar campeonato <AddIcon />
                        </Button>
                    </div>
                </div>
            </div>
       
    )
}