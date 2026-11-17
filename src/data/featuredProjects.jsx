import { projects as allProjects } from "./projects";

export const projects = allProjects.filter((p) => p.featured);
