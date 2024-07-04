// pages/api/images.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const imagesDirectory = path.join(process.cwd(), 'public/images');
  const filenames = fs.readdirSync(imagesDirectory);
  const images = filenames.map((name) => ({
    src: path.join('/images', name),
    title: path.basename(name, path.extname(name)) // Get filename without extension
  }));
  res.status(200).json(images);
}
