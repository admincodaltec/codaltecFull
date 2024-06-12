import React from 'react';
import Link from 'next/link';

interface NavItemProps {
	name: string;
	link: string;
}

const NavItem: React.FC<NavItemProps> = ({name, link}) => {
	return (
		<li>
			<Link href={link}>{name}</Link>
		</li>
	);
};

export default NavItem;
