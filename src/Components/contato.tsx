'use client'
import '../app/styles.css'
import Image from "next/image";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import Link from "next/link";
import TelegramIcon from '@mui/icons-material/Telegram';
import { Button } from "@mui/material";

export default function Contato(){
    
    return(
        <div className="h-screen flex items-center">
            <div className=" flex items-center justify-center linear rounded-full md:h-[500px] h-[350px] w-[350px] md:w-[500px] md:-ml-[120px] -ml-[90px] absolute z-10 ">
                <div className=" rounded-full bg-[#020617] md:h-96 h-72 md:w-96 w-72 flex items-center justify-center ">
                    <Image
                        src={'/imagens/logo-angulo.png'}
                        alt="Logo AnguloApp"
                        width={200}
                        height={100}
                        className="photo w-1/2"
                    />
                </div>
            </div>
            <div className="h-1/2 md:h-3/5 flex relative w-full justify-center items-center azul azulao "> 
                <div className=" md:tracking-wider text-white pl-60 flex  flex-col md:items-start ">
                    <p className="font-bold text-yellow-500 pb-2 md:pb-4 text-xs md:text-sm">Precisa de esclarecimentos?</p>
                    <h1 className="md:text-4xl text-md text-white font-bold pb-2 md:pb-4 text-center">Nossa equipe está à sua disposição!</h1>
                    <p className="text-xs md:text-sm flex items-end justify-end">Conte conosco em cada etapa! </p>
                    <p className="text-xs md:text-sm text-right ">Estamos aqui para te guiar e oferecer suporte em todas as questões.</p>
                    <div className="flex gap-3 pt-6 flex-col">
                       
                        <div className="flex gap-4 md:gap-10 justify-center ">
                            <div className="flex items-center justify-center">
                                <Link href={"#"} className="hover:scale-110 transition-transform">
                                    <EmailIcon className="text-white text-3xl hover:text-[#3B82F6]"/>
                                </Link>
                            </div>
                            <div className=" flex items-center justify-center hover:scale-110 transition-transform  ">
                                <Link href={"#"} className=" " >
                                    <WhatsAppIcon className="text-white text-3xl hover:text-green-500 "/>
                                </Link>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link href={"#"} className="hover:scale-110 transition-transform">
                                    <TelegramIcon className="text-white text-3xl hover:text-[#3B82F6]"/>
                                </Link>
                            </div>
                        </div>
                        <div className="pt-4 md:pt-10">
                        <Button variant="outlined" className=" text-white text-xs md:text-base font-bold bg-[#0755B5] hover:bg-[#054087] hover:border-gray-300 justify-center items-center ">
                            Contate-nos agora mesmo!
                        </Button>
                        </div>
                    </div>
                </div>
                
            </div> 
        </div>
    )
}