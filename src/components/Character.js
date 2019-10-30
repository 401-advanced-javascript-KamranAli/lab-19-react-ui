import React from 'react';
import PropTypes from 'prop-types';
import styles from './character.css';

export default function Character({ img, name, species }) {
  return (
    <dl className={styles.Main}>
      <img src={img} />

      <dt>Name</dt>
      <dd className={styles.Species}>{name}</dd>

      <dt>Species</dt>
      <dd className={styles.Species}>{species}</dd>
    </dl>
  );
}

Character.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};
