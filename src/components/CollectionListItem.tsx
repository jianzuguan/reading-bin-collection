import React, { useEffect, useState } from 'react';
import { Collection } from '../types';
import foodWaste from '../img/foodWaste.png';
import greyWaste from '../img/greyWaste.png';
import redWaste from '../img/redWaste.png';
import styles from './CollectionListItem.module.css';
import { Paper } from '@material-ui/core';

interface IProps {
  collectionData: Collection;
}

const CollectionListItem = (props: IProps) => {
  const { collectionData } = props;
  const { Date, Service } = collectionData;

  const [wasteImg, setWasteImg] = useState('');
  const [wasteImgAlt, setWasteImgAlt] = useState('');

  useEffect(() => {
    switch (Service) {
      case 'Domestic Waste Collection Service':
        setWasteImg(greyWaste);
        setWasteImgAlt('Image of Rubbish (grey bin) bin');
        break;
      case 'Recycling Collection Service':
        setWasteImg(redWaste);
        setWasteImgAlt('Image of Recycling (red bin) bin');
        break;
      case 'Food Waste Collection Service':
        setWasteImg(foodWaste);
        setWasteImgAlt('Image of Food bin');
        break;
    }
  }, [Service]);

  return (
    <Paper elevation={3} className={styles.my2}>
      <div className={styles.card}>
        <img src={wasteImg} alt={wasteImgAlt} className={styles.image} />
        <div className={styles.details}>
          <p>{Date}</p>
          <p>{Service}</p>
        </div>
      </div>
    </Paper>
  );
};

export default CollectionListItem;
