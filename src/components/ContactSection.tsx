
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600">
            Have questions about mewing or interested in a consultation? Contact me directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-medium mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin size={24} className="mr-4 text-gray-600 mt-1" />
                <div>
                  <h4 className="font-medium">Clinic Address</h4>
                  <p className="text-gray-600">
                    123 Harley Street<br />
                    London, W1G 7JU<br />
                    United Kingdom
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={24} className="mr-4 text-gray-600 mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">+44 20 1234 5678</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={24} className="mr-4 text-gray-600 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">contact@drmikemew.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  id="subject"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                ></textarea>
              </div>
              <Button className="rounded-full px-8 py-6 text-base bg-black hover:bg-gray-800 text-white w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
