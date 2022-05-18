import List from "Components/List/List";
import s from "./AppliedDescription.module.scss";

const appliedDescription = ({ data }) => {
  const { projects, description, workExperience, education } = data;

  return (
    <div className={s.applied}>
      <h3>Learner in Front-End Developer</h3>
      <h1 className={s.name} style={{ marginTop: "20px" }}>
        Adrian Tmocaliuc
      </h1>
      <p className={s.description}>{description}</p>
      <div className={s.workExperience}>
        <h2>Projects</h2>
        <ol className={s.projects}>
          <List projects={projects} />
        </ol>
        <h2>Work Experience</h2>
        <ul className={s.list}>
          {workExperience.map(({ city, company, date, description, title }) => (
            <li key={date} className={s.item}>
              <h4 className={s.work}>
                {`${title} `}
                <span className={s.company}>{company}</span>
              </h4>
              <p className={s.date}>
                {date} | {city}
              </p>
              <List description={description} />
            </li>
          ))}
        </ul>
      </div>
      <div className={s.education}>
        <h2>Education</h2>
        <List educationList={education} />
      </div>
    </div>
  );
};

export default appliedDescription;
