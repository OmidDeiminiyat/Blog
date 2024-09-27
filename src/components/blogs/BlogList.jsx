 import { useQuery } from "@tanstack/react-query";
 import { request } from "graphql-request";
 import { BlogQuery } from "../../Query/Data";
 import { Link } from "react-router-dom";
 import React from "react";
 import style from './BlogList.module.scss';


export const Blogs = () => {

const { data, isLoading, error } = useQuery({
    queryKey: ["BlogQuery"],
    queryFn: async () =>
      request(
        "https://eu-west-2.cdn.hygraph.com/content/cm1kc5um9021e07w68dz5uhr0/master",
        BlogQuery
      ),
  });

  console.log(data);

  if (isLoading) {
    return <div>Loading......</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

return (
    <>
  <section className={style.BlogStyle}>
  {data.newBlogs.map(blog => (
        <>
        <figure key={blog.id} >
        <img src={blog.image.url} alt="" />
        <h2>{blog.title}</h2>
        <p>{blog.description}</p>
        <Link to={`/blogs/SinglePage/${blog.id}`}>
            <button>Read more</button>
        </Link>

        

        </figure>
        
        </>
       
      ))}
  </section>
    </>
)


}