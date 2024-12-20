import React from "react";
import styled from "styled-components";

const ExploreWrapper = styled.div`
  width: 100%;
  background-color: rgb(172 125 35); /* Color de fondo amarillo-naranja */
  display: flex;
  justify-content: center;

  & > div {
    max-width: 1300px; /* Ancho máximo del contenido */
    width: 100%;
    padding: 100px 0 50px 0; /* Espaciado interno */
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
      max-width: 1100px;
      padding: 100px 0 100px 0;
    }
  }
`;

const ExploreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  max-width: 1200px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 3rem;
  }
`;

const Section = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 120px;
  justify-content: flex-start;
  align-items: normal;
  padding: 0 1rem;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: white;
    margin: 0;
    
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: auto 0;
    min-height: none;

    li {
      a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        cursor: pointer; /* Cambia el cursor a un puntero */

        &:hover {
          text-decoration: underline; /* Subrayado solo en hover */
        }
      }
    }
  }
  @media (min-width: 768px) {
    width: 100%;
    align-items: flex-start;
  }
`;

const MapEmbed = styled.div`
  iframe {
    width: 100%;
    height: 300px;
    border: none;

    @media (min-width: 768px) {
      height: 300px;
    }
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const Explore = ({ data }) => {
  return (
    <ExploreWrapper id="headerItem3">
      <div>
        <ExploreContainer>
          {data.map((section) => (
            <Section key={section.id}>
              <h2>{section.title}</h2>
              <ul>
                {section.items.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              {section.link_maps && (
                <MapEmbed>
                  <iframe
                    src={section.link_maps}
                    width="640"
                    height="480"
                  ></iframe>
                </MapEmbed>
              )}
            </Section>
          ))}
        </ExploreContainer>
      </div>
    </ExploreWrapper>
  );
};

export default Explore;
