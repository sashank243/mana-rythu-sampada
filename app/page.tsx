export default function Home() {
  const products = [
    { name: "Bellam (Jaggery)", telugu: "బెల్లం", price: "₹120 / kg", image: "/assets/products/bellam.png" },
    { name: "Ragi Pindi", telugu: "రాగి పిండి", price: "₹80 / kg", image: "/assets/products/ragi.png" },
    { name: "Ulava Pindi", telugu: "ఉలవ పిండి", price: "₹90 / kg", image: "/assets/products/ulava.png" },
    { name: "Brown Rice", telugu: "బ్రౌన్ రైస్", price: "₹70 / kg", image: "/assets/products/brown-rice.png" },
    { name: "Black Rice", telugu: "బ్లాక్ రైస్", price: "₹120 / kg", image: "/assets/products/black-rice.png" },
    { name: "Coconut Oil", telugu: "కొబ్బరి నూనె", price: "₹450 / litre", image: "/assets/products/coconut-oil.png" },
    { name: "Groundnut Oil", telugu: "వేరుశెనగ నూనె", price: "₹350 / litre", image: "/assets/products/groundnut-oil.png" },
    { name: "Buffalo Ghee", telugu: "గేదె నెయ్యి", price: "₹750 / kg", image: "/assets/products/buffalo-ghee.png" },
    { name: "Cow Ghee", telugu: "ఆవు నెయ్యి", price: "₹900 / kg", image: "/assets/products/cow-ghee.png" },
    { name: "Nuvvula Oil", telugu: "నువ్వుల నూనె", price: "₹420 / litre", image: "/assets/products/nuvvula-oil.png" },
  ];

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="flex justify-center">
  <img
    src="/assets/hero.png"
    alt="Mana Rythu Sampada"
    className="w-full h-auto object-cover"
  />
</section>


      {/* PRODUCTS */}
      <section id="products" className="bg-white py-12">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Our Natural Products
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 text-center">
              <img src={product.image} className="h-40 w-full object-contain mb-4" />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.telugu}</p>
              <p className="text-green-700 font-bold mt-2">{product.price}</p>

              <a
                href={`https://wa.me/917382300187?text=${encodeURIComponent(
  `Hello Mana Rythu Sampada,\n\nI want to order:\n• ${product.name}\n\nPlease share details.`
)}`}

                className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded"
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
