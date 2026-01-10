export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* HEADER / NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-green-700">
              Mana Rythu Sampada
            </h1>
            <p className="text-sm text-gray-600">మన రైతు సంపద</p>
          </div>

          <nav className="space-x-6 text-gray-700 font-medium">
            <a href="/" className="hover:text-green-700">Home</a>
            <a href="/#products" className="hover:text-green-700">Products</a>
            <a href="/about" className="text-green-700 font-bold">About</a>
            <a href="/contact" className="hover:text-green-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* ABOUT CONTENT */}
      <div className="pt-32 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h1 className="text-4xl font-bold text-green-700 mb-6">
            About Mana Rythu Sampada
          </h1>

          <p className="text-lg text-gray-700 mb-4">
            Mana Rythu Sampada is a farmer-driven initiative focused on delivering
            pure, traditional, and chemical-free food products directly from
            farmers to consumers.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            We believe in supporting local farmers, preserving traditional food
            practices, and providing healthy products to every family.
          </p>

          <hr className="my-8" />

          <h2 className="text-3xl font-bold text-green-700 mb-4">
            మన రైతు సంపద గురించి
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            మన రైతు సంపద అనేది రైతుల చేత తయారైన సహజమైన, స్వచ్ఛమైన మరియు
            రసాయనాలు లేని ఆహార ఉత్పత్తులను నేరుగా వినియోగదారులకు అందించే
            ఒక ప్రయత్నం.
          </p>

          <p className="text-lg text-gray-700 mb-10">
            స్థానిక రైతులను ప్రోత్సహించడం, సంప్రదాయ ఆహార విలువలను కాపాడటం
            మరియు ప్రతి కుటుంబానికి ఆరోగ్యకరమైన ఆహారం అందించడమే మా లక్ష్యం.
          </p>

          {/* BACK TO HOME BUTTON */}
          <a
            href="/"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
          >
            ← Back to Home
          </a>

        </div>
      </div>

    </div>
  );
}
