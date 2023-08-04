
'use client'
import '../app/styles.css'
import { Button, ButtonGroup} from '@mui/material';
import {  useState } from "react";
import React from "react";
import Cards from "./cards";



export default function Planos(){
    const [selectedPlano, setSelectedPlano] = useState('mensal'); // Estado para acompanhar o plano selecionado
    const [index, setIndex] = React.useState(0);
   

    const handleButtonClick = (plano:string) => {
      setSelectedPlano(plano); // Atualiza o estado do plano selecionado quando um botão é clicado
    };

    

    
    
  
   
    return(
        <div className='h-[120vh] plano-de-fundo2  flex  flex-col items-center'>
            <div className='flex flex-col items-center pt-6'>
                <h1 className='text-2xl md:text-5xl font-bold text-white tracking-wider'>Nossos Planos</h1>
                <h2 className="text-white md:text-lg text-xs">Apresentamos opções de planos perfeitamente adequados ao seu orçamento!</h2>
                <ButtonGroup variant="outlined" className="pb-16 pt-6"  >
                    <Button
                        className={`rounded-full ${
                            selectedPlano === 'mensal' ? 'bg-[#0b366b]' : 'bg-[#0755B5]'
                        } text-white`}
                        onClick={() => handleButtonClick('mensal')}
                        >
                        Mensal
                    </Button>
                    <Button
                        className={`rounded-full ${
                            selectedPlano === 'semestral' ? 'bg-[#0b366b]' : 'bg-[#0755B5]'
                        } text-white`}
                        onClick={() => handleButtonClick('semestral')}
                        >
                        Semestral
                    </Button>
                    <Button
                        className={`rounded-full ${
                            selectedPlano === 'anual' ? 'bg-[#0b366b]' : 'bg-[#0755B5]'
                        } text-white`}
                        onClick={() => handleButtonClick('anual')}
                        >
                        Anual
                    </Button>
                </ButtonGroup>
            </div>
            <div>
               
                <Cards selectedPlano={selectedPlano} />
               
            </div>
            
        </div>
    )
}