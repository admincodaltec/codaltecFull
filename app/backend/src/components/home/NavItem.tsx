import React from 'react';
import Link from 'next/link';

interface SubItem {
	name: string;
	link: string;
}

interface NavItemProps {
	name: string;
	link: string;
	subItems?: SubItem[];
}

const NavItem: React.FC<NavItemProps> = ({name, link, subItems}) => {
	return (
		<li className='group relative py-1 px-3 '>
			<Link
				className='flex items-center h-full text-white text-center text-xs transition duration-300 ease-in-out hover:text-yellow-500'
				href={link}
			>
				<p className='text-center'>{name}</p>
			</Link>
			{subItems && subItems.length > 0 && (
				<ul className='group-hover:opacity-100 group-hover:visible absolute top-full left-1/2 transform -translate-x-1/2 flex flex-col w-32 px-2 py-2 bg-black/80 rounded-lg opacity-0 invisible'>
					{subItems.map((subItem, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<li className='flex justify-center text-center py-3 px-2' key={index}>
							<Link
								className='text-white text-center text-xs leading-3 transition duration-300 ease-in-out hover:text-yellow-500'
								href={subItem.link}
							>
								<p className='text-center'>{subItem.name}</p>
							</Link>
						</li>
					))}
				</ul>
			)}
		</li>
	);
};

export default NavItem;
