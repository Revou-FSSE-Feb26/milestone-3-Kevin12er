import { NextResponse } from 'next/server';

export function middleware(request) {
  const isLoggedIn = request.cookies.get('revoshop_token');
  const statusLogin = isLoggedIn?.value;
  const { pathname } = request.nextUrl;


  if (!statusLogin && (pathname === '/checkout' || pathname === '/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (statusLogin && pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login', '/checkout', '/cart', '/dashboard'],
};
