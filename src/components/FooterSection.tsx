import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 relative" id="contact">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-glow-orange/30 to-transparent" />
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <motion.h2
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150 }}
            className="font-display text-4xl gradient-text mb-6 font-bold italic"
          >
            Let's Connect
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="section-divider mb-8"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <motion.a whileHover={{ scale: 1.05, y: -2 }} href="mailto:ganareddy874@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-glow-orange transition-colors">
              <Mail className="w-5 h-5" /> ganareddy874@gmail.com
            </motion.a>
            <motion.a whileHover={{ scale: 1.05, y: -2 }} href="tel:+918304759337" className="flex items-center gap-2 text-muted-foreground hover:text-glow-cyan transition-colors">
              <Phone className="w-5 h-5" /> +91-6304759337
            </motion.a>
          </motion.div>

          <div className="flex justify-center gap-4 mb-10">
            {[
              { href: "https://github.com/Jagadeeshreddy2006", icon: Github, color: "hover:shadow-[0_0_20px_hsl(var(--glow-orange)/0.3)]" },
              { href: "https://linkedin.com/in/jagadeeshreddy2006/", icon: Linkedin, color: "hover:shadow-[0_0_20px_hsl(var(--glow-blue)/0.3)]" },
            ].map((social, i) => (
              <motion.a
                key={social.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full card-glow ${social.color} transition-all`}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-sm text-muted-foreground flex items-center justify-center gap-1"
          >
            Made by Jagadeesh Reddy
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
