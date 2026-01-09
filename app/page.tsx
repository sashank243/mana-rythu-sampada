// frontend/app/page.tsx

const products = [
  { name: "Bellam (Jaggery)", price: "₹120 / kg" },
  { name: "Ragi Pindi", price: "₹80 / kg" },
  { name: "Ulava Pindi", price: "₹90 / kg" },
  { name: "Brown Rice", price: "₹70 / kg" },
  { name: "Black Rice", price: "₹120 / kg" },
  { name: "Coconut Oil", price: "₹450 / litre" },
  { name: "Groundnut Oil", price: "₹350 / litre" },
  { name: "Buffalo Ghee", price: "₹750 / kg" },
  { name: "Cow Ghee", price: "₹900 / kg" },
  { name: "Nuvvula Oil", price: "₹420 / litre" }
];

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
            <a href="#products" className="hover:text-green-700">Products</a>
            <a href="#about" className="hover:text-green-700">About</a>
            <a href="#contact" className="hover:text-green-700">Contact</a>
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
      </main>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/7382300187?text=Hello%20I%20want%20to%20order%20from%20Mana%20Rythu%20Sampada"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
      >
        🟢 Order on WhatsApp
      </a>

      {/* PRODUCTS SECTION */}
      <section id="products" className="bg-gray-50 py-16">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Our Natural Products
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-5 text-center"
            >
              <h3 className="font-semibold text-lg">
                {product.name}
              </h3>
              <p className="text-green-700 font-bold mt-2">
                {product.price}
              </p>

              <a
                href={`https://wa.me/7382300187?text=I%20want%20to%20order%20${encodeURIComponent(
                  product.name
                )}`}
                target="_blank"
                className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Order on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">
          About Us
        </h2>
        <p className="text-gray-700 text-center">
          Mana Rythu Sampada is a farmer-focused initiative bringing
          natural, chemical-free products directly from farmers to customers.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-700">
          📞 Phone / WhatsApp: <b>7382300187</b>
        </p>
        <p className="text-gray-700 mt-2">
          📺 YouTube & 📸 Instagram: Mana Rythu Sampada
        </p>
      </section>

    </div>
  );
}
