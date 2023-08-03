'use client'
import Image from "next/image"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from "next/link";

export default function Footer(){
    return(
        <div className="bg-[#020617]  ">
            <h1 className="text-center text-gray-200 md:text-3xl text-lg pt-4">Supere seus Limites: Seja Parte da Elite Esportiva!</h1>
            <div className="flex justify-center pt-4 items-center  ">
                <Link href={'#'}>
                    <div className="flex items-center border px-4 py-1 rounded-xl bg-gray-400 bg-opacity-20 ">
                        <Image
                        src='/imagens/logo-angulo.png'
                        alt='Logo Anguloapp'
                        width={40}
                        height={40}
                        
                        />
                        <p className="text-sm md:text-base text-white pl-5  ">AnguloApp</p>
                    </div>
                </Link>
            </div>
            <div className="flex justify-center">
                <div className="border-t border-gray-600 mt-10 w-2/3"></div>
            </div>
            <div className="pt-5 flex justify-center items-center flex-col">
                <p className="text-gray-400">Se junte a maior comunidade esportiva do mundo!</p>
                <div className="p-4">
                    <Link href={"https://instagram.com/anguloapp?igshid=MzRlODBiNWFlZA=="} target="blank" className="p-5">
                        <InstagramIcon className="text-white md:text-[40px] hover:text-[#3B82F6] transition-all "/>
                    </Link>
                    <Link href={"https://www.facebook.com/anguloapp"} target="blank" className="p-5"> 
                        <FacebookIcon className="text-white md:text-[40px] hover:text-[#3B82F6] transition-all"/> 
                    </Link>
                    <Link href={"https://twitter.com/anguloappsocial?s=11&t=WST2TlJI9NkefYr_Le3A3g"} target="blank" className="p-5"> 
                        <TwitterIcon className="text-white md:text-[40px] hover:text-[#3B82F6] transition-all"/> 
                    </Link>
                </div>
            </div>
            <div className="bg-gray-900 text-white p-2 text-center">© 2023 Angulo. Todos os direitos reservados.</div>
        </div>
    )
}