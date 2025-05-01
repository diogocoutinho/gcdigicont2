"use client";

import { useState } from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

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
    <section id="contato" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-light mb-2">
            Entre em Contato
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Estamos prontos para atender sua empresa e oferecer as melhores
            soluções em contabilidade digital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg text-light">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-light">E-mail</h3>
                  <p className="text-sm text-gray-600">
                    contato@gcdigicont.com.br
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg text-light">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-light">
                    WhatsApp 1
                  </h3>
                  <p className="text-sm text-gray-600">+55 (31) 99360-2476</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg text-light">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-light">
                    WhatsApp 2
                  </h3>
                  <p className="text-sm text-gray-600">+55 (31) 98752-9716</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-sm space-y-4"
          >
            {submitStatus.type && (
              <div
                className={`p-3 rounded-lg text-sm ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="space-y-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-gray-50/50 placeholder-gray-400 text-gray-700"
                placeholder="Digite seu nome completo"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-gray-50/50 placeholder-gray-400 text-gray-700"
                placeholder="Digite seu e-mail"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-gray-50/50 placeholder-gray-400 text-gray-700"
                placeholder="Digite seu telefone"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-gray-50/50 placeholder-gray-400 text-gray-700 resize-none"
                placeholder="Digite sua mensagem"
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isSubmitting
                  ? "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                  : "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary"
              }`}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
