#!/usr/bin/env node
// Avisa os buscadores compatíveis com IndexNow (Bing, Yandex, Seznam, Naver...)
// que as páginas do site mudaram. Rode depois de cada publicação:
//   npm run indexnow
// Lê as URLs do sitemap publicado; a chave fica em public/<chave>.txt.
import fs from "node:fs";
import path from "node:path";

const HOST = "gcdigicont.com.br";
const SITE = `https://${HOST}`;
const publicDir = path.join(path.dirname(new URL(import.meta.url).pathname), "..", "public");
const keyFile = fs.readdirSync(publicDir).find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) {
  console.error("Arquivo de chave do IndexNow não encontrado em public/.");
  process.exit(1);
}
const key = keyFile.replace(/\.txt$/, "");

const res = await fetch(`${SITE}/sitemap.xml`);
if (!res.ok) {
  console.error(`Não foi possível ler o sitemap (${res.status}).`);
  process.exit(1);
}
const xml = await res.text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
urlList.push(`${SITE}/llms.txt`, `${SITE}/llms-full.txt`);

const ping = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key, keyLocation: `${SITE}/${keyFile}`, urlList }),
});
console.log(`IndexNow: HTTP ${ping.status} para ${urlList.length} URLs`);
// 200 = aceito; 202 = aceito, chave ainda em validação.
if (![200, 202].includes(ping.status)) {
  console.error(await ping.text());
  process.exit(1);
}
