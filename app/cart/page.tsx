// app/cart/page.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedPayment, setSelectedPayment] = useState<string>("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const paymentMethods: PaymentMethod[] = [
    { id: "credit", name: "Credit Card", icon: "💳" },
    { id: "paypal", name: "PayPal", icon: "💰" },
    { id: "cash", name: "Cash on Delivery", icon: "💵" },
    { id: "crypto", name: "Crypto", icon: "🪙" },
  ];

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const removeFromCart = (itemId: string) => {
    setCart(prevCart => {
      const newCart = prevCart.filter(item => item.id !== itemId);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
      return;
    }

    setCart(prevCart => {
      const newCart = prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    if (!selectedPayment) {
      alert("Please select a payment method");
      return;
    }
    if (!deliveryAddress) {
      alert("Please enter delivery address");
      return;
    }

    // Here you would typically send the order to your backend
    console.log("Order placed:", {
      items: cart,
      total: calculateTotal(),
      paymentMethod: selectedPayment,
      address: deliveryAddress
    });

    // Clear cart after checkout
    setCart([]);
    localStorage.removeItem('cart');
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-blue-50 flex flex-col items-center">
      <div className="max-w-4xl w-full px-4 py-8">
        <Link href="/main" className="flex items-center text-gray-600 mb-6 hover:text-black transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Menu
        </Link>

        <motion.h1 
          className="text-3xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Shopping Cart
        </motion.h1>

        {cart.length === 0 ? (
          <div className="text-center py-16">
            <motion.div 
              className="text-8xl mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              🛒
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Your cart is empty</h3>
            <p className="text-gray-500 mb-8">Add some delicious items to get started!</p>
            <Link
              href="/main"
              className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6 mb-8">
              {cart.map(item => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain"
                  />
                  <div className="ml-4 flex-grow">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-red-500 font-bold">{item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button 
                      className="p-1 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button 
                      className="p-1 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                  <button 
                    className="ml-6 text-red-500 hover:text-red-700 transition-colors"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span>Subtotal ({cart.reduce((total, item) => total + item.quantity, 0)} items)</span>
                  <span className="font-medium">{calculateTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Fee</span>
                  <span>20.00</span>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>{(calculateTotal() + 20).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">Delivery Address</label>
                <input
                  type="text"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  placeholder="Enter your delivery address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                  required
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">Payment Method</label>
                <div className="grid grid-cols-2 gap-3">
                  {paymentMethods.map(method => (
                    <motion.button
                      key={method.id}
                      type="button"
                      className={`p-4 border rounded-lg flex items-center justify-center transition-colors ${
                        selectedPayment === method.id 
                          ? 'border-red-500 bg-red-50 text-red-600' 
                          : 'border-gray-300 hover:border-gray-400'
                          
                      }`}
                      onClick={() => setSelectedPayment(method.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-2xl mr-3">{method.icon}</span>
                      <span className="font-medium">{method.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              <motion.button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                Place Order - {(calculateTotal() + 20).toFixed(2)}
              </motion.button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}