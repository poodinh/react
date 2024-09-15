import MainCard from "../mainCard/mainCard";
import ProjectCard from "../projectCards/projectCards";
import style from "./homeGrid.module.css";

function HomeGrid() {
  return (
    <div className={style.mainGrid}>
      <MainCard
        title="Gonçalo Cardoso"
        abstract="A Production engineer/in training web developer"
        summary="I am a production engineer, learning fullstack web development based in Valongo."
        images={["/src/assets/lilac.jpg"]}
        link="/About"
      />
      <MainCard title="Featured" abstract="Latest work and " images={["/src/assets/star2.png"]} />
      <MainCard
        title="Credentials"
        abstract="More about me"
        images={["/src/assets/lilac.jpg"]}
        link="/WorkInProgress"
      />
      <MainCard
        title="Projects"
        abstract="Showcase"
        images={["/src/assets/lilac.jpg"]}
        link="/WorkInProgress"
      />
      <MainCard
        title="GFonts"
        abstract="Blog"
        images={["/src/assets/lilac.jpg"]}
        link="/WorkInProgress"
      />
      <MainCard
        title="Services Offering"
        abstract="Specialization"
        images={[
          "/src/assets/carbon--ibm-engineering-workflow-mgmt.png",
          "/src/assets/ph--devices-light.png",
          "/src/assets/ph--pencil-circle-thin.png",
          "/src/assets/game-icons--sewing-needle.png",
        ]}
        link="/WorkInProgress"
      />
      <MainCard
        title="Profiles"
        abstract="Stay with me"
        images={[
          "/src/assets/mdi--world-wide-web.png",
          "/src/assets/mingcute--twitter-line.png",
        ]}
        link="/Contact"
      />
      <ProjectCard years={0} clients={0} projects={0} />
      <MainCard
        title="Let's work together"
        images={[
          "/src/assets/star.png"
        ]}
        link="/Contact"
      />
    </div>
  );
}

export default HomeGrid;
