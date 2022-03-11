import React, { FC } from 'react';
import { style } from 'typestyle';
import { Article } from '../api/newsApi';

const styles = {
	container: style({
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '4px',
    backgroundColor: 'aquamarine',
    padding: 16,
    margin: 24,
    border: '1px solid lightgray',
  }),
}

type Props = Article;

export const NewsItem: FC<Props> = (props) => {
  const { author, title, description, urlToImage, url } = props;
	return <div className={styles.container}>
    <img onClick={() => window.open(url, '_blank')} src={urlToImage} alt={''} />
    <h3>{title}</h3>
    <div>{description}</div>
    <div>{author}</div>
	</div>
}
