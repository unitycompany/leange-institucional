# ImagePopup Component

Este é um componente de popup responsivo que exibe apenas uma imagem com um botão de fechar.

## Características

- ✅ **Responsivo**: Se adapta a diferentes tamanhos de tela
- ✅ **Múltiplas formas de fechar**: 
  - Clique no botão X
  - Clique fora da imagem
  - Tecla ESC
- ✅ **Acessível**: Inclui aria-labels e controle de foco
- ✅ **Animações suaves**: Transições CSS para uma experiência fluida
- ✅ **Previne scroll**: Bloqueia o scroll da página quando o popup está aberto

## Como usar

### 1. Importar o componente

```jsx
import ImagePopup from './components/ImagePopup';
```

### 2. Implementar no seu componente

```jsx
import React, { useState } from 'react';
import ImagePopup from './components/ImagePopup';

const MeuComponente = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [imageUrl, setImageUrl] = useState('');

    const abrirPopup = (url) => {
        setImageUrl(url);
        setShowPopup(true);
    };

    const fecharPopup = () => {
        setShowPopup(false);
        setImageUrl('');
    };

    return (
        <div>
            {/* Botão ou imagem para abrir o popup */}
            <button onClick={() => abrirPopup('https://exemplo.com/imagem.jpg')}>
                Abrir Popup
            </button>

            {/* Componente do Popup */}
            <ImagePopup
                show={showPopup}
                onClose={fecharPopup}
                imageUrl={imageUrl}
                imageAlt="Descrição da imagem"
            />
        </div>
    );
};
```

## Props

| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| `show` | boolean | ✅ | Controla se o popup está visível |
| `onClose` | function | ✅ | Função chamada quando o popup deve ser fechado |
| `imageUrl` | string | ✅ | URL da imagem a ser exibida |
| `imageAlt` | string | ❌ | Texto alternativo para a imagem (padrão: "Popup Image") |

## Exemplo de uso no projeto

Para ver um exemplo funcionando, acesse: `/popup-example`

## Personalização

O componente usa `styled-components`. Para personalizar o visual, você pode:

1. **Modificar as cores**: Altere as propriedades CSS nos styled-components
2. **Ajustar o tamanho**: Modifique `max-width` e `max-height` no `PopupContainer`
3. **Personalizar animações**: Ajuste as propriedades `transition` nos componentes

## Responsividade

O componente é totalmente responsivo:

- **Desktop**: Popup ocupa até 90% da viewport
- **Mobile**: Botão de fechar menor e melhor posicionamento
- **Todas as telas**: A imagem sempre mantém sua proporção original

## Dependências

- React
- styled-components (já incluído no projeto)
