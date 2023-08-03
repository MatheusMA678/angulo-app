import Planos from '@/Components/planos'
import Features from '@/Components/features'
import Header from '@/Components/header'
import Ligas from '@/Components/ligas'
import Navbar from '@/Components/navbar'
import Image from 'next/image'
import Footer from '@/Components/footer'
import Sobre from '@/Components/sobre'
import Contato from '@/Components/contato'
import Noticias from '@/Components/noticias'


export default function Home() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Features/>
            <Ligas/>
            <Planos/>
            <Sobre/>
            <Noticias/>
            <Contato/>
            <Footer/>
        </div>  
    )
}
