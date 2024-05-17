import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
// import resourcesToBackend from 'i18next-resources-to-backend';
import global_es from './i18n/es/global.json';
import global_en from './i18n/en/global.json';

import './index.css';

i18next.init({
	interpolation: {escapeValue: false},
	lng: localStorage.getItem('lng') || 'es',
	resources: {
		es: {
			global: global_es,
		},
		en: {
			global: global_en,
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<I18nextProvider i18n={i18next}>
		<App />
	</I18nextProvider>
);
