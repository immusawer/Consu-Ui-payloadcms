import AboutStyle2 from '@/components/about/AboutStyle2';
import BannerStyle2 from '@/components/banner/BannerStyle2';
import BlogStyle2 from '@/components/blog/BlogStyle2';
import ContactStyle2 from '@/components/contact/ContactStyle2';
import FaqStyle1 from '@/components/faq/FaqStyle1';
import FeatureStyle1 from '@/components/feature/FeatureStyle1';
import FunFactStyle1 from '@/components/fun/FunFactStyle1';
import LayoutStyle2 from '@/components/Layouts/LayoutStyle2';
import PartnerStyle1 from '@/components/partner/PartnerStyle1';
import ProjectStyle2 from '@/components/project/ProjectStyle2';
import ServicesStyle2 from '@/components/services/ServicesStyle2';
import TestimonialStyle2 from '@/components/testimonial/TestimonialStyle2';
import React from 'react';

const Home2 = () => {
    return (
        <>
            <LayoutStyle2>
                <BannerStyle2 />
                <FeatureStyle1 />
                <ServicesStyle2 />
                <PartnerStyle1 sectionClass="default-padding" />
                <AboutStyle2 sectionClass="bg-gray" />
                <FaqStyle1 />
                <TestimonialStyle2 />
                <ProjectStyle2 projectTitle={true} />
                <ContactStyle2 />
                <FunFactStyle1 />
                <BlogStyle2 />
            </LayoutStyle2>
        </>
    );
};

export default Home2;