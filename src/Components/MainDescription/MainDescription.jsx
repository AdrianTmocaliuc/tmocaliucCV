import spriteSvg from "utilities/sprite/sprite.svg";

import s from "./MainDescription.module.scss";
import List from "Components/List/List";

const MainDescription = ({ data }) => {
  const { email, number, techSkills, softSkills, personalSkills } = data;

  return (
    <div className={s.main}>
      <div className={s.profileImage}></div>
      <div className={s.description}>
        <div className={s.contacts}>
          <h2>Contacts</h2>
          <ul className={s.list}>
            <li className={s.item}>
              <svg className={s.phone}>
                <use href={`${spriteSvg}#icon_mobile`}></use>
              </svg>
              {<a href={`tel:${number}`}>{number}</a>}
            </li>
            <li className={s.item}>
              <svg className={s.mail}>
                <use href={`${spriteSvg}#icon_form_email`}></use>
              </svg>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
          </ul>
        </div>
        <div className={s.techSkills}>
          <h2>Tech Skills</h2>
          <List list={techSkills} />
        </div>
        <div className={s.softSkills}>
          <h2>Soft Skills</h2>
          <List list={softSkills} />
        </div>
        <div className={s.personalSkills}>
          <h2>Personal Skills</h2>
          <p>{`Mother language(s):`}</p>
          <List list={personalSkills.languages} />
          <p>English level:</p>
          <List list={personalSkills.english} />
        </div>
      </div>
    </div>
  );
};

export default MainDescription;
