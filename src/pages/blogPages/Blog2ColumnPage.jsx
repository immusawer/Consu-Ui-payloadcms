import Blog2ColumnContent from '@/components/blog/Blog2ColumnContent';
import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import React from 'react';

const Blog2ColumnPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="blog-2-column" title="Blog 2 Column">
                <Blog2ColumnContent />
            </LayoutStyle7>
        </>
    );
};

export default Blog2ColumnPage;