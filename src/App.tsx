import React from 'react';
import { MainLayout } from './components/MainLayout';
import { MainNewsPage } from './areas/MainNewsPage';

export const App = () => {
	return (
		<div className="App">
      <MainLayout>
        <MainNewsPage />
      </MainLayout>
		</div>
	);
}
