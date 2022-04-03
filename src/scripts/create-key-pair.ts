/* eslint-disable @typescript-eslint/no-var-requires */
import * as fs from 'fs';
import * as path from 'path';

import { generateKeyPairSync } from 'crypto';

function genKeyPair() {
  // Generates an object where the keys are stored in properties `privateKey` and `publicKey`
  const keyPair = generateKeyPairSync('rsa', {
    modulusLength: 4096, // bits - standard for RSA keys
    publicKeyEncoding: {
      type: 'spki', // "Public Key Cryptography Standards 1"
      format: 'pem', // Most common formatting choice
    },
    privateKeyEncoding: {
      type: 'pkcs8', // "Public Key Cryptography Standards 1"
      format: 'pem', // Most common formatting choice
      cipher: 'aes-256-cbc',
      passphrase: 'shortwaits',
    },
  });

  console.log('writting on >>>', path.join(__dirname, '../../'));
  // Create the public key file
  fs.writeFileSync(path.join(__dirname, '../../public.pem'), keyPair.publicKey);

  // Create the private key file
  fs.writeFileSync(
    path.join(__dirname, '../../private.pem'),
    keyPair.privateKey,
  );
}

// Generates the keypair
genKeyPair();
