import { Keypair } from "@solana/web3.js";
import bs58 from 'bs58';
import wallet from "./Turbin3-wallet.json"

// PK hardcoded
let secretKey = bs58.decode("");
console.log(`[${Keypair.fromSecretKey(secretKey).secretKey}]`);

let privkey = new Uint8Array(wallet);
console.log(bs58.encode(privkey));