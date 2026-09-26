# Meus Cursos

Página do protótipo escolar disponível em `/meus-cursos`, dentro do layout autenticado.
Os dados vêm de `../../mocks/meus-cursos.mock.ts`; não há integração com backend.

## Comportamento

- As abas separam cursos em andamento, concluídos e salvos.
- Cursos sem progresso mostram “Não iniciado”, sem percentual ou última aula inexistentes.
- A data de conclusão aparece somente nos cursos concluídos.
- “Ver curso”, “Ver detalhes” e os itens dos cards laterais abrem um diálogo com informações do conteúdo.
- É possível salvar e remover cursos pelo destaque, pela lista e pelo diálogo.
- Os salvos usam estado local: alterações permanecem entre abas, mas são reiniciadas ao recarregar ou sair da página.
- “Ver todos os salvos” seleciona a aba Salvos. Os cards laterais mostram até três itens.
- “Explorar mais cursos” leva à rota `/cursos`, que ainda exibe a página “Em breve”.
- Reprodução de aulas e atualização real de progresso ficam para uma próxima etapa.

## Interface

O cabeçalho reutiliza a ilustração do Dashboard. Painéis, tipografia, cores e miniaturas
acompanham os padrões de Dashboard e Trilhas. As colunas da lista se adaptam à largura
do próprio card. O menu lateral e a barra superior continuam pertencendo ao layout compartilhado.

As abas aceitam setas esquerda/direita, Home e End. No diálogo, Tab e Shift+Tab percorrem
os botões; Escape, o botão Fechar e o clique no fundo fecham os detalhes. O foco retorna
ao botão de origem ou à aba selecionada quando o curso foi removido da lista.

## Verificação manual

1. Acesse a página após o login mock e confira as três abas.
2. Confira o destaque em 65%, sem data de conclusão, e as datas na aba Concluídos.
3. Abra um curso, salve-o e verifique sua presença na aba Salvos.
4. Remova os cursos salvos e confira o estado vazio.
5. Repita a navegação usando apenas o teclado, incluindo abrir e fechar os detalhes.
6. Confira a disposição dos cards em celular, tablet e desktop.

Para validar a compilação e o lint, execute `npm run build` e `npm run lint` em `frontend/`.
