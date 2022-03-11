import React, { FC } from 'react';
import { style } from 'typestyle';
import { NewsList } from './NewsList';

const styles = {
  container: style({
    display: 'flex',
    flexDirection: 'column'
  }),
}

type Props = {};

export const MainNewsPage: FC<Props> = () => {
  return <div className={styles.container}>
    <NewsList/>
  </div>
}
