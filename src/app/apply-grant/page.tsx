import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GrantApplicationForm } from "@/components/forms/GrantApplicationForm";

export default function ApplyGrantPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <div className="relative bg-forest-600 text-white shadow-lg">
          <div className="absolute inset-0 bg-forest-gradient opacity-90"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white drop-shadow-lg">
                Apply for a Grant
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-leaf-light drop-shadow-md">
                Pilton Green Man CIO Grant Application
              </p>
              <p className="text-lg max-w-3xl mx-auto drop-shadow-md">
                Supporting community projects that benefit the people of Pilton
              </p>
            </div>
          </div>
        </div>

        {/* Grant Information */}
        <div className="bg-leaf-light/10 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-display font-bold text-forest-700 mb-6">
                Grant Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-forest-600 mb-4">
                    Funding Available
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Up to £1,000 for organisations</li>
                    <li>• Up to £250 for individuals</li>
                    <li>• Grants awarded quarterly</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-forest-600 mb-4">
                    Application Deadlines
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• October</li>
                    <li>• January</li>
                    <li>• April</li>
                    <li>• July</li>
                  </ul>
                </div>
              </div>

              <div className="bg-forest-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-forest-700 mb-3">
                  Area of Benefit
                </h3>
                <p className="text-gray-700">
                  Projects must benefit the people of Pilton. The geographical area covers approximately 
                  from the ND District Hospital to Pottington and from Bradiford to Raleigh and Yeo Vale.
                </p>
              </div>

              <div className="bg-sage-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-forest-700 mb-3">
                  Our Objectives
                </h3>
                <p className="text-gray-700">
                  Pilton Green Man CIO exists to promote good citizenship by facilitating community volunteer 
                  development, advancing charitable purposes including arts promotion and education in 
                  Pilton's history, primarily for the benefit of the Pilton ward of Barnstaple, Devon.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <GrantApplicationForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}