# Como Adicionar Imagens Personalizadas para Pacotes

## Estrutura dos Dados no Firebase

Para adicionar imagens personalizadas a um pacote específico, você deve adicionar um campo `images` no documento do pacote no Firebase com a seguinte estrutura:

```json
{
  "title": "Nome do Pacote",
  "description": "Descrição do pacote...",
  "imagem": "URL da imagem principal",
  "images": [
    {
      "src": "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/sua-imagem-1/public",
      "text": "Texto que aparece no canto da imagem",
      "alt": "Descrição alternativa da imagem"
    },
    {
      "src": "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/sua-imagem-2/public", 
      "text": "Outro texto",
      "alt": "Outra descrição"
    },
    {
      "src": "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/sua-imagem-3/public",
      "text": "Terceiro texto", 
      "alt": "Terceira descrição"
    }
  ]
}
```

## Funcionalidades Implementadas

### 1. **Imagens Dinâmicas**
- Se o pacote tem imagens personalizadas no campo `images`, elas serão exibidas
- Se não tem imagens personalizadas, usa imagens padrão da pousada
- Suporta de 1 a 3 imagens (o layout se ajusta automaticamente)

### 2. **Texto Personalizado nas Imagens**
- Cada imagem pode ter um texto que aparece no canto superior direito
- O texto fica com fundo semitransparente para melhor legibilidade
- Se não especificar texto, fica em branco

### 3. **Título Real do Pacote**
- O título exibido é o campo `title` do pacote no Firebase
- Não usa mais o slug da URL, e sim o nome real do pacote

### 4. **Imagens Padrão (Fallback)**
Se um pacote não tiver imagens personalizadas, serão usadas estas imagens padrão:
1. Imagem geral da Pousada Le Ange
2. Imagem da Le Ange Mar
3. Imagem da Le Ange Serra

## Exemplo de Uso

### No Firebase Console:
1. Acesse a coleção `pacotes`
2. Selecione o documento do pacote que quer personalizar
3. Adicione o campo `images` com array de objetos conforme o exemplo acima

### Resultado:
- As imagens serão exibidas automaticamente na página do pacote
- O texto aparecerá sobre cada imagem
- O layout se ajustará conforme a quantidade de imagens (1, 2 ou 3)

## Propriedades Opcionais

- `text`: Texto que aparece na imagem (opcional)
- `alt`: Texto alternativo para acessibilidade (opcional, mas recomendado)
- `src`: URL da imagem (obrigatório)

Se não adicionar o campo `images` ou deixá-lo vazio, o sistema usará as imagens padrão automaticamente.
