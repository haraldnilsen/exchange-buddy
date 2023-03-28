import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import exchangeImage from "../images/trade.jpg";
import keyImage from "../images/exchange.jpg";
import groupImage from "../images/tull.jpg";

const AboutUs: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="bg-slate-300 rounded-3xl mt-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold mb-6">About Us</h1>
                <div className="flex items-baseline gap-12">
                    <div className="sm:w-1/2">
                        <img src={keyImage} alt="House" className="w-full rounded-lg" />
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                            vel tristique dolor, eu mollis neque. Sed euismod ultricies odio,
                            eu congue risus fringilla in. Aenean malesuada eleifend tortor,
                            vel imperdiet tellus rutrum id. Fusce congue augue eu velit
                            eleifend, vel blandit dolor aliquam. Nullam eleifend quam vitae
                            neque consectetur, vel dictum lorem dignissim. Sed vitae nulla
                            vitae nunc interdum suscipit vel eget mauris. Integer eu quam
                            interdum, molestie enim non, dignissim nisi. Nunc quis quam eu
                            justo facilisis elementum. Duis eget felis neque. In hac
                            habitasse platea dictumst.
                        </p>
                    </div>
                    <div className="sm:w-1/2">
                        <img src={exchangeImage} alt="Agent" className="w-full rounded-lg" />
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                            vel tristique dolor, eu mollis neque. Sed euismod ultricies odio,
                            eu congue risus fringilla in. Aenean malesuada eleifend tortor,
                            vel imperdiet tellus rutrum id. Fusce congue augue eu velit
                            eleifend, vel blandit dolor aliquam. Nullam eleifend quam vitae
                            neque consectetur, vel dictum lorem dignissim. Sed vitae nulla
                            vitae nunc interdum suscipit vel eget mauris. Integer eu quam
                            interdum, molestie enim non, dignissim nisi. Nunc quis quam eu
                            justo facilisis elementum. Duis eget felis neque. In hac
                            habitasse platea dictumst.
                        </p>
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                    <div className="flex flex-col sm:flex-row gap-8">
                        <div className="sm:w-1/3">
                            <div className="bg-white rounded-lg shadow p-4 transition transform hover:-translate-y-1">
                                <img
                                    src={groupImage}
                                    alt="Agent"
                                    className="w-full rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">John Doe</h3>
                                <p className="text-gray-500 mb-4">Real Estate Agent</p>
                            </div>
                        </div>
                        <div className="sm:w-1/3">
                            <div className="bg-white rounded-lg shadow p-4 transition transform hover:-translate-y-1">
                                <img
                                    src={groupImage}
                                    alt="Agent"
                                    className="w-full rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
                                <p className="text-gray-500 mb-4">Real Estate Agent</p>
                            </div>
                        </div>
                        <div className="sm:w-1/3">
                            <div className="bg-white rounded-lg shadow p-4 transition transform hover:-translate-y-1">
                                <img
                                    src={groupImage}
                                    alt="Agent"
                                    className="w-full rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">Mark Johnson</h3>
                                <p className="text-gray-500 mb-4">Real Estate Agent</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">

                    <div className="flex flex-col sm:flex-row gap-8">
                        <div className="sm:w-1/3" >
                            <div className="bg-white rounded-lg shadow p-4 transition transform hover:-translate-y-1">
                                <img
                                    src={groupImage}
                                    alt="Agent"
                                    className="w-full rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">John Doe</h3>
                                <p className="text-gray-500 mb-4">Real Estate Agent</p>
                            </div>
                        </div>
                        <div className="sm:w-1/3">
                            <div className="bg-white rounded-lg shadow p-4 transition transform hover:-translate-y-1">
                                <img
                                    src={groupImage}
                                    alt="Agent"
                                    className="w-full rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
                                <p className="text-gray-500 mb-4">Real Estate Agent</p>
                            </div>
                        </div>
                        <div className="sm:w-1/3">
                            <div className="bg-white rounded-lg shadow p-4 transition transform hover:-translate-y-1">
                                <img
                                    src={groupImage}
                                    alt="Agent"
                                    className="w-full rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">Mark Johnson</h3>
                                <p className="text-gray-500 mb-4">Real Estate Agent</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="flex flex-col sm:flex-row gap-8">
                        <div className="sm:w-1/3">
                            <div className="bg-white rounded-lg shadow p-4 transition transform hover:-translate-y-1">
                                <img
                                    src={groupImage}
                                    alt="Agent"
                                    className="w-full rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">John Doe</h3>
                                <p className="text-gray-500 mb-4">Real Estate Agent</p>
                            </div>
                        </div>
                        <div className="sm:w-1/3">
                            <div className="bg-white rounded-lg shadow p-4 transition transform hover:-translate-y-1">
                                <img
                                    src={groupImage}
                                    alt="Agent"
                                    className="w-full rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
                                <p className="text-gray-500 mb-4">Real Estate Agent</p>
                            </div>
                        </div>
                        <div className="sm:w-1/3">
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}

export default AboutUs;