import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import ServiceDetailsContent from '@/components/services/ServiceDetailsContent';
import React from 'react';
import Services2Data from '@/assets/jsonData/services/Services2Data.json'
import { useParams } from 'react-router-dom';

const ServiceDetailsPage = () => {

    const { id } = useParams()
    const data = Services2Data.find(service => service.id === parseInt(id))

    return (
        <>
            <LayoutStyle7 breadCrumb="Service-details" title="Service Details">
                <ServiceDetailsContent serviceInfo={data} />
            </LayoutStyle7>
        </>
    );
};

export default ServiceDetailsPage;