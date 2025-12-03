# Guia: Como Adicionar Imagens aos Carrosséis dos Projetos

## Estrutura Implementada

Cada projeto de consultoria agora possui carrosséis de imagens dentro dos mockups de dispositivos (celular e computador).

## Onde Adicionar Suas Imagens

As imagens são configuradas no arquivo de idiomas: `src/components/LanguageProvider.tsx`

### Para o Projeto "Botão do Pânico":

#### Imagens do App Mobile (Celular):
Localize a linha `'consulting.panicButton.mobile.images'` e substitua as URLs:

```typescript
'consulting.panicButton.mobile.images': JSON.stringify([
  '/images/panico/mobile/tela-login.png',
  '/images/panico/mobile/tela-principal.png',
  '/images/panico/mobile/tela-historico.png'
]),
```

#### Imagens do Painel Web (Computador):
Localize a linha `'consulting.panicButton.web.images'` e substitua as URLs:

```typescript
'consulting.panicButton.web.images': JSON.stringify([
  '/images/panico/web/dashboard.png',
  '/images/panico/web/mapa.png',
  '/images/panico/web/relatorios.png'
]),
```

### Para o Projeto "Análise de Fraudes":

#### Imagens do Dashboard Web:
Localize a linha `'consulting.fraudAnalysis.web.images'` e substitua as URLs:

```typescript
'consulting.fraudAnalysis.web.images': JSON.stringify([
  '/images/fraudes/dashboard-principal.png',
  '/images/fraudes/analise-graficos.png',
  '/images/fraudes/alertas.png'
]),
```

## Como Organizar Suas Imagens

### Opção 1: Pasta Public (Recomendado)
Crie a estrutura de pastas dentro de `/public`:

```
/public
  /images
    /panico
      /mobile
        - tela-1.png
        - tela-2.png
        - tela-3.png
      /web
        - dashboard.png
        - mapa.png
    /fraudes
      - dashboard.png
      - graficos.png
```

E use URLs relativas:
```typescript
'/images/panico/mobile/tela-1.png'
```

### Opção 2: URLs Externas
Você pode usar URLs completas de serviços de hospedagem de imagens:
```typescript
'https://seu-servidor.com/imagens/projeto1.png'
```

## Quantidade de Imagens

- **Mínimo**: 1 imagem por carrossel
- **Recomendado**: 3-5 imagens por carrossel
- **Máximo**: Sem limite, mas 5-7 imagens são ideais para boa experiência

## Dimensões Recomendadas

### Para Imagens Mobile:
- **Largura**: 400-600px
- **Altura**: 800-1200px
- **Proporção**: 9:16 (formato vertical de celular)
- **Tamanho do mockup no modal**: 280x560px
- **Tamanho do mockup no card de preview**: 180x360px

### Para Imagens Desktop:
- **Largura**: 1200-1920px
- **Altura**: 700-1080px
- **Proporção**: 16:9 (formato panorâmico)
- **Tamanho do mockup no modal**: Largura máxima 700px, altura 400px (quando tem mobile) ou 380px (quando só tem desktop)
- **Tamanho do mockup no card de preview**: 280x180px (quando tem mobile) ou 400x250px (quando só tem desktop)

## Aplicar em Todos os Idiomas

Você precisa atualizar os arrays de imagens para cada idioma (pt, en, fr, es, it).

**Dica**: Use as mesmas URLs de imagens para todos os idiomas, apenas traduza os textos descritivos.

Exemplo:
```typescript
// Português (pt)
'consulting.panicButton.mobile.images': JSON.stringify([
  '/images/panico/mobile/tela-1.png',
  '/images/panico/mobile/tela-2.png'
]),

// Inglês (en) - mesmas imagens
'consulting.panicButton.mobile.images': JSON.stringify([
  '/images/panico/mobile/tela-1.png',
  '/images/panico/mobile/tela-2.png'
]),
```

## Resultado Final

Após adicionar suas imagens, cada projeto terá **dois níveis de visualização**:

### 1. Cards de Preview (Visualização Inicial)
Ao visualizar a lista de projetos, cada card mostrará:
- Mockups de dispositivos em tamanho menor (preview)
- Carrosséis funcionais com as imagens
- Navegação automática (4 segundos por imagem)
- Indicadores de páginas (bolinhas)

**Layout dos Cards:**
- **Botão do Pânico**: Celular (180x360px) + Desktop (280x180px) lado a lado
- **Análise de Fraudes**: Desktop (400x250px) centralizado

### 2. Modal Detalhado (Ao Clicar no Projeto)
Ao clicar em "Ver Detalhes", o modal mostrará:

**Botão do Pânico:**
- Bloco 1: Mockup de celular (280x560px) + texto descritivo ao lado
- Bloco 2: Mockup de computador (700x400px) em largura total

**Análise de Fraudes:**
- Um bloco: Mockup de computador (650x380px) + texto ao lado

### Recursos dos Carrosséis:
- Navegação automática (3.5 segundos por imagem no modal)
- Setas de navegação (← →) nos carrosséis desktop
- Indicadores de páginas (bolinhas) em todos os carrosséis
- Transições suaves e animadas
- Pausa automática ao passar o mouse

## Dúvidas?

As imagens atuais são placeholders do Pexels. Substitua pelas capturas de tela reais dos seus projetos!
