'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar(){
    const [menuOpen, setMenuOpen]=useState(false)
    

  
      useEffect(() => {
        const handleClickOutsideMenu = (event:any) => {
          const menu = document.getElementById('menu');
          if (menu && !menu.contains(event.target)) {
            setMenuOpen(false);
          }
        };
    
        if (menuOpen) {
          document.addEventListener('click', handleClickOutsideMenu);
        }
    
        return () => {
          document.removeEventListener('click', handleClickOutsideMenu);
        };
      }, [menuOpen]);
    
    return(
        <div>
            <div className="bg-slate-950">
                <nav className="bg-slate-950 flex items-center text-[#EAEAEA] h-28 md:justify-evenly justify-between px-4">
                    <div className="flex items-center gap-4 ">
                        <Image src="/imagens/logo-angulo.png" alt="Logo Anguloapp" width={70} height={70} />
                    </div>
                    <div className="hidden sm:flex sm:gap-1 sm:text-[10px] md:text-sm gap-5 items-center h-full" id="menu">
                        <a href="#" className="p-2 hover:text-[#03A9F4] transition duration-500 uppercase">Campeonatos</a>
                        <a href="#" className="p-2 hover:text-[#03A9F4] transition duration-500 uppercase">Características</a>
                        <a href="#" className=" p-2 hover:text-[#03A9F4] transition duration-500 uppercase">Fale conosco</a>
                        <a href="#" className=" p-2 hover:text-[#03A9F4] transition duration-500 uppercase">Planos</a>
                        <a href="#" className=" p-2 hover:text-[#03A9F4] transition duration-500 uppercase">Sobre nós</a>
                        <Button variant="outlined" className="sm:text-[10px] text-sm   text-[#EAEAEA] border-[#EAEAEA] hover:border-[#03A9F4] hover:text-[#03A9F4]">
                            Entrar
                        </Button>
                    </div>
                    <div className="flex sm:hidden items-center h-full">
                        <Button variant="outlined" className="text-[#EAEAEA] border-[#EAEAEA] hover:border-[#03A9F4] hover:text-[#03A9F4]" onClick={() => setMenuOpen(!menuOpen)}>
                            <MenuIcon />
                        </Button>
                        
                        {menuOpen && (
                            <div className="absolute top-0 right-0  w-full bg-slate-950 transition-all ease-out duration-1000">
                                <div className="flex flex-col items-center  gap-3 p-4">
                                    <a href="#" className="hover:text-[#03A9F4] transition duration-500 uppercase">Características</a>
                                    <a href="#" className="hover:text-[#03A9F4] transition duration-500 uppercase">Campeonatos</a>
                                    <a href="#" className="hover:text-[#03A9F4] transition duration-500 uppercase">Fale conosco</a>
                                    <a href="#" className="hover:text-[#03A9F4] transition duration-500 uppercase">Planos</a>
                                    <a href="#" className="hover:text-[#03A9F4] transition duration-500 uppercase">Sobre nós</a>
                                    <Button variant="outlined" className="text-[#EAEAEA] border-[#EAEAEA] hover:border-[#03A9F4] hover:text-[#03A9F4]">
                                        Entrar
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
}
  
   
