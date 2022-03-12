import React, { FC } from 'react';
import { style } from 'typestyle';
import { Tabs } from 'antd';
import gridSvg from "assets/icons/grid.svg";
const { TabPane } = Tabs;

const styles = {
	header: style({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#C4c4c4',
		height: 80,
	}),
	content: style({
		width: 1200,
		display: 'flex',
		justifyContent: 'space-between'
	}),
	leftBar: style({
		display: 'flex'
	}),
	rightBar: style({
		display: 'flex'
	}),
}

type Props = {};

export const Header: FC<Props> = () => {
  return <div className={styles.header}>
		<div className={styles.content}>
			<div className={styles.leftBar}>
				<img src={gridSvg} alt="" />
        <TabPane tab="Для меня" key="1" />
        <TabPane tab="Для всех остальных" key="2" />
      </div>
			<div className={styles.rightBar} />
		</div>
	</div>
}
