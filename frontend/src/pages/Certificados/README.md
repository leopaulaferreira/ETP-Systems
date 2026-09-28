# Certificados

Tela do protótipo em `/certificados`, protegida pela sessão mock existente.
Segue os tokens visuais, o layout e os componentes por página das demais telas.

Os dados ficam em `../../mocks/certificados.mock.ts`: sete certificados concluídos
(48 horas), três cursos em andamento e 14 downloads demonstrativos. A busca ignora
acentos; status e ano de emissão podem ser combinados. Cursos em andamento não
possuem data de emissão. A ordenação mantém esses cursos depois dos concluídos,
exceto na ordenação alfabética.

Os indicadores filtram a lista ou abrem os detalhes de horas e o histórico.
Os certificados podem ser visualizados em diálogo e baixados em PDF. O PDF é
gerado localmente, sem dependências, e identifica o documento como demonstrativo.
Cursos em andamento exibem progresso e um acesso a Meus Cursos, sem permitir
download. O histórico conta solicitações de download, não confirma arquivos salvos.

Não há emissão oficial, verificação de códigos nem sincronização com as outras
telas ou API. Filtros e novos downloads são reiniciados ao sair da página.

Validação em `frontend/`: `npm run test:certificados`, `npm run build` e `npm run lint`.
