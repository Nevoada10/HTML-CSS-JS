const fs = require('fs');
const fetch = require('node-fetch');
const { estabelecimentos } = require('./estabelecimentos');

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function geocodeEndereco(endereco) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}`;
  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'CatalanPracticeApp/1.0' }
    });
    const data = await response.json();
    if (data.length === 0) return null;
    const lat = parseFloat(data[0].lat).toFixed(7);
    const lon = parseFloat(data[0].lon).toFixed(7);
    return { lat: Number(lat), lon: Number(lon) };
  } catch (err) {
    console.error(`Erro ao geocodificar ${endereco}:`, err);
    return null;
  }
}

async function processarEstabelecimentos() {
  const atualizados = [];

  for (let i = 0; i < estabelecimentos.length; i++) {
    const est = estabelecimentos[i];
    console.log(`Geocodificando (${i + 1}/${estabelecimentos.length}): ${est.nome}...`);
    const coords = await geocodeEndereco(est.endereco);
    if (coords) {
      atualizados.push({ ...est, ...coords });
      console.log(`✅ ${est.nome} → ${coords.lat}, ${coords.lon}`);
    } else {
      atualizados.push(est); // mantém o original se falhar
      console.log(`❌ Falha ao geocodificar ${est.nome}`);
    }

    if (i < estabelecimentos.length - 1) {
      await delay(60000); // 1 minuto de intervalo
    }
  }

  const output = `const estabelecimentos = ${JSON.stringify(atualizados, null, 2)};\n\nexport default estabelecimentos;`;

  fs.writeFileSync('formatado.js', output);
  console.log('Arquivo "formatado.js" gerado com sucesso!');
}

processarEstabelecimentos();