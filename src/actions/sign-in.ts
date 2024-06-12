'use server';

import * as auth from '@/auth';

export async function signIn() {
  // indicates what provider you want to sign in with, you can have multiple oauth providers in your application
  return auth.signIn('github');
}