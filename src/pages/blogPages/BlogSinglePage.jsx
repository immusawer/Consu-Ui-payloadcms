import BlogSingleContent from '@/components/blog/BlogSingleContent';
import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '@/assets/jsonData/blog/BlogData.json';

const BlogSinglePage = () => {

    const { id } = useParams()
    const data = blogData.find(blog => blog.id === parseInt(id))

    return (
        <>
            <LayoutStyle7 breadCrumb="blog-single" title="Blog Single">
                <BlogSingleContent blogInfo={data} />
            </LayoutStyle7>
        </>
    );
};

export default BlogSinglePage;