import { ReactNode } from 'react';

interface FooterCardProps {
	title?: string;
	content: string | ReactNode;
	title1?: string;
	content1?: string | ReactNode;
	classStyles?: string;
}

const FooterCard: React.FC<FooterCardProps> = ({
	title,
	content,
	title1,
	content1,
	classStyles,
}) => {
	return (
		<div className={`flex flex-col justify-center h-fit py-2 px-5 ${classStyles} max-w-[220px]`}>
			<span className="my-1">
				<h5 className="text-white text-xs font-bold my-1">{title}</h5>
				{content && <div className="text-white text-xs font-light">{content}</div>}
			</span>
			{title1 && content1 && (
				<span className="my-1">
					<h5 className="text-white text-xs font-bold my-1">{title1}</h5>
					{content && <div className="text-white text-xs font-light">{content1}</div>}
				</span>
			)}
		</div>
	);
};

export default FooterCard;
