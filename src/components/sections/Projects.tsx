"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { projects } from "@/lib/data";
import type { Project } from "@/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    rotateX.set(((mouseY - centerY) / rect.height) * -6);
    rotateY.set(((mouseX - centerX) / rect.width) * 6);
  };

  const onMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const projectUrl = project.githubUrl || project.liveUrl || null;
  const tech: string[] = project.stack || [];

  return (
    <motion.div
      ref={cardRef}
      className="project-card"
      data-cursor="project"
      style={{
        border: "1px solid var(--border)",
        borderRadius: "8px",
        padding: "24px",
        background: "var(--bg)",
        cursor: "none",
        transformStyle: "preserve-3d",
        perspective: "800px",
        rotateX: springRotateX,
        rotateY: springRotateY,
        transition: "background 150ms ease",
      }}
      onMouseMove={onMouseMove}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg-surface)" }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg)"; rotateX.set(0); rotateY.set(0) }}
      initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "12px",
              color: "var(--text-faint)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "16px",
              fontWeight: 500,
              color: "var(--text)",
            }}
          >
            {project.title}
          </span>
        </div>
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
              color: "var(--text-muted)",
              textDecoration: "none",
            }}
          >
            ↗
          </a>
        )}
      </div>

      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "15px",
          lineHeight: 1.6,
          color: "var(--text-muted)",
          marginBottom: "16px",
        }}
      >
        {project.description}
      </p>

      {tech.length > 0 && (
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "12px",
            color: "var(--text-faint)",
          }}
        >
          {tech.join(" · ")}
        </p>
      )}
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 40px" }}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: "1px",
            background: "var(--border)",
            transformOrigin: "left",
            marginBottom: "32px",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
