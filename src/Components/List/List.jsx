import s from "./List.module.scss";

const List = ({ list, description, projects, educationList }) => {
  return (
    <>
      <ul className={s.list}>
        {list &&
          list?.map((el) => (
            <li key={el} className={s.item}>
              {el}
            </li>
          ))}
        {description &&
          description?.map((el) => (
            <li key={el} className={s.itemWork}>
              {el}
            </li>
          ))}
      </ul>
      {projects &&
        projects.map(({ position, technologies, githubLink, lifePageLink }) => (
          <li key={githubLink} className={s.itemProject}>
            <p>
              <b>Position: </b> {position}
            </p>
            <p>
              <b>Technologies: </b> {technologies}
            </p>
            <p>
              <b>GitHub page: </b>
              <a href={githubLink} target="_blank" rel="noreferrer">
                link to page
              </a>
              <b>/ Life page: </b>
              <a href={lifePageLink} target="_blank" rel="noreferrer">
                link to page
              </a>
            </p>
          </li>
        ))}
      {educationList &&
        educationList.map(({ title, location, date }) => (
          <li key={date} className={s.educationItem}>
            <h4 className={s.title}>{title}</h4>
            <h4 className={s.location}>{location}</h4>
            <p className={s.date}>{date}</p>
          </li>
        ))}
    </>
  );
};

export default List;
