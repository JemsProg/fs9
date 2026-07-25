// src/components/ProductList.jsx
import React from "react";

// ─────────────────────────────────────────────
// 1. Sample data (replace with real API data)
// ─────────────────────────────────────────────
const sampleProducts = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  name: "PRODUCT NAME",
  brand: "CISCO",
  price: 2000,
  // Use any local/static asset or CDN link here
  image:
    "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?auto=format&fit=crop&w=600&q=60",
}));

// ─────────────────────────────────────────────
// 2. Component
// ─────────────────────────────────────────────
const ProductList = () => {
  return (
    <section className="px-6 py-16">
      {/* Heading */}
      <h2 className="mb-12 text-center text-2xl font-extrabold tracking-wide text-[#10265A] md:text-3xl">
        PRODUCT LIST
      </h2>

      {/* Product grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {sampleProducts.map((item) => (
          <article
            key={item.id}
            className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
          >
            {/* Product image */}
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-contain p-6"
            />

            {/* Details */}
            <div className="flex flex-1 flex-col justify-between px-6 pb-6">
              {/* Name + price */}
              <div className="mb-1 flex items-start justify-between">
                <p className="text-sm font-semibold text-gray-800">
                  {item.name}
                </p>
                <p className="text-sm font-semibold text-gray-700">
                  ${item.price.toLocaleString()}
                </p>
              </div>

              {/* Brand */}
              <p className="mb-4 text-xs font-medium uppercase tracking-wide text-gray-500">
                {item.brand}
              </p>

              {/* Buy button */}
              <button className="self-end rounded bg-[#10265A] px-4 py-1.5 text-xs font-semibold tracking-wide text-white transition hover:bg-[#0b1d45]">
                BUY
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* View-all CTA */}
      <div className="mt-14 flex justify-center">
        <a
          href="/products"
          className="rounded bg-[#10265A] px-8 py-2.5 text-sm font-semibold tracking-wide text-white transition hover:bg-[#0b1d45]"
        >
          View all products
        </a>
      </div>
    </section>
  );
};

export default ProductList;
