import json

# Carrega o JSON original
with open("estabelecimentos_formatados.json", "r", encoding="utf-8") as f:
    dados = json.load(f)

# Gera o conteúdo do arquivo JavaScript
linhas = ["const estabelecimentos = ["]
for est in dados:
    linha = f'  {{ nome: "{est["nome"]}", endereco: "{est["endereco"]}", cidade: "{est["cidade"]}" }},'
    linhas.append(linha)
linhas.append("];")

# Escreve no novo arquivo .js
with open("estabelecimentos.js", "w", encoding="utf-8") as f:
    f.write("\n".join(linhas))

print("Arquivo 'estabelecimentos.js' gerado com sucesso.")