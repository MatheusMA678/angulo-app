import Planos from '@/components/planos'
import Features from '@/components/features'
import Header from '@/components/header'
import Ligas from '@/components/ligas'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Sobre from '@/components/sobre'
import Contato from '@/components/contato'
import Noticias from '@/components/noticias'


export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <Features />
            <Ligas />
            <Planos />
            <Sobre />
            <Noticias />
            <Contato />
            <Footer />
        </div>
    )
}
