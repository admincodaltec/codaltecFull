import {NextRequest, NextResponse} from 'next/server';
import {getUserByEmail} from '@/services/UserServices';

export async function POST(req: NextRequest) {
	try {
		const {email, password} = await req.json();
		const user = await getUserByEmail(email);

		if (!user) {
			return NextResponse.json(
				{success: false, message: 'User not found', data: null},
				{status: 404}
			);
		} else {
			return NextResponse.json({success: true, data: user}, {status: 200});
		}
	} catch (error: any) {
		console.error(error);
		if (error.type === 'CredentialsSignin') {
			return NextResponse.json({error: 'Invalid credentials.'}, {status: 401});
		} else {
			return NextResponse.json({error: 'Something went wrong.'}, {status: 500});
		}
	}
}
