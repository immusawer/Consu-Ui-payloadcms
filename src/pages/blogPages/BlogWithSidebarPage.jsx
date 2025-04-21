import BlogWithSidebarContent from '@/components/blog/BlogWithSidebarContent';
import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import React from 'react';

const BlogWithSidebarPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="blog-with-sidebar" title="Blog With Sidebar">
                <BlogWithSidebarContent />
            </LayoutStyle7>
        </>
    );
};

export default BlogWithSidebarPage;