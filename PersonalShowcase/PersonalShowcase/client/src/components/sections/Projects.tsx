import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Parking System",
    description: "A comprehensive parking management system with real-time tracking and space allocation",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a",
    demoUrl: "https://codebysohaib.github.io/parkingsystem/",
  },
  {
    title: "Speed Testing Web (NetTest)",
    description: "Web application for testing internet connection speed and performance metrics",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    demoUrl: "https://codebysohaib.github.io/nettest/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-foreground/60">
            Showcasing my latest work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </AspectRatio>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-foreground/60 mb-4">{project.description}</p>
                  <Button
                    variant="default"
                    className="w-full"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}