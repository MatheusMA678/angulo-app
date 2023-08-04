
'use client'
import '../app/styles/style.css'
import { Button,  CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import React from "react";

export default function Cards({selectedPlano}:any){
    const [currentIndex, setCurrentIndex] = useState(0);
   
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
    }
    
    
    return(
        <div>

            <div className='gap-10 flex '>        
                <Card className='hidden md:block  w-[300px] border-2 hover:border-4 hover:border-yellow-500 transition duration-1000 ease-out border-[#0755B5] p-4 rounded-2xl '>
                    <h1 className='text-2xl text-center font-bold pb-3'> Plano Prata</h1>
                    <div className='flex items-center justify-center' >
                        <CardMedia
                            sx={{ height: 80 , width:80}}
                            image="/imagens/medalha.png"
                            title="green iguana"
                        />
                    </div>
                    <div className='flex p-6 justify-center'>
                        {selectedPlano === 'mensal' && (
                            // Conteúdo para o plano mensal
                            <div className="flex">
                                <h3 className='text-2xl font-bold text-black '>R$:19,90</h3>
                                <p className="text-md text-gray-500 flex items-end">/Mês</p>
                            </div>
                            )}
                            {selectedPlano === 'semestral' && (
                            // Conteúdo para o plano semestral
                            <div className="flex">
                                <h3 className='text-2xl font-bold text-black '>R$:17,99</h3>
                                <p className="text-md text-gray-500 flex items-end">/Mês</p>
                            </div>
                            )}
                            {selectedPlano === 'anual' && (
                            // Conteúdo para o plano anual

                            <div className="flex flex-col">
                                <div className="flex">
                                    <h3 className='text-2xl font-bold '>R$:14,99</h3>
                                    <p className='text-gray-600 flex items-end'>/Mês</p>
                                </div>
                                <p className="text-gray-400 text-xs">De R$215,80 por R$179,80</p>
                            </div>
                        )}
                    </div>
                    <div className="text-sm">
                        <ol>
                            <li><CheckIcon className="text-[#3B82F6]"/> Gerencie torneios com até 600 jogadores</li>
                            <li><CheckIcon className="text-[#3B82F6]"/>Aceite até 6 patrocinadores por torneio</li>
                            <li><CheckIcon className="text-[#3B82F6]"/>Experiência livre de propagandas nos torneios</li>
                            <li><CheckIcon className="text-[#3B82F6]"/> Organize torneios ilimitados</li>
                        </ol>
                    </div>
                    <div className=" flex justify-center pt-10">
                        <Button variant="outlined" className=" text-white font-bold bg-[#0755B5] hover:bg-[#054087] hover:border-gray-300 justify-center items-center ">
                            Assinar Plano
                        </Button>
                    </div>
                </Card>
                <div className="md:hidden flex items-center  ">
                    <button className="text-white bg-[#3B82F6] rounded-full p-1  flex transition duration-500 ease-out transform hover:scale-125" onClick={handlePrev}>
                        <ArrowBackIosNewIcon />
                    </button>
                </div>
                <Card className='w-[300px] border-2 hover:border-4 hover:border-yellow-500 transition duration-1000 ease-out border-[#0755B5] p-4 rounded-2xl -mt-[25px] '>
                    <h1 className='text-2xl text-center font-bold pb-3'> Plano Ouro</h1>
                    <div className='flex items-center justify-center'>
                        <div className='flex items-center justify-center'>
                            <CardMedia
                                sx={{ height: 80 , width:80}}
                                image="/imagens/trofeu.png"
                                title="green iguana"
                            />
                        </div>
                    </div>
                    <div className='flex p-6 justify-center'>
                        {selectedPlano === 'mensal' && (
                            // Conteúdo para o plano mensal
                            <div className="flex">
                                <h3 className='text-2xl font-bold text-black '>R$:25,90</h3>
                                <p className="text-md text-gray-500 flex items-end">/Mês</p>
                            </div>
                            )}
                            {selectedPlano === 'semestral' && (
                            // Conteúdo para o plano semestral
                            <div className="flex">
                                <h3 className='text-2xl font-bold text-black '>R$:22,90</h3>
                                <p className="text-md text-gray-500 flex items-end">/Mês</p>
                            </div>
                            )}
                            {selectedPlano === 'anual' && (
                            <div className="flex flex-col">
                                <div className="flex">
                                    <h3 className='text-2xl font-bold '>R$:19,99</h3>
                                    <p className='text-gray-600 flex items-end'>/Mês</p>
                                </div>
                                <p className="text-gray-400 text-xs">De R$310,80 por R$239,80</p>
                            </div>
                        )}

                    </div>
                    <div className="text-sm">
                        <ol>
                            <li><CheckIcon className="text-[#3B82F6]"/> Gerencie torneios com até 600 jogadores</li>
                            <li><CheckIcon className="text-[#3B82F6]"/>Aceite até 6 patrocinadores por torneio</li>
                            <li><CheckIcon className="text-[#3B82F6]"/>Experiência livre de propagandas nos torneios</li>
                            <li><CheckIcon className="text-[#3B82F6]"/> Organize torneios ilimitados</li>
                        </ol>
                    </div>
                    <div className=" flex justify-center pt-10">
                        <Button variant="outlined" className=" text-white font-bold bg-[#0755B5] hover:bg-[#054087] hover:border-gray-300 justify-center items-center ">
                            Assinar Plano
                        </Button>
                    </div>
                </Card>
                <div className=" md:hidden flex items-center justify-center">
                    <button className="text-white bg-[#3B82F6] rounded-full p-1  flex transition duration-500 ease-out transform hover:scale-125" onClick={handleNext}>
                        <ArrowForwardIosIcon />
                    </button>
                </div>
                <Card className='hidden md:block w-[300px] border-2 hover:border-4 hover:border-yellow-500 transition duration-1000 ease-in-out border-[#0755B5] p-4 rounded-2xl '>
                    <h1 className='text-2xl text-center font-bold pb-3'> Plano Premium</h1>
                    <div className='flex items-center justify-center '>
                        <CardMedia
                            sx={{ height: 80 , width:80}}
                            image="/imagens/diamante.png"
                            title="diamante"
                        />
                    </div>
                    <div className='flex p-6 justify-center'>
                        {selectedPlano === 'mensal' && (
                            // Conteúdo para o plano anual
                            <div className="flex">
                                <h3 className='text-2xl font-bold text-black '>R$:31,90</h3>
                                <p className="text-md text-gray-500 flex items-end">/Mês</p>
                            </div>
                            )}
                            {selectedPlano === 'semestral' && (
                            // Conteúdo para o plano semestral
                            <div className="flex">
                                <h3 className='text-2xl font-bold text-black '>R$:29,90</h3>
                                <p className="text-md text-gray-500 flex items-end">/Mês</p>
                            </div>
                            )}
                            {selectedPlano === 'anual' && (
                            <div className="flex flex-col">
                                <div className="flex">
                                    <h3 className='text-2xl font-bold '>R$:27,90</h3>
                                    <p className='text-gray-600 flex items-end'>/Mês</p>
                                </div>
                                <p className="text-gray-400 text-xs">De R$454,80 por R$334,80</p>
                            </div>
                        )}
                    </div>
                    <div className="text-sm">
                        <ol>
                            <li><CheckIcon className="text-[#3B82F6]"/> Gerencie torneios com até 600 jogadores</li>
                            <li><CheckIcon className="text-[#3B82F6]"/>Aceite até 6 patrocinadores por torneio</li>
                            <li><CheckIcon className="text-[#3B82F6]"/>Experiência livre de propagandas nos torneios</li>
                            <li><CheckIcon className="text-[#3B82F6]"/> Organize torneios ilimitados</li>
                        </ol>
                    </div>
                    <div className=" flex justify-center pt-10">
                        <Button variant="outlined" className=" text-white font-bold bg-[#0755B5] hover:bg-[#054087] hover:border-gray-300 justify-center items-center ">
                            Assinar Plano
                        </Button>
                    </div>
                </Card>    
            </div>
          
        </div>
    )
}


