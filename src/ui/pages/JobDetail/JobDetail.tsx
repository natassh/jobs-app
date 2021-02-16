import React from 'react';
import './JobDetail.css';
import defaultImageCompanyDetail from '../../assets/images/defaultImageCompanyDetail.svg';



const JobDetail: React.FC  = () => {
  
  return (
    <>
    <section className="JobDetail">
      <div className="cw">
        <aside className="infoJobDetail">
          <div>
            <figure>
              <img src={defaultImageCompanyDetail} />
            </figure>
          </div>
          <div>
            <h1>So Digital Inc. <strong>sodigital.co</strong></h1>
            <a href="#" className="JobDetail__linkCompany" target="_blank" rel="noopener noreferrer" /*onClick={handleOnClick}*/>
              Company Site
            </a>
          </div>
        </aside>
        <article className="article">
          <header>
            <div>
              <p className="jobData">
                <em>1w ago</em>
                <em>Part Time</em>
              </p>
              <h2>Senior Software Engineer</h2>
              <ul className="categorieList">
                <li>Remote,</li>
                <li> Seoul,</li>
                <li> Tokyo,</li>
                <li> Mountain View,</li>
                <li> San Fransisco </li>
              </ul>
            </div>
            <a href="#" className="JobDetail__linkApply" target="_blank" rel="noopener noreferrer" /*onClick={handleOnClick}*/>
              Apply Now
            </a>
          </header>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. 
              Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, 
              nisi. Sed pretium, ligula sollicitudin <strong>laoreet viverra</strong>, tortor libero sodales leo, 
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. 
            </p>
            <p>
              Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. 
              Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. 
              Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, 
              lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. 
              Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              See more about our teams here
            </a>
            <strong>Requirements</strong>
            <p>
              Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, 
              lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, 
              adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. 
              Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.
            </p>
            <ul className="list">
              <li>Morbi interdum mollis sapien. Sed</li>
              <li>Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</li>
              <li>Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.</li>
              <li>Morbi interdum mollis sapien. Sed</li>
            </ul>
            <strong>What You Will Do</strong>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. 
            Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. 
            Sed pretium, <a href="#">ligula sollicitudin</a> laoreet viverra, tortor libero sodales leo, eget blandit nunc 
            tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
            </p>
            <p>
            Sed egestas, ante et vulputate volutpat, 
            eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, 
            commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. 
            Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. 
            Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </p>
            <ul className="numericalList">
              <li> <span>1</span> Morbi interdum mollis sapien. Sed</li>
              <li> <span>2</span> Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</li>
              <li> <span>3</span> Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel.</li>
              <li> <span>4</span> Morbi interdum mollis sapien. Sed</li>
            </ul>
          </div>
        </article>
        <aside className="infoJobApply">
          <strong>How to Apply</strong>
          <p>
            Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, 
            lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, 
            adipiscing varius, adipiscing in, lacinia vel, tellus.
          </p>
          <a href="https://examplelink.com/how-to-apply" target="_blank" rel="noopener noreferrer">
            https://examplelink.com/how-to-apply
          </a>
        </aside>
      </div>
      <aside className="linkJobApply">
        <div className="cw">
          <div>
            <h2>Senior Software Engineer</h2>
            <p>So Digital Inc.</p>
          </div>
          <a href="#" className="JobDetail__linkApply" target="_blank" rel="noopener noreferrer">
            Apply Now
          </a>
        </div>
      </aside>
    </section>
    </>
  );
};

export default JobDetail;