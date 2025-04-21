import Blog3ColumnContent from '@/components/blog/Blog3ColumnContent';
import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import React from 'react';

const Blog3ColumnPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="blog-3-column" title="Blog 3 Column">
                <Blog3ColumnContent />
            </LayoutStyle7>
        </>
    );
};

export default Blog3ColumnPage;