"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen justify-center items-center flex md:pt-[88px] pt-[88px] bg-blue-300 p-4 bg-bottom bg-[url('/wave.svg')] bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        {/* Section de présentation */}
        <section className="bg-white ring-2 ring-black p-6 rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,0.3)] mb-8">
          <h1 className="text-3xl font-bold mb-4">À propos de notre projet</h1>
          <p className="text-lg mb-4">
            Notre projet vise à sensibiliser, informer et éduquer les utilisateurs 
            sur l&apos;importance de l&apos;océan et de la biodiversité marine. 
            En découvrant des faits surprenants, des quiz interactifs 
            et des illustrations uniques, vous comprendrez mieux les enjeux 
            liés à la préservation de ce milieu fascinant.
          </p>
          <p className="text-lg">
            Notre objectif est de rendre l&apos;apprentissage accessible, ludique 
            et engageant, afin que chacun puisse participer à la protection 
            des océans. Derrière ce projet se cache une équipe de passionnés 
            que nous vous présentons ci-dessous.
          </p>
        </section>

        {/* Section des contributeurs */}
        <section className="bg-white ring-2 ring-black p-6 rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,0.3)]">
          <h2 className="text-2xl font-bold mb-6">Notre équipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Carte 1 */}
            <motion.div
              className="flex flex-col items-center bg-blue-50 ring-2 ring-black p-4 rounded-lg shadow-[2px_6px_0px_rgba(0,0,0,1)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-full h-48 relative mb-4">
                <Image
                  src="/placeholder-image.jpg"
                  alt="Contributeur 1"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Bricage Yann</h3>
              <p className="mb-4 text-sm text-center text-gray-700">
                Team Leader, Développeur Front-End, UI/UX, Illustrateur
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Link
                  href="https://github.com/Yazi27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white ring-1 ring-black px-2 py-1 rounded-md hover:bg-gray-200 transition-colors duration-200"
                >
                  <FaGithub className="mr-1" />
                  <span className="text-sm font-medium">Yazi27</span>
                </Link>
                <a
                  href="mailto:yannbricage@pm.me"
                  className="inline-flex items-center bg-white ring-1 ring-black px-2 py-1 rounded-md hover:bg-gray-200 transition-colors duration-200"
                >
                  <HiOutlineMail className="mr-1" />
                  <span className="text-sm font-medium">yannbricage@pm.me</span>
                </a>
              </div>
            </motion.div>

            {/* Carte 2 */}
            <motion.div
              className="flex flex-col items-center bg-blue-50 ring-2 ring-black p-4 rounded-lg shadow-[2px_6px_0px_rgba(0,0,0,1)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-full h-48 relative mb-4">
                <Image
                  src="/placeholder-image.jpg"
                  alt="Contributeur 2"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Al Fayoumi Bilal</h3>
              <p className="mb-4 text-sm text-center text-gray-700">
                Recherche et Contenu
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Link
                  href="https://github.com/Katkoot1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white ring-1 ring-black px-2 py-1 rounded-md hover:bg-gray-200 transition-colors duration-200"
                >
                  <FaGithub className="mr-1" />
                  <span className="text-sm font-medium">Katkoot1</span>
                </Link>
                <a
                  href="mailto:belallfym@gmail.com"
                  className="inline-flex items-center bg-white ring-1 ring-black px-2 py-1 rounded-md hover:bg-gray-200 transition-colors duration-200"
                >
                  <HiOutlineMail className="mr-1" />
                  <span className="text-sm font-medium">belallfym@gmail.com</span>
                </a>
              </div>
            </motion.div>

            {/* Carte 3 */}
            <motion.div
              className="flex flex-col items-center bg-blue-50 ring-2 ring-black p-4 rounded-lg shadow-[2px_6px_0px_rgba(0,0,0,1)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-full h-48 relative mb-4">
                <Image
                  src="/placeholder-image.jpg"
                  alt="Contributeur 3"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Harchi Omar</h3>
              <p className="mb-4 text-sm text-center text-gray-700">
                Recherche et Contenu, JSON Data Management
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Link
                  href="https://github.com/omaro6527"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white ring-1 ring-black px-2 py-1 rounded-md hover:bg-gray-200 transition-colors duration-200"
                >
                  <FaGithub className="mr-1" />
                  <span className="text-sm font-medium">omaro6527</span>
                </Link>
                <a
                  href="mailto:omarharchi4@gmail.com"
                  className="inline-flex items-center bg-white ring-1 ring-black px-2 py-1 rounded-md hover:bg-gray-200 transition-colors duration-200"
                >
                  <HiOutlineMail className="mr-1" />
                  <span className="text-sm font-medium">omarharchi4@gmail.com</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
