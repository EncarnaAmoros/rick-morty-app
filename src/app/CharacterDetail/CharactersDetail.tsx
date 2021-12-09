import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { BsFillRecordFill } from "react-icons/bs";

import { Spinner } from "src/components/Spinner/Spinner";
import { useCharacterDetail } from "./CharacterDetail.hook";
import { CharacterInfo } from "./CharacterInfo/CharacterInfo";
import { CharacterLocation } from "./CharacterLocation/CharacterLocation";

import styles from "./CharacterDetail.module.scss";

export const CharacterDetail = () => {
  const { id } = useParams();
  const { characterDetail, fetching } = useCharacterDetail(id);

  const noDetailData = "There is no data for this character";

  return (
    <>
      {characterDetail ? (
        <Container className={styles["characterDetail"]}>
          <div>
            <h2 className={styles["characterDetail__title"]}>
              {characterDetail.name}
            </h2>
          </div>
          <div>
            <div className={styles["characterDetail__profile"]}>
              <div className={styles["characterDetail__profile--img"]}>
                <Image
                  src={characterDetail.image}
                  alt={characterDetail.name}
                  rounded
                />
              </div>
              <div className={styles["characterDetail__profile--info"]}>
                <CharacterInfo
                  type={"Species"}
                  value={characterDetail.species}
                />
                <CharacterInfo type={"Gender"} value={characterDetail.gender} />
                <CharacterInfo type={"Status"} value={characterDetail.status} />
                <CharacterInfo type={"Type"} value={characterDetail.type} />
                <CharacterInfo
                  type={"Episodes"}
                  value={(characterDetail.episode
                    ? characterDetail.episode.length
                    : 0
                  ).toString()}
                />
                <CharacterLocation
                  name={characterDetail.origin?.name}
                  isOrigin={true}
                />
                <CharacterLocation
                  name={characterDetail.location?.name}
                  isOrigin={false}
                />
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <>{fetching ? <Spinner /> : <p>{noDetailData}</p>}</>
      )}
    </>
  );
};
