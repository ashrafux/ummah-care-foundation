// My Account, preview version. The site has no server yet, so "signing in" keeps the
// donor's name and contact in this browser only, and the donation box records gifts here
// so the account page has something to show. No password is ever stored.
//
// To go live, swap these functions for a real sign-in service (for example Supabase or
// Firebase Auth) and read donations from the payment records instead.

export interface User { name: string; contact: string }
export interface Gift { cause: string; what: string; amount: number; type: string; date: string; monthly?: boolean }

const USER = 'ucf_user';
const GIFTS = 'ucf_gifts';

const read = <T>(key: string, fallback: T): T => {
  try { const v = localStorage.getItem(key); return v ? (JSON.parse(v) as T) : fallback; } catch { return fallback; }
};
const write = (key: string, value: unknown) => {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage blocked: nothing to keep */ }
};

export const getUser = () => read<User | null>(USER, null);
export const signIn = (user: User) => write(USER, user);
export const signOut = () => { try { localStorage.removeItem(USER); } catch { /* ignore */ } };
export const getGifts = () => read<Gift[]>(GIFTS, []);
export const addGift = (g: Gift) => { if (getUser()) write(GIFTS, [g, ...getGifts()]); };
export const initials = (name: string) => name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase() ?? '').join('');
