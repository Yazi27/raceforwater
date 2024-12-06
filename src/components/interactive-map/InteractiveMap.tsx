"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import organData from "./organData.json";

type OrganKey = keyof typeof organData;

interface OrganInfo {
  title: string;
  description: string;
  oceanAnalogy: string;
  oceanLink: string;
  image: string;
}

export default function InteractiveMap() {
  const [selectedOrgan, setSelectedOrgan] = useState<OrganKey | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOrganClick = (organ: OrganKey) => {
    if (isMobile) {
      // Sur mobile : clic ouvre le modal
      setSelectedOrgan(organ);
      setShowModal(true);
    } else {
      // Sur desktop : clic sélectionne l'organe et le garde affiché
      setSelectedOrgan(organ);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col content-center justify-center items-center p-4">
      <header className="flex items-center space-x-4 p-4 w-full max-w-7xl mx-auto mb-6">
        <Link href="/">
          <button className="text-left bg-blue-600 hover:bg-blue-500 ring-2 ring-black text-white text-xl font-bold py-3 px-4 rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,0.3)] hover:shadow-[7px_7px_0px_black] transition-all duration-300">
            Retour Accueil
          </button>
        </Link>
        <h1 className="text-2xl text-center w-full text-gray-700 font-bold">
          Interactive Ocean/Human map
        </h1>
      </header>

      <div className="w-full h-full flex items-center justify-center flex-col md:flex-row p-4">
        {isMobile ? (
          // Sur mobile : une grille d'organes centrés
          <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto">
            {Object.keys(organData).map((organKey) => {
              const oKey = organKey as OrganKey;
              const organ: OrganInfo = organData[oKey];
              return (
                <div
                  key={oKey}
                  className="bg-white ring-2 ring-black p-4 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer"
                  onClick={() => handleOrganClick(oKey)}
                >
                  <Image
                    src={organ.image}
                    alt={organ.title}
                    width={50}
                    height={50}
                    className="object-contain mb-2"
                  />
                  <p className="text-sm font-bold text-center">{organ.title}</p>
                </div>
              );
            })}
          </div>
        ) : (
          // Sur desktop : image du corps humain + organes, sélection par clic
          <>
            <div className="relative flex-1 max-w-[500px] w-full">
              <div className="w-full">
                <Image
                  src="/human-body.png"
                  alt="Corps Humain"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>

              {/* Coeur */}
              <div
                className="absolute z-10 cursor-pointer"
                style={{
                  top: "25%",
                  left: "55%",
                  width: "50px",
                  height: "50px",
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => handleOrganClick("coeur")}
              >
                <Image
                  src="/heart.png"
                  alt="Cœur"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* Foie */}
              <div
                className="absolute z-10 cursor-pointer"
                style={{
                  top: "40%",
                  left: "50%",
                  width: "60px",
                  height: "60px",
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => handleOrganClick("foie")}
              >
                <Image
                  src="/liver.png"
                  alt="Foie"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* Poumon */}
              <div
                className="absolute z-10 cursor-pointer"
                style={{
                  top: "25%",
                  left: "46%",
                  width: "30px",
                  height: "59px",
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => handleOrganClick("poumon")}
              >
                <Image
                  src="/lung.png"
                  alt="Poumons"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>

              {/* Cerveau */}
              <div
                className="absolute z-10 cursor-pointer"
                style={{
                  top: "9%",
                  left: "50%",
                  width: "40px",
                  height: "59px",
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => handleOrganClick("brain")}
              >
                <Image
                  src="/brain.png"
                  alt="Cerveau"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="hidden md:flex flex-col justify-center items-start w-1/3 bg-white ring-2 ring-black p-6 rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,0.3)] ml-4">
              {selectedOrgan ? (
                <div>
                  <h2 className="text-xl font-bold mb-2">
                    {organData[selectedOrgan].title}
                  </h2>
                  <p className="text-sm text-gray-700 mb-4">
                    {organData[selectedOrgan].description}
                  </p>
                  <p className="text-sm text-gray-700 mb-2 italic">
                    {organData[selectedOrgan].oceanAnalogy}
                  </p>
                  <a
                    href={organData[selectedOrgan].oceanLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline text-sm"
                  >
                    En savoir plus sur le lien avec l&apos;océan
                  </a>
                </div>
              ) : (
                <p className="text-gray-500">
                  Cliquez sur un organe pour voir plus d&apos;informations
                </p>
              )}
            </div>
          </>
        )}

        {/* Modal sur mobile */}
        {isMobile && showModal && selectedOrgan && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex content-center items-center h-full justify-center p-4 z-50"
            onClick={() => setShowModal(false)}
          >
            <div
              className="bg-white ring-2 ring-black rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,0.3)] p-6 relative max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-2">
                {organData[selectedOrgan].title}
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                {organData[selectedOrgan].description}
              </p>
              <p className="text-sm text-gray-700 mb-2 italic">
                {organData[selectedOrgan].oceanAnalogy}
              </p>
              <a
                href={organData[selectedOrgan].oceanLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline text-sm block mb-4"
              >
                En savoir plus sur le lien avec l&apos;océan
              </a>
              <button
                onClick={() => setShowModal(false)}
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded ring-2 ring-black hover:bg-blue-700"
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
