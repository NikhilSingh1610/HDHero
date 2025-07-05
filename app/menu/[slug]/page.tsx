"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const dummyStores: Record<string, { name: string; image: string; rating: number; location: string }[]> = {
  burger: [
    { name: "Burger Nation", image: "/burger.jpg", rating: 4.5, location: "Downtown Plaza" },
    { name: "Grill Spot", image: "/burger.jpg", rating: 4.2, location: "Food Street" },
  ],
  pizza: [
    { name: "Pizza Palace", image: "/pizza.jpg", rating: 4.7, location: "Central Mall" },
    { name: "Cheesy Crust", image: "/pizza.jpg", rating: 4.3, location: "Uptown Square" },
  ],
  // Add more categories as needed...
};

export default function FoodTypePage({ params }: { params: { slug: string } }) {
  const [stores, setStores] = useState<typeof dummyStores.burger>([]);

  useEffect(() => {
    const category = params.slug.toLowerCase();
    if (dummyStores[category]) {
      setStores(dummyStores[category]);
    }
  }, [params.slug]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-100 to-blue-50 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10 capitalize">
        {params.slug} Stores
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stores.map((store) => (
          <div key={store.name} className="bg-white shadow-lg rounded-xl p-4 text-center">
            <Image
              src={store.image}
              alt={store.name}
              width={200}
              height={200}
              className="rounded-md mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{store.name}</h2>
            <p className="text-gray-500">⭐ {store.rating} • {store.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
