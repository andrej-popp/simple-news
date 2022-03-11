import React, { FC } from 'react';
import { style } from 'typestyle';
import { Header } from '../Header';

const styles = {
	container: style({
		width: '100%',
		height: '100%',
	}),
}

export const MainLayout: FC = ({ children }) => {
	return <div className={styles.container}>
		<Header />
		{children}
	</div>
}
