import React from 'react';

interface DirectivItemProps {
	name: string;
	position: string;
	address: string;
	phone: string;
	city: string;
}

const DirectivesItem: React.FC<DirectivItemProps> = ({ name, position, address, phone, city }) => {
	return (
		<li>
			<p className="font-medium text-base">{name}</p>
			<p className="font-normal text-base">{position}</p>
			<p className="font-light text-sm">{address}</p>
			<p className="font-light text-sm">{phone}</p>
			<p className="font-light text-sm">{city}</p>
		</li>
	);
};

export default DirectivesItem;
