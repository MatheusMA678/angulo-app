'use client'
import { Button, TextField } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';


export default function Header(){
    
    
        const [name, setName] = useState('');
      
        useEffect(() => {
          const fullName = "AnguloApp"; // Substitua pelo nome completo desejado
          let currentName = '';
          let currentIndex = 0;
      
          const interval = setInterval(() => {
            currentName += fullName[currentIndex];
            setName(currentName);
      
            currentIndex++;
      
            if (currentIndex >= fullName.length) {
              clearInterval(interval);
            }
          }, 250); // Intervalo em milissegundos entre a exibição de cada letra
      
          return () => clearInterval(interval);
        }, [])
    
    return(
        <div className=" plano-de-fundo sm:bg-cover flex flex-col  text-white sm:h-screen gap-y-4 ">
            <div className="flex flex-col items-center md:pt-20 ">
                <h1 className="font-extrabold md:text-5xl text-2xl  md:pb-10 pb-5 tracking-wider">{name}</h1>
                <h2 className="text-center text-xs md:text-base md:w-1/2 ">Uma plataforma completa para gerenciamento de ligas e torneios, simplificando a organização,      participação e acompanhamento de campeonatos. Tornamos a experiência de organizar, jogar e acompanhar competições extremamente fácil e acessível para todos os envolvidos.     
                </h2>
            </div>
            <div className=" flex justify-center md:pb-10 md:pt-10">
                <Button variant="outlined" className="border border-white md:w-1/4  text-xs md:text-sm md:p-2  text-gray-200 font-bold bg-[#0755B5] hover:bg-[#054087] hover:border-gray-200 justify-center items-center ">
                    Criar campeonato <AddIcon />
                </Button>
            </div>
            <div className="flex justify-center pb-10">
                <TextField type="text"
                    placeholder="Buscar campeonatos, eventos, tabelas... " 
                    className="rounded-md  sm:w-1/2  md:w-1/3 text-center "
                    sx={{
                        backgroundColor: 'white', // Cor do fundo branco
                        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#03A9F4'},
                    }}  
                  />
            </div>
        </div>
    )
}