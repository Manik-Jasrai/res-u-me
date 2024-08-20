const getJobRequirements = (jobProfiles) => {
    const jobRequirements = [];
    jobProfiles.forEach(profile => {
            const requirement = {
                keyword: `${profile.Category}`,
                location: 'India',
                dateSincePosted: 'past Month',
                jobType: 'full time',
                remoteFilter: 'remote',
                experienceLevel: 'entry level',
                limit: '4'
            };
            jobRequirements.push(requirement);
    });

    return jobRequirements;
};

module.exports = getJobRequirements;
