# Avaliações

Página do protótipo escolar em `/avaliacoes`, protegida pela sessão mock existente.
Parte da versão que já contém Cursos e Meus Cursos; não substitui essas telas.

## Organização

- `../../types/assessment.ts`: contratos de avaliações, questões e tentativas.
- `../../mocks/avaliacoes.mock.ts`: oito avaliações de exemplo, com quatro questões cada.
- `assessment.ts`: filtros, transições de estado, notas, tentativas e indicadores.
- `components/`: cabeçalho ilustrado, resumo, filtros, lista, agenda, gráficos e diálogo.
- `AvaliacoesPage.tsx`: estado local e conexão entre os componentes.

## Fluxos

As avaliações podem estar pendentes, em andamento, concluídas ou agendadas. Os cards
de resumo filtram a lista; o card de nota média leva ao gráfico de desempenho.
A busca ignora acentos e pode ser combinada com tipo, curso/trilha e status.

“Iniciar” mostra as instruções antes de começar. As questões são de múltipla escolha
ou verdadeiro/falso. É possível voltar, mudar respostas, fechar e retomar o diálogo.
A entrega só é permitida quando todas as perguntas têm uma resposta válida.

Uma tentativa é consumida somente na entrega. O resultado inclui percentual,
aprovação conforme a nota mínima, respostas corretas e explicações. Em caso de
reprovação, uma nova tentativa é permitida até o limite de duas. Avaliações aprovadas
e tentativas esgotadas continuam disponíveis para consulta.

Indicadores, agenda e gráficos refletem as respostas entregues. A média usa a última
nota de cada avaliação no estado concluída. A evolução mostra as últimas seis
tentativas entregues. O gráfico de tipos considera as questões das oito avaliações.

## Limites do protótipo

Os dados e gabaritos são fictícios e ficam no frontend. Não há API, matrícula,
emissão de certificado nem atualização do progresso de outras telas.
O estado permanece ao fechar o diálogo e trocar filtros, mas é reiniciado ao sair
da página ou recarregar. A interface informa essa limitação durante a atividade.

O tempo exibido é estimado, sem cronômetro ou encerramento automático. As datas da
agenda são exemplos fixos; a avaliação agendada não é liberada automaticamente.
Esses controles dependerão do backend nas próximas etapas.

## Verificação

Execute em `frontend/`:

```bash
npm run test:avaliacoes
npm run test:cursos
npm run build
npm run lint
```

Os testes cobrem filtros, notas, tentativas, bloqueios de edição e entrega, retomada,
agendamento e imutabilidade. No navegador, confira também foco, Tab/Shift+Tab, Escape,
atualização dos indicadores, estado vazio e o layout entre 360 e 1440 pixels.
