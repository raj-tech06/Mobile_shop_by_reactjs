import { motion } from "framer-motion";

export default function AccessoriesPage() {
  const accessories = [
    { name: "Wireless Earbuds", price: "$49", image: "🎧" },
    { name: "Phone Case", price: "$19", image: "📱" },
    { name: "Smart Watch", price: "$129", image: "⌚" },
    { name: "Car Charger", price: "$25", image: "🚗" },
    { name: "Bluetooth Speaker", price: "$89", image: "🔊" },
    { name: "Screen Protector", price: "$10", image: "🛡️" },
  ];

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto bg-gray-50 text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 text-gray-900"
      >
        Accessories
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {accessories.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition-shadow"
          >
            <div className="text-5xl mb-4">{item.image}</div>
            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
            <p className="text-indigo-600 font-bold mt-2">{item.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
