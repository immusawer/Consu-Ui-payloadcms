import ContactMap from '@/components/contact/ContactMap';
import ContactUsContent from '@/components/contact/ContactUsContent';
import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import React from 'react';

const ContactUsPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="contact-us" title="Contact Us">
                <ContactUsContent />
                <ContactMap />
            </LayoutStyle7>
        </>
    );
};

export default ContactUsPage;