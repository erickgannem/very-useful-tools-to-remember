import jwt from 'jsonwebtoken';
import { readFile } from 'fs';
import { promisify } from 'util';
import { join, dirname, resolve } from 'path';

const { pathname } = new URL(import.meta.url);
const fileDir = dirname(pathname);
const rootDirectory = resolve(fileDir, '..', '..');
const asyncReadFile = promisify(readFile);

const privateKey = async () => {
  const key = await asyncReadFile(join(rootDirectory, 'private.key'));
  return key;
};

const signToken = async (payload) => {
  const key = await privateKey();
  try {
    const token = jwt.sign(JSON.stringify(payload), key);

    return token;
  } catch (err) {
    return err;
  }
};

const decodeToken = async (token) => {
  const key = await privateKey();
  try {
    const decoded = jwt.verify(token, key);
    return decoded;
  } catch (err) {
    return err;
  }
};

export { signToken, decodeToken };
