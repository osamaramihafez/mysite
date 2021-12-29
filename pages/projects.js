import Reflection from "../components/Card";

function projects() {
  // Make a request to backend to get my projects.
  let projects = [
    {
      title: "Windows Lock Screen Pictures (WLSP)",
      text: "Ever wondered how to get the lockscreen images \
        on your windows machine? Well there's a script for that. \
        I wrote it back in first year to automate the process for myself. \
        After that, I realized my passion for finding convenient solutions to annoying problems.",
      img: "./wlsp.jpg",
      link: {
        text: "Github",
        url: "https://github.com/osamaramihafez/wlsp",
      },
      status: "Inactive",
    },
    {
      title: "Muslim Athletic Association Website",
      text: "I actually started a sports organization with a few friends \
        intended to benefit the community. We ran multiple soccer leagues, a basketball league, yoga, running... etc. \
        I eventually left to focus on other things in my life, but during that time, I learned a lot. \
        Aside from how to run a business and how a team should be structured and much more, I realized my passion for full stack \
        development. I made a website for the organization that would hold stats and register players. \
        I'd be lying if I said it was perfect, but it did the job and taught me a lot because I tried to do everything from scratch.",
      img: "./wlsp.jpg",
      link: {
        text: "Github (some repos are private)",
        url: "https://github.com/Muslim-Athletic-Association",
      },
      status: "Inactive",
    },
  ];
  let projectsList = projects.map((reflection) => {
    return (
      <div className="overlay" key={reflection.title}>
        <Reflection {...reflection} />
      </div>
    );
  });
  return (
    <div>
      <h2>My Projects (some of them)</h2>
      {projectsList}
    </div>
  );
}

export default projects;
