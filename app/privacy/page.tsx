"use client";

import { useEffect, useState } from 'react';
import { Navigation } from "@/components/navigation"
import Image from "next/image"

export default function PrivacyPolicyPage() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    // Set the date on the client side after the component mounts
    setLastUpdated(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image src="/images/sunrise.jpg" alt="Sunrise background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-16 pt-28 relative z-10">
        <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm p-8 rounded-xl">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <p className="text-white/90 mb-6">
            Last updated: {lastUpdated}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
            <p className="text-white/90 mb-4">
              Welcome to Matthew 28:18-19. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website 
              and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
            <p className="text-white/90 mb-4">We may collect, use, store and transfer different kinds of personal data about you, including:</p>
            <ul className="list-disc pl-6 text-white/90 space-y-2 mb-4">
              <li>Identity Data: includes first name, last name, username or similar identifier</li>
              <li>Contact Data: includes email address and telephone numbers</li>
              <li>Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform</li>
              <li>Usage Data: includes information about how you use our website and services</li>
              <li>Prayer Request Data: includes any personal information you choose to share in prayer requests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <p className="text-white/90 mb-4">We use your personal data for the following purposes:</p>
            <ul className="list-disc pl-6 text-white/90 space-y-2 mb-4">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To process and respond to prayer requests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Cookies and Tracking</h2>
            <p className="text-white/90 mb-4">
              We use cookies and similar tracking technologies to track activity on our service and hold certain information. 
              Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct 
              your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
            <p className="text-white/90 mb-4">
              We have implemented appropriate security measures to prevent your personal data from being accidentally lost, 
              used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data to those 
              employees, agents, contractors, and other third parties who have a business need to know.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Your Legal Rights</h2>
            <p className="text-white/90 mb-4">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
            <ul className="list-disc pl-6 text-white/90 space-y-2 mb-4">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-white/90 mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p className="text-white/90">
              Email: privacy@matthew28.org<br />
              Address: [Your Church Address]<br />
              Phone: [Your Church Phone]
            </p>
          </section>
        </div>
      </main>
    </div>
  )
} 