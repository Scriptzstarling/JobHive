const jobCards = [{
        company: 'Gojek',
        logo: 'Pics/GOJEK.png',
        position: 'Junior UI Designer',
        type: 'Full-Time',
        category: 'Design',
        location: 'South Jakarta, Kebayoran Baru',
        posted: '2 Days ago',
        description: 'Research the project requirements and gather necessary information and brainstorm design ideas and concepts.',
        salary: '$24-28K/Month',
        featured: false,
    },
    {
        company: 'Netflix',
        logo: 'Pics/NETFLIX.png',
        position: 'Senior UI Designer',
        type: 'Remote',
        category: 'Design',
        location: 'Los Gatos, California',
        posted: '7 Days ago',
        description: 'Collaborate with product managers, UX designers, developers to understand project goals.',
        salary: '$144-328K/Month',
        featured: false,
    },
    {
        company: 'Notion',
        logo: 'Pics/NOTION.png',
        position: 'Senior UI Designer',
        type: 'Contract',
        category: 'Design',
        location: 'San Francisco',
        posted: '12 Days ago',
        description: 'Create design concepts and present them to stakeholders. Create high-fidelity designs.',
        salary: '$32-48K/Month',
        featured: false,
    },
    {
        company: 'Framer',
        logo: 'Pics/FRAMER.png',
        position: 'UI Designer',
        type: 'Intern',
        category: 'Design',
        location: 'Amsterdam, Netherlands',
        posted: '4 Days ago',
        description: 'Assist senior designers with research and analysis. Create low-fidelity designs and prototypes.',
        salary: '$40-48K/Month',
        featured: false,
    },
    {
        company: 'Figma',
        logo: 'Pics/FIGMA.png',
        position: 'UI Designer',
        type: 'Intern',
        category: 'Design',
        location: 'San Francisco, California',
        posted: '7 Days ago',
        description: 'Attend design reviews and provide feedback on designs. Collaborate with other designers.',
        salary: '$52-72K/Month',
        featured: false,
    },
    {
        company: 'Spotify',
        logo: 'Pics/SPOTIFY.png',
        position: 'Senior UI Designer',
        type: 'Remote',
        category: 'Design',
        location: 'Brash Basah, Singapore',
        posted: '7 Days ago',
        description: 'Lead design reviews and provide feedback to junior designers. Work with other teams.',
        salary: '$72-88K/Month',
        featured: false,
    },
    {
        company: 'Apple',
        logo: 'Pics/APPLE.png',
        position: 'Product Designer',
        type: 'Full-Time',
        category: 'Design',
        location: 'Cupertino, California',
        posted: '5 Days ago',
        description: 'Develop and execute product design strategies. Collaborate with cross-functional teams.',
        salary: '$100-150K/Month',
        featured: false,
    },
    {
        company: 'Google',
        logo: 'Pics/GOOGLE.png',
        position: 'UX Designer',
        type: 'Full-Time',
        category: 'Design',
        location: 'Mountain View, California',
        posted: '10 Days ago',
        description: 'Design user interfaces and user experiences for web and mobile applications.',
        salary: '$120-170K/Month',
        featured: false,
    },
    {
        company: 'Amazon',
        logo: 'Pics/Amazon.png',
        position: 'UI/UX Designer',
        type: 'Full-Time',
        category: 'Design',
        location: 'Seattle, Washington',
        posted: '3 Days ago',
        description: 'Create wireframes, prototypes, and high-fidelity designs. Work with product and engineering teams.',
        salary: '$110-160K/Month',
        featured: false,
    },
    {
        company: 'Facebook',
        logo: 'Pics/FACEBOOK.png',
        position: 'Visual Designer',
        type: 'Contract',
        category: 'Design',
        location: 'Menlo Park, California',
        posted: '8 Days ago',
        description: 'Develop visual design assets for marketing campaigns. Collaborate with the creative team.',
        salary: '$80-120K/Month',
        featured: false,
    },
];

const jobsPerPage = 3;
let currentPage = 1;

const jobCardsContainer = document.getElementById('job-cards');
const pageInfo = document.getElementById('page-info');

function renderJobCards() {
    jobCardsContainer.innerHTML = '';

    const start = (currentPage - 1) * jobsPerPage;
    const end = start + jobsPerPage;
    const currentJobs = jobCards.slice(start, end);

    currentJobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        if (job.featured) {
            jobCard.classList.add('featured');
        }
        jobCard.innerHTML = `
            <div class="job-card-header">
                <img src="${job.logo}" alt="${job.company}">
                <div>
                    <span class="job-type">${job.type}</span>
                    <span class="job-category">${job.category}</span>
                </div>
            </div>
            <div class="job-card-body">
                <h3>${job.position}</h3>
                <p class="company-location">${job.location}</p>
                <p class="job-description">${job.description}</p>
                <p class="job-salary">${job.salary}</p>
            </div>
            <div class="job-card-footer">
                <button>Apply Now</button>
            </div>
        `;
        jobCardsContainer.appendChild(jobCard);
    });

    updatePaginationInfo();
}

function updatePaginationInfo() {
    const totalPages = Math.ceil(jobCards.length / jobsPerPage);
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
}

document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderJobCards();
    }
});

document.getElementById('next-page').addEventListener('click', () => {
    const totalPages = Math.ceil(jobCards.length / jobsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderJobCards();
    }
});

renderJobCards();