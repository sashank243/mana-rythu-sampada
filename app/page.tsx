export default function Home() {

  const products = [
    {
      name: "Bellam (Jaggery)",
      telugu: "బెల్లం",
      price: "₹120 / kg",
      image: "/assets/products/bellam.png",
    },
    {
      name: "Ragi Pindi",
      telugu: "రాగి పిండి",
      price: "₹80 / kg",
      image: "/assets/products/ragi.png",
    },
    {
      name: "Ulava Pindi",
      telugu: "ఉలవ పిండి",
      price: "₹90 / kg",
      image: "/assets/products/ulava.png",
    },
    {
      name: "Brown Rice",
      telugu: "బ్రౌన్ రైస్",
      price: "₹70 / kg",
      image: "/assets/products/brown-rice.png",
    },
    {
      name: "Black Rice",
      telugu: "బ్లాక్ రైస్",
      price: "₹120 / kg",
      image: "/assets/products/black-rice.png",
    },
    {
      name: "Coconut Oil",
      telugu: "కొబ్బరి నూనె",
      price: "₹450 / litre",
      image: "/assets/products/coconut-oil.png",
    },
    {
      name: "Groundnut Oil",
      telugu: "వేరుశెనగ నూనె",
      price: "₹350 / litre",
      image: "/assets/products/groundnut-oil.png",
    },
    {
      name: "Buffalo Ghee",
      telugu: "గేదె నెయ్యి",
      price: "₹750 / kg",
      image: "/assets/products/buffalo-ghee.png",
    },
    {
      name: "Cow Ghee",
      telugu: "ఆవు నెయ్యి",
      price: "₹900 / kg",
      image: "/assets/products/cow-ghee.png",
    },
    {
      name: "Nuvvula Oil",
      telugu: "నువ్వుల నూనె",
      price: "₹420 / litre",
      image: "/assets/products/nuvvula-oil.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* HEADER */}
      {/* HERO SECTION */}
      {/* HERO SECTION */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-green-700">
              Mana Rythu Sampada
            </h1>
            <p className="text-sm text-gray-600">మన రైతు సంపద</p>
          </div>

          <nav className="space-x-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-green-700">Home</a>
            <a href="#products" className="hover:text-green-700">Products</a>
            <a href="#" className="hover:text-green-700">About</a>
            <a href="#" className="hover:text-green-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO IMAGE */}
      <main className="pt-28 flex justify-center">
        <img
          src="/assets/hero.png"
          alt="Mana Rythu Sampada"
          className="max-w-full h-auto"
        />
      </main>

      {/* WHATSAPP FLOAT BUTTON */}
      <a
        href="https://wa.me/7382300187?text=Hello%20I%20want%20to%20order%20from%20Mana%20Rythu%20Sampada"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg"
      >
        📞 Order on WhatsApp
      </a>

      {/* PRODUCTS SECTION */}
      <section id="products" className="bg-gray-50 py-16 mt-10">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Our Natural Products
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">

          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-contain mb-4"
              />

              <h3 className="text-lg font-semibold">
                {product.name}
              </h3>

              <p className="text-sm text-gray-600">
                {product.telugu}
              </p>

              <p className="text-green-700 font-bold mt-2">
                {product.price}
              </p>

              <a
                href={`https://wa.me/7382300187?text=I%20want%20to%20order%20${encodeURIComponent(product.name)}`}
                target="_blank"
                className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Order on WhatsApp
              </a>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}
