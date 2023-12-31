import React, {useState, useEffect, useContext} from 'react';
import '../../app/globals.css';
import '../../styles/fonts.css';
import { useRouter } from 'next/router'; 

import Layout from '../layout';
import { ProjectCard } from '@/components';
import { classificationModels, regressionModels, MiscModels } from '@/constants';

const ProjectPage = () => {
  const router = useRouter(); 
  const projectTitle  = router.query;

  const [projectDetails, setProjectDetails] = useState(null);


useEffect(() => {
  console.log("Project Title from URL:", projectTitle);

  const categories = [classificationModels, regressionModels, MiscModels];

  for (const category of categories) {
    const matchingProject = category.projects.find(project => project.title === projectTitle.string);

    if (matchingProject) {
      setProjectDetails(matchingProject);
      break;
    }
  }
}, [projectTitle.string]); 

  return (
    <Layout>
      <ProjectCard details={projectDetails}/>
    </Layout>
  );
};

export default ProjectPage;
