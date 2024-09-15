import MainCard from "../mainCard/mainCard";
import TitleCard from "../titleCard/titleCard";
import style from "./aboutGrid.module.css";

function HomeGrid() {
  return (
    <div className={style.mainGrid}>
      <MainCard title="" images={["/src/assets/lilac.jpg"]} />
      <TitleCard title="Self-summary" image="/src/assets/star2.png" />
      <MainCard
        title="Gonçalo Cardoso"
        summary="I am a Valongo-based production engineer, with a focus on biological processes and it's methods of treatment. Having a great interest in technology and coding, I am currently learning fullstack web development. "
        images={["/src/assets/star.png"]}
      />
    
      <MainCard
        title="Experience"
        experiences={[{
            years: "2022 - now",
            designation: "Production Engineer",
            location: "Fluidinova"
        }]}
        
      />
      <MainCard
        title="Education"
        experiences={[
            {
                years: "2024",
                designation: "Fullstack Web Development",
                location: "EDIT"
            },{
            years: "2016-2021",
            designation: "Integrated Master in Bioengineering",
            location: "FEUP- Faculdade de Engenharia da Universidade do Porto"
        }]}
        
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
      <MainCard
        title="Let's work together"
        images={["/src/assets/star.png"]}
        link="/Contact"
      />
        <MainCard
        title="Credentials"
        abstract="More about me"
        images={["/src/assets/lilac.jpg"]}
        link="/WorkInProgress"
      />
    </div>
  );
}

export default HomeGrid;
