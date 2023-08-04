'use client'
import { Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Sobre(){
    
    const [name, setName] = useState('');
      
        useEffect(() => {
          const fullName = "Torne-se um Campeão do Gerenciamento com o AnguloApp!"; // Substitua pelo nome completo desejado
          let currentName = '';
          let currentIndex = 0;
      
          const interval = setInterval(() => {
            currentName += fullName[currentIndex];
            setName(currentName);
      
            currentIndex++;
      
            if (currentIndex >= fullName.length) {
              clearInterval(interval);
            }
          }, 70); // Intervalo em milissegundos entre a exibição de cada letra
      
          return () => clearInterval(interval);
        }, [])
    
    return(
        
            
        <div className=" flex flex-col max-h-screen">
            <div className=" flex flex-col  items-center">
                <div className="-mt-[28px] bg-white md:w-2/3 rounded-lg flex flex-col justify-center shadow-gradient md:h-[200px] h-[200px] w-2/3">
                    <h1 className=" md:text-3xl text-center font-bold text-gray-900">{name}</h1>
                    <h2 className="text-center text-gray-500 md:p-6 p-2 text-xs md:text-sm">Se junte a maior comunidade esportiva do mundo.</h2>
                    <div className="flex justify-center items-center ">
                        <Button variant="outlined" className="w-1/2 text-gray-300 text-[10px] md:text-xs font-bold bg-[#0755B5] hover:bg-[#054087] hover:border-gray-300 md:p-2 ">
                            Juntar-se a comunidade
                        </Button>
                    </div>
                </div>
            </div>
            <div className=" flex items-center h-screen md:pt-10">
                <div className=" w-2/5 flex justify-center ">
                    <div className="flex items-center pl-4">
                        <Image src='/imagens/estadioum.jpg'
                        alt="Logo da Empresa"
                        width={300}
                        height={100}
                        className="rounded-xl"
                        />
                    </div>
                </div>
                <div className="w-3/5 md:p-8 p-4">
                    <h3 className="md:text-4xl text-xl font-semibold">Sobre nós</h3>
                    <div className="mt-6">
                    <p className="mb-6 text-xs md:text-base">Somos uma plataforma completa e intuitiva, dedicada ao gerenciamento de campeonatos esportivos. Com o AnguloApp, oferecemos a melhor experiência para organizadores, atletas e torcedores, proporcionando momentos inesquecíveis no mundo do esporte.</p>

                    <p className="mb-6 text-xs md:text-base">Nossa missão é simplificar e aprimorar a gestão de competições esportivas, fornecendo ferramentas poderosas e eficientes para que você possa criar e administrar torneios de forma descomplicada.</p>

                    <p className="text-xs md:text-base" >Junte-se a nós e faça parte da maior comunidade esportiva do mundo. Vamos construir, juntos, uma jornada de sucesso no universo esportivo. Seja bem-vindo ao AnguloApp, onde o esporte ganha vida!</p>
                    </div>
                </div>
            </div>
        </div>

    );
}