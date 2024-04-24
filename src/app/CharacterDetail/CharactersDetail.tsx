import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import { Spinner } from "components/Spinner/Spinner";
import { useCharacterDetail } from "./CharacterDetail.hook";
import { CharacterInfo } from "./CharacterInfo/CharacterInfo";
import { CharacterLocation } from "./CharacterLocation/CharacterLocation";
import { GoBack } from "components/GoBack/GoBack";

import styles from "./CharacterDetail.module.scss";
import { GeneralInfo } from "components/GeneralInfo/GeneralInfo";

export const CharacterDetail = () => {
  const { id } = useParams();
  const { characterDetail, fetching } = useCharacterDetail(id);

  const noDetailData = "There is no data for this character";

  return (
    <div className={styles["characterDetailContainer"]}>
      <div className={styles["characterDetailContainer__goBackIcon"]}>
        <GoBack />
      </div>
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
        <>{fetching ? <Spinner /> : <GeneralInfo info={noDetailData} />}</>
      )}
    </div>
  );
};
