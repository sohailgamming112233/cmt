import Link from "next/link";

export default function Home() {
  const products = [
    {
      name: "Shirts",
      img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
      link: "/shirt",
    },
    {
      name: "Jackets",
      img: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb",
      link: "/jacket",
    },
    {
      name: "Polo Shirts",
      img: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d",
      link: "/polo",
    },
    {
      name: "T-Shirts",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
      link: "/tshirt",
    },
    {
      name: "Trousers",
      img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a",
      link: "/trouser",
    },
    {
      name: "Shorts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4fQkYYQfiCY82pGXDlCK2Cx2dOT7SRKesdw&s",
      link: "/short",
    },
  ];

  return (
    <div>

      {/* HERO */}
      <section className="text-center py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-5xl font-bold">CMT Lifestyle</h1>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Premium Quality Garments Manufacturing for Global Brands.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://wa.me/923143370276"
            target="_blank"
            className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600"
          >
            WhatsApp
          </a>

          <a
            href="mailto:your@email.com"
            className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800"
          >
            Email Us
          </a>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 py-20">
        <h2 className="text-3xl font-bold text-center">Our Products</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {products.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="group bg-gray-900 rounded-xl overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-400 mt-1">
                  High Quality Manufacturing
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 pb-20">
        <h2 className="text-3xl font-bold text-center">Why Choose Us</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10 text-center">
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="font-semibold">Low MOQ</h3>
            <p className="text-gray-400 mt-2">Small & bulk orders accepted</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="font-semibold">Export Quality</h3>
            <p className="text-gray-400 mt-2">International standard stitching</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="font-semibold">Fast Delivery</h3>
            <p className="text-gray-400 mt-2">On-time production & shipping</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-gray-900">
        <h2 className="text-3xl font-bold">Start Your Order Today</h2>
        <p className="text-gray-400 mt-3">
          Contact us now for bulk manufacturing
        </p>

        <a
          href="https://wa.me/923143370276"
          target="_blank"
          className="mt-6 inline-block bg-green-500 px-8 py-3 rounded-lg hover:bg-green-600"
        >
          Send Inquiry
        </a>
      </section>

    </div>
  );
}