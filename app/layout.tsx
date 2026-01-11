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
  <div className="flex items-center px-6 py-4">

    {/* LOGO */}
    <img
      src="/assets/logo.png"
      alt="Mana Rythu Sampada Logo"
      className="h-12 w-auto"
    />

    {/* SMALL GAP + BRAND NAME */}
    <div className="ml-10">
      <h1 className="text-2xl font-bold text-green-700 leading-tight">
        Mana Rythu Sampada
      </h1>
      <p className="text-sm text-gray-600">
        మన రైతు సంపద
      </p>
    </div>

    {/* MENU WITH GAP FROM BRAND */}
    <nav className="ml-180 flex gap-8 text-base font-medium text-gray-700">
      <a href="/" className="hover:text-green-600">Home</a>
      <a href="/#products" className="hover:text-green-600">Products</a>
      <a href="/about" className="hover:text-green-600">About</a>
      <a href="/contact" className="hover:text-green-600">Contact</a>
    </nav>

  </div>
</header>






        {/* ===== PAGE CONTENT ===== */}
        <main>

          {children}
        </main>

        {/* ===== FOOTER ===== */}
  <footer className="bg-green-50 border-t border-green-200 mt-12">
  <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

    {/* LEFT : CONTACT */}
    <div className="text-left">
      <h4 className="text-lg font-semibold text-green-700 mb-3">
        Contact
      </h4>
      <p className="text-sm text-gray-700">📞 +91 73823 00187</p>
      <p className="text-sm text-gray-700 mt-1">📍 Andhra Pradesh</p>
    </div>

    {/* CENTER : BRAND / ABOUT */}
    <div className="text-center">
      <h3 className="text-xl font-bold text-green-700">
        Mana Rythu Sampada
      </h3>
      <p className="text-sm text-gray-700 mt-3 max-w-sm mx-auto">
        Delivering pure, traditional and chemical-free food products
        directly from farmers to customers.
      </p>
    </div>

    {/* RIGHT : FOLLOW US */}
    {/* RIGHT : FOLLOW US */}
<div className="text-right">
  <h4 className="text-lg font-semibold text-green-700 mb-3">
    Follow Us
  </h4>

  <div className="flex flex-col gap-3 items-end text-sm">

    {/* Instagram */}
    <a
      href="https://www.instagram.com/"
      target="_blank"
      className="flex items-center gap-2 text-gray-700 hover:text-green-700"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.8-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"/>
      </svg>
      Instagram
    </a>

    {/* YouTube */}
    <a
      href="https://www.youtube.com/"
      target="_blank"
      className="flex items-center gap-2 text-gray-700 hover:text-green-700"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2s-.2-1.7-.9-2.4c-.8-.9-1.7-.9-2.1-1C17.5 2.5 12 2.5 12 2.5h0s-5.5 0-8.5.3c-.4.1-1.3.1-2.1 1-.7.7-.9 2.4-.9 2.4S0 8.1 0 10v1.9c0 1.9.5 3.8.5 3.8s.2 1.7.9 2.4c.8.9 1.9.9 2.4 1 1.7.2 7.2.3 7.2.3s5.5 0 8.5-.3c.4-.1 1.3-.1 2.1-1 .7-.7.9-2.4.9-2.4s.5-1.9.5-3.8V10c0-1.9-.5-3.8-.5-3.8zM9.5 14.5v-5l5 2.5-5 2.5z"/>
      </svg>
      YouTube
    </a>

  </div>
</div>


  </div>

  {/* BOTTOM COPYRIGHT */}
  <div className="text-center text-sm text-gray-600 py-4 border-t border-green-200">
    © {new Date().getFullYear()} Mana Rythu Sampada. All rights reserved.
  </div>
</footer>

{/* ===== WHATSAPP FLOAT BUTTON ===== */}
<a
  href="https://wa.me/917382300187?text=Hello%20I%20want%20to%20order%20from%20Mana%20Rythu%20Sampada"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 z-50"
>
  📞 WhatsApp
</a>
<a
  href="https://wa.me/917382300187?text=Hello%20Mana%20Rythu%20Sampada"
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg z-50"
>
  WhatsApp
</a>

      </body>
    </html>
  );
}
