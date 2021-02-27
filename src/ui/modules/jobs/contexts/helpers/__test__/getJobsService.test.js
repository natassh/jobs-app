import { getJobsService } from '../getJobsService';
import * as getJobListModule from "../../../../../../core/services/jobs/getJobList";
import jobs from "../fixtures/jobsFixture.json"

describe('getJobsService', () => {

  it('should return a new array with the added jobs', async () => {
    // Arrenge 
  
    const mockReturnNewJobs =  [ 
      {
        "id": "b1b4983c-9aba-4fa0-a6a2-8367be2ec30b",
        "type": "Full Time",
        "url": "https://jobs.github.com/positions/b1b4983c-9aba-4fa0-a6a2-8367be2ec30b",
        "created_at": "Thu Feb 18 10:02:01 UTC 2021",
        "company": "enote GmbH",
        "company_url": "https://www.enote.com/",
        "location": "Berlin",
        "title": "NodeJS Service Developer (m/w/d)",
        "description": "<p><strong>About the position</strong></p>\n<p>We are a passionate about music and create a revolutionary product which will affect the way millions of people study and play music every day. We are searching for an experienced senior software engineer ready to join our effort and help us build the foundation of our solution – a scalable backend capable of handling thousands of simultaneous users by means of latest cloud technologies. Our product will provide millions of amateurs and professionals instant access to the majority of world’s music heritage.\n<strong>Please only apply if you have a valid work permit for Germany!</strong></p>\n<p><strong>Job Responsibilities</strong></p>\n<ul>\n<li>Establish a scalable ecosystem of microservices to serve mobile/web clients around the world</li>\n<li>Design and maintain services in close collaboration with other teams for internal and public use</li>\n<li>Contribute to best practices, improving code style and a culture of improvement over iteration</li>\n<li>Troubleshoot, improve and extend services from open-source communities</li>\n</ul>\n<p><strong>What we expect from you</strong></p>\n<ul>\n<li>You have at least 4 years of experience in developing and maintaining cloud services</li>\n<li>You see Docker as an essential part of any large software project</li>\n<li>You are confident in frameworks like Express, hapi, Restify and/or NestJS</li>\n<li>You prefer TypeScript over JavaScript</li>\n<li>You are self-driven, collaborative and constantly learning</li>\n<li>You are confident at the Linux command line</li>\n<li>You follow basic principles like DRY (Don’t Repeat Yourself) and PFE (Proudly Found Elsewhere)</li>\n<li>You apply Kanban and Scrum principles in your daily work</li>\n<li>Fluent English skills</li>\n</ul>\n<p><strong>What will be a bonus</strong></p>\n<ul>\n<li>You have already contributed to open-source projects</li>\n<li>Practical experience in other languages (e. g. Python, Rust, Go, Java)</li>\n<li>Hands-on experience with AWS, GCP and/or Azure</li>\n<li>Confident in creating efficient SQL and data organization (PostgreSQL, MySQL/MariaDB)</li>\n<li>In-depth experience with Elasticsearch used as a search engine</li>\n<li>You do care about data and have experience with data processing tools and/or platforms</li>\n<li>Experience with writing GitLab CI pipelines</li>\n<li>You know how to get the best out of Git</li>\n<li>Professional experience in securing services and protecting data</li>\n<li>You prefer test driven development (TDD)</li>\n</ul>\n<p><strong>What we offer you</strong></p>\n<ul>\n<li>Competitive compensation scheme</li>\n<li>Comfortable modern office in the heart of Berlin’s tech scene, very well connected to all local transportation services</li>\n<li>Small team, flat hierarchy, founder-led start-up</li>\n<li>We value diversity. You will only be judged based on your skills and fit for the job</li>\n<li>We are open minded! You are more than welcome to criticize and improve our processes and working culture</li>\n<li>High quality standards, your colleagues are experienced professionals</li>\n<li>Top-notch hardware equipment</li>\n<li>Great career opportunities – you will be an essential part of a new product, shaping its architecture and software design</li>\n<li>Work in a start-up with a high valuation and a 7-figure funding</li>\n</ul>\n<p><img src=\"https://camo.githubusercontent.com/37e64f096821659fe5edf34a6b712f327fb2904d/68747470733a2f2f742e676f686972696e672e636f6d2f682f62363431363866626432363962333030633966613334666230316632313962323533613133383736623764316565303830396637346531323364393864326137\"></p>\n",
        "how_to_apply": "<p><a href=\"https://t.gohiring.com/h/0e8dbabd408e777445446bf049cb8b58d5d4650be35da223dc6585e4afe3189b\">application form</a></p>\n",
        "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcGVaIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--eab17839ce167dccb20fd19c9429de91875bb7b5/enote%20GmbH.png"
      },
    ];

    const getJobListMock = jest.spyOn(getJobListModule, 'getJobList');  // spy on otherFn
    getJobListMock.mockReturnValue(mockReturnNewJobs); 

    // Act
    const newJobs = await getJobsService(jobs);

    // Assert
    expect(newJobs).toHaveLength(4)
  })
})