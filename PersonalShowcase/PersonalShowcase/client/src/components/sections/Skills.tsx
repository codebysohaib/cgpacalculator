import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiAdobepremierepro, SiBlender, SiAdobeillustrator } from "react-icons/si";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Web Development", icon: SiHtml5, level: 90 },
  { name: "Video Editing", icon: SiAdobepremierepro, level: 85 },
  { name: "2D Logo Design", icon: SiAdobeillustrator, level: 88 },
  { name: "3D Logo Design", icon: SiBlender, level: 82 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-foreground/60">
            Professional skills and competencies
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-2">
                <skill.icon className="w-6 h-6 text-primary" />
                <span className="font-medium">{skill.name}</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}