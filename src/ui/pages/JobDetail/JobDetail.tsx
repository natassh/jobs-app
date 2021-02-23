import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import {getJobDetail} from "../../../core/services/jobs/getJobDetail"
import {getTimeDifference} from "../../../core/services/utils"
import WrapperLayout from '../../components/WrapperLayout';
import defaultImageCompanyDetail from '../../assets/images/defaultImageCompanyDetail.svg';
import './JobDetail.css';
import { JobType } from '../../modules/jobs/contexts/JobContext';

const JobDetail: React.FC  = () => {

  const { id } = useParams<any>();
  const [job, setJob] = useState<JobType | null>(null);

  useEffect(() => {
    onLoadJobDetail(id);
  }, [id]);

  const onLoadJobDetail = async (id:number):Promise<void> => {
    const detailJob = await getJobDetail(id);
    setJob(detailJob);
  };

  return job && (
    <>
    <section className="JobDetail">
      <WrapperLayout>
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
            
            { job.company_url !== null && (
                <a href={job.company_url} className="JobDetail__linkCompany" target="_blank" rel="noopener noreferrer">
                  Company Site
                </a>
            )}
          </div>
        </aside>
        <article className="article">
          <header>
            <div>
              <p className="jobData">
                <em>{getTimeDifference(job.created_at)}</em>
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
      </WrapperLayout>
      <aside className="linkJobApply">
        <WrapperLayout>
          <div>
            <h2>{job.title}</h2>
            <p>{job.company_url}</p>
          </div>
          <a href={job.url} className="JobDetail__linkApply" target="_blank" rel="noopener noreferrer">
            Apply Now
          </a>
        </WrapperLayout>
      </aside>
    </section>
    </>
  );
};

export default JobDetail;