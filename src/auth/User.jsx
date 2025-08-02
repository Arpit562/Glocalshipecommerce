import React, { useState } from "react";
import { FaUser, FaBoxOpen, FaHeart, FaMapMarkerAlt, FaSignOutAlt, FaEdit, FaPlus, FaArrowRight } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

const tabs = [
    { id: "profile", label: "My Profile", icon: <FaUser className="text-lg" /> },
    { id: "orders", label: "My Orders", icon: <FaBoxOpen className="text-lg" /> },
    { id: "wishlist", label: "Wishlist", icon: <FaHeart className="text-lg" /> },
    { id: "address", label: "Saved Addresses", icon: <FaMapMarkerAlt className="text-lg" /> },
    { id: "payment", label: "Payment Methods", icon: <MdPayment className="text-lg" /> },
    { id: "logout", label: "Logout", icon: <FaSignOutAlt className="text-lg" /> },
];

const UserDashboard = () => {
    const [activeTab, setActiveTab] = useState("profile");

    const renderTabContent = () => {
        switch (activeTab) {
            case "profile":
                return (
                    <div className="space-y-6 ">
                        <div className="flex flex-col items-center mb-8">
                            <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                                <FaUser className="text-3xl text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Arpit Kumar</h2>
                            <p className="text-gray-600">arpit@example.com</p>
                            <button className="mt-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-md hover:from-amber-500 hover:to-amber-600 transition-all shadow-md">
                                <FaEdit /> Edit Profile <FaArrowRight className="ml-1" />
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Personal Information</h3>
                                <div className="space-y-3">
                                    <p><strong className="text-gray-700">Full Name:</strong> Arpit Kumar</p>
                                    <p><strong className="text-gray-700">Email:</strong> arpit@example.com</p>
                                    <p><strong className="text-gray-700">Phone:</strong> +91-9876543210</p>
                                    <p><strong className="text-gray-700">Date of Birth:</strong> January 15, 1990</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Account Security</h3>
                                <div className="space-y-3">
                                    <p><strong className="text-gray-700">Password:</strong> ********</p>
                                    <p><strong className="text-gray-700">2FA:</strong> Disabled</p>
                                    <p><strong className="text-gray-700">Last Login:</strong> Today, 10:30 AM</p>
                                </div>
                                <button className="mt-4 flex items-center gap-2 px-4 py-2 border border-amber-600 text-amber-600 rounded-md hover:bg-amber-50 transition">
                                    Change Password <FaArrowRight className="ml-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case "orders":
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">My Orders</h2>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex flex-col items-center justify-center py-12">
                                <FaBoxOpen className="text-5xl text-gray-300 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">No orders yet</h3>
                                <p className="text-gray-500 mb-4">You haven't placed any orders yet.</p>
                                <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-md hover:from-amber-500 hover:to-amber-600 transition-all shadow-md">
                                    Start Shopping <FaArrowRight className="ml-1" />
                                </button>
                            </div>
                        </div>

                        <div className="border-t pt-6">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800">Order History</h3>
                            <p className="text-gray-500">When you place orders, they'll appear here.</p>
                        </div>
                    </div>
                );
            case "wishlist":
                return (
                    <div className="space-y-6 mt-15 ">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Wishlist</h2>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex flex-col items-center justify-center py-12">
                                <FaHeart className="text-5xl text-gray-300 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">Your wishlist is empty</h3>
                                <p className="text-gray-500 mb-4">Save items you love to buy them later.</p>
                                <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-md hover:from-amber-500 hover:to-amber-600 transition-all shadow-md">
                                    Browse Products <FaArrowRight className="ml-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case "address":
                return (
                    <div className="space-y-6 mt-15">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">Saved Addresses</h2>
                            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-md hover:from-amber-500 hover:to-amber-600 transition-all shadow-md">
                                <FaPlus /> Add New Address <FaArrowRight className="ml-1" />
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="border rounded-lg p-6 hover:border-amber-500 transition cursor-pointer">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-semibold text-lg text-gray-800">Home Address</h3>
                                    <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">Default</span>
                                </div>
                                <p className="text-gray-700 mb-2">Arpit Kumar</p>
                                <p className="text-gray-600 mb-1">123, Main Street</p>
                                <p className="text-gray-600 mb-1">Pirawa, Jhalawar</p>
                                <p className="text-gray-600 mb-1">Rajasthan, India - 326022</p>
                                <p className="text-gray-600 mb-4">Phone: +91-9876543210</p>
                                <div className="flex gap-3">
                                    <button className="flex items-center text-amber-600 hover:text-amber-700">
                                        Edit <FaArrowRight className="ml-1" />
                                    </button>
                                    <button className="flex items-center text-red-600 hover:text-red-700">
                                        Remove <FaArrowRight className="ml-1" />
                                    </button>
                                </div>
                            </div>

                            <div className="border rounded-lg p-6 hover:border-amber-500 transition cursor-pointer">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-semibold text-lg text-gray-800">Work Address</h3>
                                </div>
                                <p className="text-gray-700 mb-2">Arpit Kumar</p>
                                <p className="text-gray-600 mb-1">456, Tech Park</p>
                                <p className="text-gray-600 mb-1">Jaipur</p>
                                <p className="text-gray-600 mb-1">Rajasthan, India - 302017</p>
                                <p className="text-gray-600 mb-4">Phone: +91-9876543210</p>
                                <div className="flex gap-3">
                                    <button className="flex items-center text-amber-600 hover:text-amber-700">
                                        Edit <FaArrowRight className="ml-1" />
                                    </button>
                                    <button className="flex items-center text-red-600 hover:text-red-700">
                                        Remove <FaArrowRight className="ml-1" />
                                    </button>
                                    <button className="flex items-center text-amber-600 hover:text-amber-700">
                                        Set as Default <FaArrowRight className="ml-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "payment":
                return (
                    <div className="space-y-6 mt-15">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">Payment Methods</h2>
                            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-md hover:from-amber-500 hover:to-amber-600 transition-all shadow-md">
                                <FaPlus /> Add Payment Method <FaArrowRight className="ml-1" />
                            </button>
                        </div>

                        <div className="border rounded-lg p-6">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-6 bg-blue-500 rounded-sm flex items-center justify-center text-white font-bold">
                                        VISA
                                    </div>
                                    <span className="font-medium">Visa ending in 4242</span>
                                </div>
                                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">Default</span>
                            </div>
                            <p className="text-gray-600 mb-4">Expires 04/2025</p>
                            <div className="flex gap-3">
                                <button className="flex items-center text-amber-600 hover:text-amber-700">
                                    Edit <FaArrowRight className="ml-1" />
                                </button>
                                <button className="flex items-center text-red-600 hover:text-red-700">
                                    Remove <FaArrowRight className="ml-1" />
                                </button>
                            </div>
                        </div>

                        <div className="border rounded-lg p-6 mt-4">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-6 bg-gray-200 rounded-sm flex items-center justify-center text-gray-600 font-bold">
                                    MC
                                </div>
                                <span className="font-medium">Mastercard ending in 5555</span>
                            </div>
                            <p className="text-gray-600 mb-4">Expires 08/2024</p>
                            <div className="flex gap-3">
                                <button className="flex items-center text-amber-600 hover:text-amber-700">
                                    Edit <FaArrowRight className="ml-1" />
                                </button>
                                <button className="flex items-center text-red-600 hover:text-red-700">
                                    Remove <FaArrowRight className="ml-1" />
                                </button>
                                <button className="flex items-center text-amber-600 hover:text-amber-700">
                                    Set as Default <FaArrowRight className="ml-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case "logout":
                return (
                    <div className="flex flex-col items-center justify-center py-20 space-y-6 mt-15">
                        <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-6">
                            <FaSignOutAlt className="text-3xl text-red-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-red-600 mb-2">Logged Out Successfully</h2>
                        <p className="text-gray-600 mb-6">You have been securely logged out of your account.</p>
                        <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-md hover:from-amber-500 hover:to-amber-600 transition-all shadow-md">
                            Login Again <FaArrowRight className="ml-1" />
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-12 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-80 flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                                    <FaUser className="text-xl text-amber-600" />
                                </div>
                                <div>
                                    <h2 className="font-bold text-gray-800">Arpit Kumar</h2>
                                    <p className="text-sm text-gray-500">Premium Member</p>
                                </div>
                            </div>

                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Account Menu</h3>
                            <ul className="space-y-2">
                                {tabs.map((tab) => (
                                    <li key={tab.id}>
                                        <button
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`w-full flex items-center justify-between gap-3 p-3 rounded-lg transition 
                                                ${activeTab === tab.id
                                                    ? "bg-gradient-to-r from-amber-400 to-amber-500 text-white"
                                                    : "hover:bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                {tab.icon}
                                                <span>{tab.label}</span>
                                            </div>
                                            <FaArrowRight className="text-sm" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Content */}
                    <main className="flex-1 mt-13">
                        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                            {renderTabContent()}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;