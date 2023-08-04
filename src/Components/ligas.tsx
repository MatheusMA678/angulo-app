'use client'
import React, { useEffect, useState } from "react";
import "./styles/globals.css";
import Image from "next/image";

export default function Ligas() {
  const images = [
    "basquete.jpg",
    "futebol.jpg",
    "futsal.jpg",
    "hand.jpg",
    "sports.jpg"
    // Adicione mais imagens aqui
  ];

  const texts = [
    "Domine o Tablado do Basquete com a Melhor Plataforma de Gestão de LigasDomine o Tablado do Basquete com a Melhor Plataforma de Gestão de Ligas.",
    "Faça Gols e Conquiste Títulos com o AnguloApp - Sua Plataforma de Futebol Imbatível.",
    "Futsal de Elite - Organize seus Campeonatos com o AnguloApp.",
    "Mire no Gol, Supere os Desafios - Gerencie Seus Torneios de Handebol com o AnguloApp.",
    "Drible os Desafios com o AnguloApp! A Solução Completa para Organização de Campeonatos de Futebol."
  ];


  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Muda a imagem a cada 5 segundos (5000 milissegundos)

    return () => clearInterval(slideshowInterval);
  }, []);

  const currentImage = images[currentImageIndex];
  const currentText = texts[currentImageIndex];
  const isLastSlide = currentImageIndex === images.length - 1;

  return (
    <div
      className="custom-shape md:h-screen relative "
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url("/imagens/${currentImage}")` }} // Use o caminho relativo apenas até a pasta "public"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        
    
        <h1 className="text-4xl text-white font-bold">{currentText}</h1>
        {isLastSlide && (
          <div className="flex w-1/2 items-center justify-center p-2 gap-5 bg-gray-300 bg-opacity-20  mt-5 rounded-md mx-auto">
              <div className="">
                  <Image src='/imagens/logo-angulo.png'
                  alt="Logo da Empresa"
                  width={100}
                  height={100}
                  
                  />
              </div>
              <div>
                  <h1 className="text-3xl text-white font-bold ">AnguloApp</h1>
              </div>
          </div>
        )}
  </div>
    </div>
  );
}