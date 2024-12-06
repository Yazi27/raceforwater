"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import mediaData from "./media.json";

export default function Page() {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  // Séparation des données en podcasts et audios
  const podcasts = mediaData.media.filter(item => item.type === "podcast");
  const audios = mediaData.media.filter(item => item.type === "audio");

  return (
    <main className="min-h-screen bg-blue-300 p-4 pt-[100px] md:pt-[100px] bg-bottom bg-[url('/wave.svg')] bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        {/* Titre et description */}
        <section className="bg-white ring-2 ring-black p-6 rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,0.3)] mb-8">
          <h1 className="text-3xl font-bold mb-4">Médias</h1>
          <p className="text-lg mb-4">
            Retrouvez ici nos podcasts et audios dédiés à l&apos;océan.
          </p>
          <p className="text-lg">
            Les podcasts sont au format vidéo et offrent une expérience visuelle plus immersive, tandis que les audios sont plus compacts et vous permettent d&apos;écouter des contenus informatifs où que vous soyez.
          </p>
        </section>

        {/* Podcasts - plus grands, 2 colonnes */}
        {podcasts.length > 0 && (
          <section className="bg-white ring-2 ring-black p-6 rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,0.3)] mb-8">
            <h2 className="text-2xl font-bold mb-6">Podcasts (Vidéo)</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {podcasts.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col bg-blue-50 ring-2 ring-black p-4 rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,0.2)] cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedMedia(item)}
                >
                  <div className="w-full h-56 relative mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Audios - plus petits, 3 colonnes et un format plus compact */}
        {audios.length > 0 && (
          <section className="bg-white ring-2 ring-black p-6 rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold mb-6">Audios</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {audios.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col bg-blue-50 ring-2 ring-black p-4 rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,0.2)] cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedMedia(item)}
                >
                  {/* Image plus petite */}
                  <div className="w-full h-32 relative mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Modal pour le média sélectionné */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              className="bg-white ring-2 ring-black rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,0.3)] p-6 relative max-w-2xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold mb-4">{selectedMedia.title}</h3>
              {selectedMedia.type === "podcast" ? (
                <video
                  src={selectedMedia.src}
                  controls
                  className="w-full mb-4 rounded"
                ></video>
              ) : (
                <audio
                  src={selectedMedia.src}
                  controls
                  className="w-full mb-4"
                ></audio>
              )}
              <p className="text-sm text-gray-700 mb-4">{selectedMedia.description}</p>
              <button
                onClick={() => setSelectedMedia(null)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md ring-2 ring-black shadow active:underline transition-all duration-200"
              >
                Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
