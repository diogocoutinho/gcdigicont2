"use client";

import { useState } from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.status === 200) {
        setSubmitStatus({
          type: "success",
          message:
            "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus({
        type: "error",
        message:
          "Erro ao enviar mensagem. Por favor, tente novamente mais tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-light mb-4">
              Entre em <span className="text-secondary">Contato</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Estamos prontos para atender sua empresa e oferecer as melhores
              soluções em contabilidade digital.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <ScrollReveal delay={0.2} width="100%">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-6 group hover:border-secondary/30 transition-all"
              >
                <div className="bg-secondary/10 p-4 rounded-xl text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shrink-0">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-light mb-1">E-mail</h3>
                  <a href="mailto:contato@gcdigicont.com.br" className="text-gray-600 hover:text-secondary transition-colors">
                    contato@gcdigicont.com.br
                  </a>
                </div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} width="100%">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-6 group hover:border-secondary/30 transition-all"
              >
                <div className="bg-secondary/10 p-4 rounded-xl text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shrink-0">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-light mb-1">
                    WhatsApp Comercial
                  </h3>
                  <a href="https://wa.me/5531993602476" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary transition-colors">
                    +55 (31) 99360-2476
                  </a>
                </div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.4} width="100%">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-6 group hover:border-secondary/30 transition-all"
              >
                <div className="bg-secondary/10 p-4 rounded-xl text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shrink-0">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-light mb-1">
                    WhatsApp Suporte
                  </h3>
                  <a href="https://wa.me/5531987529716" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary transition-colors">
                    +55 (31) 98752-9716
                  </a>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal delay={0.4} width="100%">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 space-y-6"
            >
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl text-sm font-medium ${submitStatus.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-gray-700"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200 bg-gray-50 focus:bg-white placeholder-gray-400 text-gray-700 outline-none"
                  placeholder="Seu nome"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200 bg-gray-50 focus:bg-white placeholder-gray-400 text-gray-700 outline-none"
                    placeholder="seu@email.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200 bg-gray-50 focus:bg-white placeholder-gray-400 text-gray-700 outline-none"
                    placeholder="(00) 00000-0000"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-gray-700"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200 bg-gray-50 focus:bg-white placeholder-gray-400 text-gray-700 outline-none resize-none"
                  placeholder="Como podemos ajudar?"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg ${isSubmitting
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed shadow-none"
                  : "bg-secondary text-white hover:bg-secondary/90 hover:shadow-secondary/30"
                  }`}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
