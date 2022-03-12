import React, { FC, useEffect, useState } from 'react';
import { style } from 'typestyle';
import { everything, IEverythingRequest, Article } from '../api/newsApi';
import { useNewsState } from './NewsList.state';
import { NewsItem } from '../NewsItem';
import { Button } from 'antd';

const styles = {
	container: style({}),
}

type Props = {};

export const NewsList: FC<Props> = () => {
  const [list, setList] = useState([] as Article[]);
  const [config, setField] = useNewsState();

  useEffect(() => {
    const fetch = async () => {
      const { data } = await everything(config as IEverythingRequest);
      console.log(data);
      setList(data.articles);
    }
    fetch();
  }, [ config ]);


	// @ts-ignore
  return <div className={styles.container}>
    <Button
      // @ts-ignore
      onClick={() => setField('q', 'russia')}>test</Button>
    {list.map(n => <NewsItem {...n} />)}
	</div>
}
