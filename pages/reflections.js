import Reflection from "../components/Card";

function reflections() {
  // Make a request to backend to get my reflections.
  let reflections = [
    {
      title: "Falafel story",
      text: "This a list of some of my reflections, but it really only exists so I can try reusing component and practice making a Django backend for my TA position.",
      img: "https://static.wixstatic.com/media/2cd43b_0b806d94872e4c24a89ea3acf95cf36d~mv2.png/v1/fill/w_320,h_240,q_90/2cd43b_0b806d94872e4c24a89ea3acf95cf36d~mv2.png",
      date: "2021-12-28",
    },
    {
      title: "Falafel story 2",
      text: "This is the story of how falafel 2 ended up on this page. I put it there.",
      date: "2021-12-28",
    },
  ];
  let reflectionsList = reflections.map((reflection) => {
    return (
      <div key={reflection.title} className="overlay">
        <Reflection {...reflection} />
      </div>
    );
  });
  return (
    <div>
      <h2>My thoughts and reflections</h2>
      {reflectionsList}
    </div>
  );
}

export default reflections;
