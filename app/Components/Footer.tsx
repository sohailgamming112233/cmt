import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 mt-20">
      
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Left */}
          <div className="max-w-sm">
            <h2 className="text-white text-2xl font-semibold">
              CMT Lifestyle
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              High-quality garments manufacturing for global brands. 
              We deliver premium stitching with fast turnaround.
            </p>
          </div>

          {/* Right Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">

            <div>
              <h3 className="text-white mb-3">Pages</h3>
              <ul className="space-y-2">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/shirt">Shirts</Link></li>
                <li><Link href="/jacket">Jackets</Link></li>
                <li><Link href="/polo">Polo</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white mb-3">Company</h3>
              <ul className="space-y-2">
                <li>About</li>
                <li>Services</li>
                <li>Production</li>
                <li>Export</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white mb-3">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:your@email.com">
                    your@email.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/923143370276"
                    target="_blank"
                    className="text-green-400"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

          <p>© 2026 CMT Lifestyle</p>

          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span className="hover:text-white cursor-pointer">Terms</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;