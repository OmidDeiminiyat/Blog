import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { SingleQuery } from '../../Query/SingleData';
import style from './SinglePage.module.scss';
export const SinglePage = () => {
 
    const { id } = useParams();
   console.log(id);
   

  
    const { data, isLoading, error } = useQuery({
      queryKey: ["singleFilm"],
      queryFn: async () =>
        request(
          "https://eu-west-2.cdn.hygraph.com/content/cm1kc5um9021e07w68dz5uhr0/master",
          SingleQuery,
          { ArticleId: id }
        ),
    });
    
    // const article = data.find(a => a.id === parseInt(id));
    if (isLoading) {
      return <div>Loading......</div>;
    }
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    
console.log(data);

  return (
    <>
        <figure className={style.singleArticle} > 
            <h3>{data.newBlog.title}</h3>
            <p className={style.Data} >{data.newBlog.created}</p>
            <img src={data.newBlog.image.url} alt="" />
            <p className={style.describe} >{data.newBlog.description}</p>
            <p className={style.mainText} >{data.newBlog.mainBlog}</p>
            
        </figure>
    </>


  );
};


