export type Slider = {
	id: number;
	esTitle: string;
	enTitle: string;
	esDescription: string;
	enDescription: string;
	image: string;
};

export type Portafolio = {
	id: number;
	esName: string;
	enName: string;
	esDescription: string;
	enDescription: string;
	icon: string;
};

export type Posts = {
	id: number;
	esTitle: string;
	enTitle: string;
	esDescription: string;
	enDescription: string;
	image: string;
};

export type IContract = {
	id: number;
	purpose: string;
	date: string;
	file: string;
};

export type IInternalControl = {
	id: number;
	name: string;
	date: string;
	file: string;
};

export type IFinancial = {
	id: number;
	name: string;
	file: string;
};
