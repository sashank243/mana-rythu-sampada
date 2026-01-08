export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <div>
            <h1 className="text-2xl font-bold text-green-700">
              Mana Rythu Sampada
            </h1>
            <p className="text-sm text-gray-600">
              మన రైతు సంపద
            </p>
          </div>

          <nav className="space-x-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-green-700">Home</a>
            <a href="#" className="hover:text-green-700">Products</a>
            <a href="#" className="hover:text-green-700">About</a>
            <a href="#" className="hover:text-green-700">Contact</a>
          </nav>

        </div>
      </header>

      {/* HERO SECTION */}
      <main className="pt-28 flex items-center justify-center h-screen">
        <img
          src="/assets/hero.png.png"
          alt="Mana Rythu Sampada"
          className="max-w-full max-h-full object-contain"
        />
        {/* WHATSAPP ORDER BUTTON */}
<a
  href="https://wa.me/7382300187?text=Hello%20I%20want%20to%20order%20from%20Mana%20Rythu%20Sampada"
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
>
  📞 Order on WhatsApp
</a>

      </main>

    </div>
  );
}

