'use client';

import * as React from 'react';
import Link from 'next/link';

import {cn} from '@/lib/utils';

import {Button} from '@/components/ui/button';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function NavigationMenuDemo() {
	return (
		<div className='border-b'>
			<div className='flex h-16 items-center px-4'>
				<div className='flex items-center space-x-4 lg:space-x-6 mx-6'>
					<img className='h-4 w-auto m-3' src='/assets/Logos/Codaltec_Negro.svg' alt='' />
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<Link href='/admin/dashboard' legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Inicio
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href='/admin/sliders' legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Sliders
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href='/admin/portfolio' legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Líneas de Negocio
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href='/admin/news' legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Noticias
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href='/admin/contracts' legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Contratos
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href='/admin/internal-control' legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Control Interno
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href='/admin/financial' legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Info. Financiera
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>

				<div className='ml-auto flex items-center space-x-4'>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant='ghost' className='relative h-8 w-8 rounded-full'>
								<Avatar>
									<AvatarImage src='/assets/avatar.png' />
									<AvatarFallback>CD</AvatarFallback>
								</Avatar>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='w-56' align='end' forceMount>
							<DropdownMenuItem>Perfil</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</div>
	);
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
	({className, title, children, ...props}, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
							className
						)}
						{...props}
					>
						<div className='text-sm font-medium leading-none'>{title}</div>
						<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>{children}</p>
					</a>
				</NavigationMenuLink>
			</li>
		);
	}
);
ListItem.displayName = 'ListItem';
