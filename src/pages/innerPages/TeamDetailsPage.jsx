import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import TeamDetailsContent from '@/components/team/TeamDetailsContent';
import React from 'react';
import { useParams } from 'react-router-dom';
import TeamData from '@/assets/jsonData/team/TeamData.json';

const TeamDetailsPage = () => {

    const { id } = useParams()
    const data = TeamData.find(team => team.id === parseInt(id))

    return (
        <>
            <LayoutStyle7 breadCrumb="Team-details" title="Team Details">
                <TeamDetailsContent teamInfo={data} />
            </LayoutStyle7>
        </>
    );
};

export default TeamDetailsPage;