// AdminDashboard.jsx
import React from "react";
import {
  LogoutIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import ProductManagement from "./ProductManagement";
import CloudinaryTest from "./CloudinaryTest";

const AdminDashboard = ({ onLogout }) => {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-4">
        <div className="flex items-center space-x-2 mb-8">
          <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
          <h1 className="text-xl font-bold">Product Management</h1>
        </div>
        <nav className="flex-grow space-y-2">
          <div className="flex items-center space-x-3 px-4 py-3 rounded-lg w-full text-left bg-amber-500 text-white">
            <ShoppingBagIcon className="h-5 w-5" />
            <span className="font-medium">Products</span>
          </div>
        </nav>
        <div className="mt-auto pt-4 border-t border-gray-700">
          <button 
            onClick={onLogout}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg w-full text-left text-gray-300 hover:bg-red-700 transition-colors duration-200"
          >
            <LogoutIcon className="h-5 w-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 mt-15">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Products</h2>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          <div className="space-y-6">
            {/* Cloudinary Test Component */}
            <CloudinaryTest />
            
            {/* Product Management */}
            <div className="bg-white rounded-lg shadow-sm">
              <ProductManagement />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;