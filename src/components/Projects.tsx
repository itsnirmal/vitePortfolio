'use client'

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"
import React from "react";

type Projects = {
    id: number;
    name: string;
    brief: string;
    description: string;
    image: string;
    link: string;
};


const Projects = () => {
    const [projects, setProjects] = useState<Projects[]>([]);

     useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/projects.json'); 
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            }
        };

        fetchProjects();
    }, []);

    const [selectedProject, setSelectedProject] = useState<Projects | null>(null);

    const openModal = (project: Projects) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="flex flex-col bg-background text-foreground">
            <section id="projects" className="py-20">
                <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {projects.map((project) => (
                                <Card key={project.id} className="group hover:shadow-2xl dark:hover:shadow-red-800 transition-all duration-300">
                                    <CardHeader>
                                        <CardTitle>{project.name}</CardTitle>
                                        <CardDescription>{project.brief}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                    <div className="relative h-48 rounded-md overflow-hidden flex justify-center items-center">
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    </CardContent>
                                    <CardFooter className="mt-auto">
                                        <Button 
                                                variant="outline" 
                                                className="w-full bg-black hover:bg-black hover:text-white text-white dark:bg-red-900"
                                                onClick={() => openModal(project)}
                                        >
                                                View Project
                                        </Button>
                                    </CardFooter>
                                </Card>
                                ))}
                            </div>
                    </div>
            </section>

            {/* Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={closeModal} // Close the modal when clicking outside of it
                >
                    <div
                        className="bg-white dark:bg-gray-900 rounded-lg max-w-3xl w-full h-3/4 overflow-y-auto flex flex-col p-6 relative"
                        onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
                    >
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:hover:text-white transition-transform transform hover:scale-105"
                            onClick={closeModal}
                        >
                            <X />
                        </button>
                        <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
                        <div className="text-gray-700 dark:text-gray-300 flex-1 overflow-y-auto">
                            {typeof selectedProject.description === "object" ? (
                                <ul className="space-y-2">
                                    {Object.entries(selectedProject.description).map(([key, value]) => (
                                        <li key={key} className="mb-2">
                                            <strong className="block text-lg">{key}</strong>
                                            <span>
                                                {String(value).split('\n').map((line, index) => (
                                                    <React.Fragment key={index}>
                                                        {line}
                                                        <br />
                                                    </React.Fragment>
                                                ))}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{selectedProject.description}</p>
                            )}
                        </div>
                        <div className="mt-4 flex justify-end">
                            <Button 
                                    variant="outline" 
                                    className="dark:bg-red-800 dark:text-white bg-black text-white hover:bg-black hover:text-white transition-transform transform hover:scale-105" 
                            >
                                 <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Go to GitHub
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Projects