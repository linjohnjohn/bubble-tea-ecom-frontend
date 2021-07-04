import { UploadFile } from 'ts-defs/generated';

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK;

export const fromImageToUrl = (image: UploadFile | null | undefined) => {
  if (!image) {
    return '/vercel.svg';
  }

  if (image.url.indexOf('/') === 0) {
    return `${API_URL}${image.url}`;
  }

  return image.url;
};
