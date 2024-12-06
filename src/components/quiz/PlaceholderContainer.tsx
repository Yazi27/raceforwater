"use client";

export default function PlaceholderContainer() {
  return (
    <main className="min-h-[300px] bg-blue-300 p-4 flex items-center justify-center">
      <div className="bg-white ring-2 ring-black rounded-lg p-8 max-w-md text-center shadow-[6px_6px_0px_rgba(0,0,0,0.3)]">
        <h2 className="text-2xl font-bold mb-4">Autre Fonctionnalité</h2>
        <p className="text-lg">
          Pour l&apos;instant, ce container est vide, mais on pourra y ajouter
          une nouvelle fonctionnalité plus tard.
        </p>
      </div>
    </main>
  );
}
