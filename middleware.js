// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  
  // If the URL does not end with a slash and is not a file or an API route, redirect to the URL with a trailing slash.
  if (!url.pathname.endsWith('/') && !url.pathname.includes('.')) {
    url.pathname = `${url.pathname}/`; // Add trailing slash
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
