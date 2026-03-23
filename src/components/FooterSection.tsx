import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 relative" id="contact">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-glow-orange/30 to-transparent" />
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl gradient-text mb-6">Let's Connect</h2>
          <div className="section-divider mb-8" />

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="mailto:ganareddy874@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-glow-orange transition-colors">
              <Mail className="w-5 h-5" /> ganareddy874@gmail.com
            </a>
            <a href="tel:+918304759337" className="flex items-center gap-2 text-muted-foreground hover:text-glow-cyan transition-colors">
              <Phone className="w-5 h-5" /> +91-8304759337
            </a>
          </div>

          <div className="flex justify-center gap-4 mb-10">
            <a href="https://github.com/Jagadeeshreddy2006" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full card-glow hover:shadow-[0_0_20px_hsl(var(--glow-orange)/0.3)] transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/jagadeeshreddy2006/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full card-glow hover:shadow-[0_0_20px_hsl(var(--glow-blue)/0.3)] transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-glow-pink" /> by Jagadeesh Reddy
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
