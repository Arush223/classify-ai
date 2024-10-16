'use client';
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Clipboard, Headset, ArrowDown, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { SignedOut, SignedIn } from '@clerk/nextjs';
import FeatureCard from '../components/FeatureCard';
import Footer from '@/components/Footer';

const Page = () => {
  const scrollToSection = () => {
    const targetSection = document.getElementById('features-section');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="pb-24 pt-40 text-center">
            <h2 className="text-5xl mb-6 text-blue-900 animate-fade-in-down">
              Welcome to <span className="text-blue-600">Classify.ai</span>
            </h2>
            <p className="text-xl mb-10 text-gray-600 max-w-2xl mx-auto animate-fade-in-up">
              An AI-driven solution for government document classification.
            </p>
            <div className="flex justify-center">
              <SignedOut>
                <Button 
                  asChild 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl animate-fade-in-up"
                >
                  <Link href="/auth/sign-up">Get Started</Link>
                </Button>
              </SignedOut>
              <SignedIn>
                <Button 
                  asChild 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl animate-fade-in-up"
                >
                  <Link href="/classifier">Open Classifier</Link>
                </Button>
              </SignedIn>
            </div>
          </section>

          {/* Banner Description */}
          <section className="py-20 bg-blue-600 text-white rounded-lg shadow-xl mb-20">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h3 className="text-3xl font-bold mb-6">Revolutionizing Government Document Classification</h3>
              <p className="text-xl mb-8">
                Classify.ai leverages cutting-edge artificial intelligence based technologies like LangChain and Pinecone vector database to streamline the process of classifying sensitive government documents. Our platform ensures accuracy and efficiency through modern machine learning frameworks, allowing government agencies to focus on what matters most.
              </p>
              <div className="flex justify-center items-center">
                <button onClick={scrollToSection} className="text-white hover:text-gray-200 transition duration-300 ease-in-out">
                  <ArrowDown className="w-8 h-8 animate-bounce" />
                </button>
                <span className="ml-2 text-lg font-semibold">Discover Our Features</span>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features-section" className="py-5">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Classify.ai?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <FeatureCard 
                icon={Shield}
                title="Secure and Reliable"
                description="Built with government-grade security protocols in mind."
                content="Ensure the safety and integrity of classified data through our advanced AI solutions."
              />
              <FeatureCard 
                icon={Clipboard}
                title="Efficient Classification"
                description="Streamlined processes for quick and accurate results."
                content="Optimize your data management with state-of-the-art AI classification tools."
              />
              <FeatureCard 
                icon={Headset}
                title="Customer Support"
                description="Dedicated customer support for government agencies."
                content="Our team is available around the clock to assist with your needs."
              />
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-20 bg-gray-900 text-white rounded-lg shadow-xl mb-12 mt-6">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h3 className="text-4xl font-bold mb-6">Ready to Revolutionize Your Document Classification?</h3>
              <p className="text-xl mb-8">
                Join Classify.ai to simplify and handle sensitive document management needs with ease.
              </p>
              <SignedIn>
              <Button 
                asChild 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl text-lg"
              >
                <Link href="/classifier" className="flex items-center">
                  Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              </SignedIn>
              <SignedOut>
              <Button 
                asChild 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl text-lg"
              >
                <Link href="/auth/sign-up" className="flex items-center">
                  Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              </SignedOut>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
