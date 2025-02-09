import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-foreground/60">
            A versatile creative professional specializing in web development, video editing, and logo design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Development & Design</h3>
                <p className="text-foreground/60">
                  Experienced web developer with a strong foundation in modern web technologies.
                  I also specialize in creating stunning logos, offering both 2D and 3D design
                  services to help brands stand out in the digital landscape.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Video Production</h3>
                <p className="text-foreground/60">
                  Professional video editor with expertise in creating engaging content.
                  From promotional videos to social media content, I bring stories to
                  life through compelling visual narratives.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}