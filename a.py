import json
import time
import requests

ARQUIVO_ENTRADA = 'a.json'
ARQUIVO_SAIDA = 'a_atualizado.json'

# Carrega dados do arquivo existente
with open(ARQUIVO_ENTRADA, 'r', encoding='utf-8') as f:
    estabelecimentos = json.load(f)

# Função para buscar latitude e longitude
def buscar_coords(endereco):
    url = 'https://nominatim.openstreetmap.org/search'
    params = {
        'q': endereco,
        'format': 'json',
        'limit': 1
    }
    headers = {
        'User-Agent': 'GeoLocScript/1.0'
    }
    try:
        response = requests.get(url, params=params, headers=headers)
        if response.status_code == 200 and response.json():
            data = response.json()[0]
            lat = round(float(data['lat']), 7)
            lon = round(float(data['lon']), 7)
            return lat, lon
    except Exception as e:
        print(f"Erro ao buscar endereço '{endereco}': {e}")
    return None, None

# Atualiza apenas os registros sem coordenadas
for i, est in enumerate(estabelecimentos):
    if not est.get('lat') or not est.get('long'):
        endereco_completo = f"{est['endereco']}, {est['cidade']}"
        lat, lon = buscar_coords(endereco_completo)
        estabelecimentos[i]['lat'] = lat
        estabelecimentos[i]['long'] = lon
        print(f"[{i+1}] {est['nome']} -> ({lat}, {lon})")
        time.sleep(1.1)  # delay entre requisições

# Salva a versão atualizada
with open(ARQUIVO_SAIDA, 'w', encoding='utf-8') as f:
    json.dump(estabelecimentos, f, ensure_ascii=False, indent=4)

print(f"\n✅ Coordenadas atualizadas salvas em '{ARQUIVO_SAIDA}'")
