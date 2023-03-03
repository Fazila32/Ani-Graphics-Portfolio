import React from "react";

const Projects = ({ items }) => {
  return (
    <div className="portFolio">
      <div className="section-center">
        {items.map((projectsItem) => {
          const { id, img } = projectsItem;
          return (
            <article key={id}>
              <img src={img} alt="Image Missing" className="photo" />
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
