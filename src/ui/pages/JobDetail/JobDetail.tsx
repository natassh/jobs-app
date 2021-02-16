import React, { useState, useEffect } from 'react';
import './JobDetail.css';
import { useParams } from 'react-router-dom';
import defaultImageCompanyDetail from '../../assets/images/defaultImageCompanyDetail.svg';
import {getJobDetail} from "../../../core/services/jobs/getJobDetail"
import parse from 'html-react-parser';


const JobDetail: React.FC  = () => {

  const { id }:any = useParams();
  const [job, setJob] = useState({
    company: "",
    company_logo: "",
    company_url: "",
    created_at: "",
    description: "",
    how_to_apply: "",
    id: "",
    location: "",
    title: "",
    type: "",
    url: "",
  });
  console.log('job ', job)

  useEffect(() => {
    onLoadJobDetail(id);
  }, [id]);

  const onLoadJobDetail = async (id:number) => {
    const detailJob = await getJobDetail(id);
    const job = detailJob;
    setJob(job);
  };
  
  return (
    <>
    <section className="JobDetail">
      <div className="cw">
        <aside className="infoJobDetail">
          <div>
          <figure>
            {job.company_logo === null
              ? <img src={defaultImageCompanyDetail} alt="Imagen de un logo por defecto" />
              : <img src={job.company_logo} alt={job.company} />
            }
          </figure>
          </div>
          <div>
            <h1>{job.company}.
              <strong>{job.company_url}</strong>
            </h1>
            
            <a href={job.company_url} className="JobDetail__linkCompany" target="_blank" rel="noopener noreferrer">
              Company Site
            </a>
          </div>
        </aside>
        <article className="article">
          <header>
            <div>
              <p className="jobData">
                <em>{job.created_at}</em>
                <em>{job.type}</em>
              </p>
              <h2>{job.title}</h2>
              <ul className="categorieList">
                <li>{job.type},</li>
                <li>{job.location} </li>
              </ul>
            </div>
            <a href={job.url} className="JobDetail__linkApply" target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </header>
          <div className="content">
            {parse(job.description)}
          </div>
        </article>
        <aside className="infoJobApply">
          <strong>How to Apply</strong>
          {parse(job.how_to_apply)}
        </aside>
      </div>
      <aside className="linkJobApply">
        <div className="cw">
          <div>
            <h2>{job.title}</h2>
            <p>{job.company_url}</p>
          </div>
          <a href={job.url} className="JobDetail__linkApply" target="_blank" rel="noopener noreferrer">
            Apply Now
          </a>
        </div>
      </aside>
    </section>
    </>
  );
};

export default JobDetail;