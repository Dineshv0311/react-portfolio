import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaInstagram, 
  FaEnvelope 
} from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops, something went wrong."));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="px-4 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get in Touch
          </h2>

          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Your message here..."
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded font-medium hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition"
            >
              Send Message
            </button>
          </form>

          {/* Divider */}
          <div className="my-10 border-t border-white/10" />

          {/* Social Links */}
          <div className="flex justify-center space-x-6 text-xl">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Dineshv0311" className="text-gray-400 hover:text-white transition">
              <FaGithub />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition">
              <FaEnvelope />
            </a>
          </div>

          {/* Footer text */}
          <p className="mt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Dinesh • Built with React & Tailwind
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
