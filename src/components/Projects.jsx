import { PROJECTS } from "../Constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="">
      {/* Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-16 text-center text-4xl font-bold text-white"
      >
        Projects
      </motion.h1>

      {/* Project List */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 lg:px-20">
        {PROJECTS.map((project, index) => (
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            key={index}
            className="rounded-lg bg-neutral-900 p-6 shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            {/* Project Image */}
            <div className="mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg object-cover w-full h-48"
              />
            </div>

            {/* Project Title */}
            <h2 className="mb-2 text-xl font-semibold text-white">
              {project.title}
            </h2>

            {/* Project Description */}
            <p className="mb-4 text-sm text-neutral-400">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded bg-purple-700 px-3 py-1 text-xs font-medium text-white shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
