import React, { FC } from 'react';
import { style } from 'typestyle';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
// @ts-ignore
import gridSvg from "assets/icons/grid.svg";

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

	const handleChange = ev => console.log(ev);
	return <div className={styles.header}>
		<div className={styles.content}>
			<div className={styles.leftBar}>
				<img src={gridSvg} alt="" />
				<Tabs defaultActiveKey="1" onChange={handleChange}>
					<TabPane tab="Для меня" key="1" />
					<TabPane tab="Для всех остальных" key="2" />
				</Tabs>
			</div>
			<div className={styles.rightBar}>

			</div>
		</div>
	</div>
}
