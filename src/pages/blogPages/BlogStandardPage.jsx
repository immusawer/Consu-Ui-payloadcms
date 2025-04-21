import BlogStandardContent from '@/components/blog/BlogStandardContent';
import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import React from 'react';

const BlogStandardPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="blog-standard" title="Blog Standard">
                <BlogStandardContent />
            </LayoutStyle7>
        </>
    );
};

export default BlogStandardPage;