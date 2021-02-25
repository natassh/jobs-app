import { getJobsService } from '../getJobsService';
import * as getJobListModule from "../../../../../../core/services/jobs/getJobList";

describe('getJobsService', () => {

  it('should.....retun ...... when ', async () => {
    // Arrenge 
    // parametros pasar a las funciones o props componentes
    const filters = {
      description: "",
      location: "",
      fullTime: false
    };
    const pageNumber = 1;
    const jobs = [ 
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
    {
        "id": "274a58c3-1f2e-4c24-a8d8-8dd2e41301b1",
        "type": "Full Time",
        "url": "https://jobs.github.com/positions/274a58c3-1f2e-4c24-a8d8-8dd2e41301b1",
        "created_at": "Thu Feb 18 07:39:14 UTC 2021",
        "company": "InnoGames GmbH",
        "company_url": "https://www.innogames.com",
        "location": "Hamburg",
        "title": "Frontend Developer (Haxe) - Video Game: Forge of Empires",
        "description": "<p>Our agile and cross-functional <strong>Forge of Empires</strong> team is searching for a <strong>Frontend Developer</strong>:</p>\n<p>As a Frontend Developer, you will join a feature team of the Forge of Empires project to support growth, technical stability and longevity of our game.</p>\n<p>Are you a talented Game Developer and passionate about online games? Live your passion for online games/Game Development and collaborate with like-minded people to provide the best user experience for our players!</p>\n<p><strong>Your mission:</strong></p>\n<ul>\n<li>Contribute to the continuous development and improvement of one of our keystone games</li>\n<li>Develop new features and improve existing game features with a strong focus on UI and UX</li>\n<li>Participate in the whole feature development lifecycle with a commitment to high-quality results</li>\n<li>Collaborate closely with Mobile- &amp; Backend Developers, Game Designers, and Artists to implement new game features for our browser clients</li>\n</ul>\n<p><strong>Your skillset:</strong></p>\n<ul>\n<li>Working experience in Frontend/Game Development with Haxe. ActionScript 3 or JavaScript experience is a bonus.</li>\n<li>A right eye for details and a passion for implementing UI and UX</li>\n<li>Well-versed in design patterns and software architecture</li>\n<li>Experience with writing browser automation tests</li>\n<li>Solution-oriented and efficient style of work</li>\n<li>Team player and a good communicator with fluent English language skills</li>\n</ul>\n<p><em>Favorable</em></p>\n<ul>\n<li>Passion for online games (strategy/F2P) and knowledge of relevant game mechanics</li>\n<li>Professional experience in the gaming industry, ideally working on comparable browser games</li>\n<li>Theoretical understanding of Software Development, ideally based on a University degree in Computer Sciences, Business Information Systems or similar studies</li>\n<li>Know your way around popular scripting languages (Python / Bash / Groovy)</li>\n<li>A proactive and motivated individual with a willingness to learn</li>\n</ul>\n<p><strong>Your power-ups:</strong></p>\n<ul>\n<li>Get competitive compensation as well as a sabbatical, mobile device, contribution to your public transport ticket, and more</li>\n<li>De-stress your private life with flexible working hours, the in-house gym, services such as a hairdresser, massage, bike inspection, and more</li>\n<li>Participate in tons of the company's get-togethers ranging from an in-house sofa concert to a virtual wine tasting</li>\n<li>Make the most of our excellent training and development opportunities</li>\n<li>Feel comfortable in an atmosphere to empower creative thinking and strong results</li>\n<li>Work in an agile multicultural team – enabling you and your team to form and actively optimize work processes</li>\n<li>Our company language is English, and we support all our employees and their partners with optional German lessons</li>\n<li>Receive exceptional support with your relocation to Hamburg</li>\n<li>Shape the success story of InnoGames with our international team of driven experts in a stable growing company and award-winning employer</li>\n</ul>\n<p><strong>Our story:</strong></p>\n<p>InnoGames is Germany's leading developer and publisher of mobile and online games.\nThe company based in Hamburg is best known for Forge of Empires, Elvenar, and Tribal Wars. InnoGames' complete portfolio encompasses seven live games and several mobile titles in production.</p>\n<p>Born as a hobby, InnoGames today has a team of 400 employees from more than 30 nations who share the passion of creating unique games that players across the globe enjoy for years.\nTo further expand our success and to realize new projects, we are constantly looking for young talents, experienced professionals, and creative thinkers.</p>\n<p>Excited to start your journey with InnoGames and join our dynamic team as a <strong>Frontend Developer</strong>?\nWe look forward to receiving your application as well as your salary expectations and earliest possible starting date through our <a href=\"https://www.innogames.com/career/detail/job/frontend-developer-haxe-video-game-forge-of-empires/?s=GitHub\">online application form</a>. <strong>Maximilian Kaeding</strong> would be happy to answer any questions you may have.</p>\n<p><strong>Apply and #stayhome!</strong>\nDue to the <strong>coronavirus</strong> outbreak, we switched our operations company-wide to home office and turned our hiring process into a <strong>fully virtual one</strong>.\nWhen hiring, we are also open for our new team members starting their work remotely at the time being or adjusting contract start dates accordingly.\nStay home and safe!</p>\n",
        "how_to_apply": "<p><a href=\"https://www.innogames.com/career/detail/job/frontend-developer-haxe-video-game-forge-of-empires/?s=GitHub\">https://www.innogames.com/career/detail/job/frontend-developer-haxe-video-game-forge-of-empires/?s=GitHub</a></p>\n",
        "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcFdaIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0c0cdf1659e2ef3dfa4239866de1db61f1f4a2d9/logo_innogames_devlop.png"
    },
    {
        "id": "2b78c92c-c8a4-420a-88e9-4a5fc232284b",
        "type": "Full Time",
        "url": "https://jobs.github.com/positions/2b78c92c-c8a4-420a-88e9-4a5fc232284b",
        "created_at": "Wed Feb 17 22:37:26 UTC 2021",
        "company": "Openforce",
        "company_url": "http://www.oforce.com",
        "location": "Remote in US",
        "title": "Senior Software Engineer",
        "description": "<p>Overview: As Senior Software Engineer, you will join a team of mainly full stack engineers with exposure to everything, collaborating with product and other technology leaders to jointly chart the platform roadmap.</p>\n<p>General Summary:\nOur team builds and maintains all client facing interfaces (e.g. web app, APIs, etc.) to enable the independent contractor model through the platform. We are mostly full stack engineers with exposure to back-end, front-end, and everything in between. The collaborative nature of the team allows you to constantly learn new things. You’ll work closely with other software engineers across the engineering organization to innovate on our platform architecture, and to continue building a world-class technology platform.\nTo be successful in this role, you should be confident contributing to the development of our products, making recommendations for solutions and new technology approaches, and pushing for better software practices.</p>\n<p>Responsibilities:</p>\n<ul>\n<li>Serve as technical/development lead on specific initiatives</li>\n<li>Review architecture and technical design on key projects</li>\n<li>Collaborate with Product to validate use cases and requirements</li>\n<li>Lead code quality and testing across engineering teams</li>\n<li>Provide technical mentorship to junior engineers</li>\n<li>Influence and evangelize new software technologies to other team members</li>\n<li>Work closely with other software architects to make engineering wide architecture recommendations and decisions</li>\n<li>Experiment with new ways of visualizing large amounts of data</li>\n<li>Ensure our technology stack stays current</li>\n<li>Passionate about building a world-class technology platform</li>\n</ul>\n<p>Key Competencies and Skills:</p>\n<ul>\n<li>Technical Expertise: Possesses an in-depth knowledge and skill in a technical area</li>\n<li>Problem Solving: Frames problems before trying to solve them. Breaks down problems and identifies all of their facets, including hidden or tricky aspects</li>\n<li>Analytical Thinking: Weights the costs, benefits, risks, and chances for success in making a decision</li>\n<li>Fostering Innovation and Teamwork: Sponsors the development of new products, services, methods, or procedures while working cooperatively with others to produce initiative solutions</li>\n<li>Developing Others: Provides helpful, behaviorally specific feedback to others and gives people assignments that will help develop their abilities</li>\n<li>Results Orientation: Maintains commitment to goals in the face of obstacles and frustrations; develops challenging but achievable goals</li>\n</ul>\n<p>Knowledge, Skills, And Abilities</p>\n<ul>\n<li>Degree in Computer Science or equivalent work experience</li>\n<li>10+ years of software development experience</li>\n<li>High degree of comfort in Elixir, ASP or other functional or object-oriented language</li>\n<li>Experience with scalable, high performance, multi-tier, enterprise application development</li>\n<li>Familiarity with JavaScript frameworks such as React</li>\n<li>Experience with data storage technologies</li>\n<li>Experience with queuing and messaging frameworks</li>\n<li>Experience with service-oriented architecture</li>\n<li>Keen sense of information architecture and visual design</li>\n<li>Motivated by writing fast, scalable code with testability in mind</li>\n<li>Excited by working in a fast-paced environment</li>\n</ul>\n<p>The Perks</p>\n<ul>\n<li>Continued training and career development</li>\n<li>Full Benefits Package including: Medical, Dental, Vision, Disability, and 401k</li>\n<li>Vacation and Holiday pay</li>\n<li>Casual dress code and creative office environment</li>\n</ul>\n<p>Job Type:\tFull Time Exempt</p>\n<p>Reports to: \tDirector of Engineering</p>\n<p>Salary: \t\tDOE</p>\n<p>Travel: \t        Up to 5% quarterly or as needed</p>\n<p>Passion, excellence, respect, accountability and having fun are just the beginning. Openforce believes that our culture is at the core part of what makes us successful. We are looking forward to hiring someone who understands good culture and will help shape it as it evolves.</p>\n",
        "how_to_apply": "<p>Email your resume to <a href=\"mailto:careers@oforce.com\">careers@oforce.com</a>!</p>\n",
        "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcE9aIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--96b6c0ac096d817f4f10586852474d5491a6d6e4/oforce-stacked-pms-color.png"
    },
    ];
    // Mocks
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
    // ejecutar la función o rendirizar un componnet
    const newJobs = await getJobsService(filters, pageNumber, jobs);

    // Assert
    expect(newJobs).toHaveLength(4)
  })
})