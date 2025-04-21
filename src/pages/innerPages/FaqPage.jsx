import FaqStyle2 from '@/components/faq/FaqStyle2';
import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import React from 'react';

const FaqPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="FAQ" title="Frequently Asked Question">
                <FaqStyle2 fullFaq={true} />
            </LayoutStyle7>
        </>
    );
};

export default FaqPage;