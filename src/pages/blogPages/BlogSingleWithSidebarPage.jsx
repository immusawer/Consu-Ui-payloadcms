import BlogSingleWithSidebarContent from '@/components/blog/BlogSingleWithSidebarContent';
import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import React from 'react';
import blogData from '@/assets/jsonData/blog/BlogData.json';
import { useParams } from 'react-router-dom';

const BlogSingleWithSidebarPage = () => {

    const { id } = useParams()
    const data = blogData.find(blog => blog.id === parseInt(id))

    return (
        <>
            <LayoutStyle7 breadCrumb="blog-single-with-sidebar" title="Blog Single With Sidebar">
                <BlogSingleWithSidebarContent blogInfo={data} />
            </LayoutStyle7>
        </>
    );
};

export default BlogSingleWithSidebarPage;