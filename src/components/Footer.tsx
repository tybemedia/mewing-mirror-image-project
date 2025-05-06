import React from 'react';
import { Button } from './ui/button';
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";

const Footer = () => {
  return (
    <footer className="bg-[#1a242c] text-white py-24">
      <div className="container">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Unser Standort in Hamburg</h2>
            <p className="text-lg mb-2">
              Mit hanseatischer Tradition und modernem Businessgeist ist Hamburg der ideale Standort für unser Büro.
            </p>
            <p className="text-lg">
              Du findest uns zentral in Hamburg Winterhude, direkt in Alsternahe.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mb-16 rounded-sm overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2368.2696161780164!2d9.991576776677012!3d53.58323637992244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18912a599faad%3A0x27957ac6d7b19f47!2sDorotheenstra%C3%9Fe%2064%2C%2022301%20Hamburg%2C%20Germany!5e0!3m2!1sen!2sus!4v1709837899657!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn direction="left">
            <div>
              <motion.img 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                src="2.png" 
                alt="VIA Group" 
                className="w-40 h-auto mb-8 brightness-0 invert"
              />
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="contact-form">
              <h3 className="text-2xl mb-8">Kontaktiere uns</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 bg-white/10 rounded-sm"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-white/10 rounded-sm"
                />
                <input
                  type="tel"
                  placeholder="Telefon"
                  className="w-full p-3 bg-white/10 rounded-sm"
                />
                <textarea
                  placeholder="Nachricht"
                  rows={6}
                  className="w-full p-3 bg-white/10 rounded-sm"
                ></textarea>
                <div className="text-right">
                  <Button className="bg-white text-[#1a242c] hover:bg-white/90">
                    Anfrage senden
                  </Button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
