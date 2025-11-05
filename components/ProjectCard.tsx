
import React from 'react';
import type { Project } from '../types';
import { ExternalLinkIcon, GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden bg-neutral-900 border border-neutral-800">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 ease-in-out md:group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent md:from-black/90 md:via-black/60 md:to-transparent" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-neutral-300 text-sm sm:text-base md:opacity-0 md:max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-screen transition-all duration-500 ease-in-out">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-200">
            {project.tags.map(tag => (
                <span key={tag} className="text-xs font-semibold bg-white/10 text-white px-2 py-1 rounded-full">{tag}</span>
            ))}
        </div>
        <div className="pt-4 mt-auto flex space-x-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-300">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors flex items-center">
              <ExternalLinkIcon className="mr-2"/> Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors flex items-center">
              <GithubIcon className="mr-2"/> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};