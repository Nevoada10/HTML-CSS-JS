import json

def processar_arquivo(arquivo_entrada, arquivo_saida):
    estabelecimentos = [] # Cria uma lista vazia para armazenar os estabelecimentos
    with open(arquivo_entrada, 'r', encoding='utf-8') as f:
        while True:
            nome = f.readline().strip()
            if not nome:
                break
            endereco_rua = f.readline().strip()
            cidade = f.readline().strip()
            endereco_completo = f"{endereco_rua}, {cidade}"
            estabelecimentos.append({"nome": nome, "endereco": endereco_completo, "cidade": cidade})
            # Tenta ler as linhas em branco, não importa se existe ou não para continuar o loop
            f.readline()
            f.readline()
            f.readline()

    with open(arquivo_saida, 'w', encoding='utf-8') as outfile:
        json.dump(estabelecimentos, outfile, indent=2, ensure_ascii=False)

# Especifique os nomes dos arquivos
arquivo_entrada = 'estabelecimentos.txt'
arquivo_saida = 'estabelecimentos_formatados.json'

# Execute a função para processar o arquivo
processar_arquivo(arquivo_entrada, arquivo_saida)

print(f"Arquivo '{arquivo_saida}' criado com os dados formatados.")