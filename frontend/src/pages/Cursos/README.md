# Cursos

Catálogo do protótipo escolar em `/cursos`, dentro do layout autenticado existente.
O mock `../../mocks/cursos.mock.ts` contém 24 cursos individuais; o destaque também
pertence a esse catálogo. A ordem inicial do mock representa a relevância.

## Funcionalidades

- Cabeçalho ilustrado, destaque de Cibersegurança e grade responsiva de cards.
- Busca por título, descrição e categoria, ignorando acentos e diferenças de caixa.
- Filtros combinados de categoria e nível, acessíveis pelo botão Filtrar.
- Ordenação por relevância, popularidade, menor duração ou nome.
- Oito itens inicialmente; “Ver mais cursos” acrescenta oito por vez até o total.
- Alterar busca, filtros ou ordenação reinicia a quantidade exibida em oito.
- O destaque fica oculto durante uma busca ou filtro para não exibir conteúdo fora dos resultados.
- Estado vazio com ação para limpar a seleção e voltar ao catálogo completo.
- “Ver curso” abre os dados do item em um diálogo com foco controlado e fechamento por Escape.
- “Acessar Meus Cursos” navega para `/meus-cursos`.

Busca, filtros e ordenação são locais e reiniciam ao sair da página ou recarregar.
O diálogo é uma apresentação do curso: não realiza matrícula nem reproduz aulas.
Os números de alunos são fictícios. A integração com backend fica para uma etapa futura.

## Validação

Execute em `frontend/`:

```bash
npm run build
npm run lint
npm run test:cursos
```

Os testes verificam os dados, busca, filtros combinados, ordenação sem alterar o mock
e duração fracionada. No navegador, confira também o carregamento de 8/16/24 cards,
o estado vazio, a navegação por teclado nos detalhes e as larguras de celular a desktop.
