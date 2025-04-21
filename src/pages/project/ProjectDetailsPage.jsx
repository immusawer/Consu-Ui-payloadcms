import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import ProjectDetailsContent from '@/components/project/ProjectDetailsContent';
import React from 'react';
import Project2Data from '@/assets/jsonData/project/Project2Data.json'
import { useParams } from 'react-router-dom';

const ProjectDetailsPage = () => {

    const { id } = useParams()
    const data = Project2Data.filter(project => project.id === parseInt(id))[0]

    return (
        <>
            <LayoutStyle7 breadCrumb="Project-details" title="Project Details">
                <ProjectDetailsContent projectInfo={data} />
            </LayoutStyle7>
        </>
    );
};

export default ProjectDetailsPage;