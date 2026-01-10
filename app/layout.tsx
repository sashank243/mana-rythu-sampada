import "./globals.css";

export const metadata = {
  title: "Mana Rythu Sampada",
  description: "Pure & traditional farmer products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">

        {/* ===== HEADER ===== */}
        <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* BRAND */}
            <div>
              <h1 className="text-3xl font-bold text-green-700">
                Mana Rythu Sampada
              </h1>
              <p className="text-sm text-gray-600">
                మన రైతు సంపద
              </p>
            </div>

            {/* NAVIGATION (GRAY TEXT) */}
            <nav className="flex gap-8 text-base font-medium text-gray-700">
              <a href="/" className="hover:text-gray-500">Home</a>
              <a href="/#products" className="hover:text-gray-500">Products</a>
              <a href="/about" className="hover:text-gray-500">About</a>
              <a href="/contact" className="hover:text-gray-500">Contact</a>
            </nav>

          </div>
        </header>

        {/* ===== PAGE CONTENT ===== */}
        <main className="pt-24">
          {children}
        </main>

        {/* ===== FOOTER ===== */}
        <footer className="bg-gray-50 border-t border-gray-200 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* BRAND INFO */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700">
                Mana Rythu Sampada
              </h3>
              <p className="text-sm text-gray-600 mt-3">
                Delivering pure, traditional and chemical-free food products
                directly from farmers to customers.
              </p>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="font-semibold mb-3 text-gray-700">Contact</h4>
              <p className="text-sm text-gray-600">📞 +91 73823 00187</p>
              <p className="text-sm text-gray-600 mt-1">📍 Andhra Pradesh</p>
            </div>

            {/* SOCIAL (GRAY TEXT) */}
            <div>
              <h4 className="font-semibold mb-3 text-gray-700">Follow Us</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.instagram.com/mana.rythu.sampada"
                    target="_blank"
                    className="text-gray-700 hover:underline"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@ManaRythuSampada"
                    target="_blank"
                    className="text-gray-700 hover:underline"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* BOTTOM LINE */}
          <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-200">
            © {new Date().getFullYear()} Mana Rythu Sampada. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}
