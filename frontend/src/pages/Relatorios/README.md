# Relatórios

Tela protegida em `/relatorios`, integrada ao layout e à navegação existentes.

Os dados em `../../mocks/relatorios.mock.ts` representam um recorte demonstrativo de
2024. O período selecionado atualiza os indicadores, a evolução mensal e os
certificados por trilha. O filtro de trilha afeta apenas os certificados. Cursos,
horas e trilhas concluídas mantêm os totais do período, identificados nos cards.

O gráfico de evolução alterna entre emissões mensais e o acumulado dentro do
período. Os pontos podem ser selecionados com mouse, toque e teclado. No celular,
um seletor de mês facilita a consulta. A distribuição por trilha usa barras
horizontais que se ajustam à largura disponível.

A ação **Exportar CSV** baixa as linhas mensais e os totais correspondentes aos
filtros. O arquivo usa UTF-8 com BOM, separador `;` e cabeçalhos que distinguem os
certificados filtrados dos totais de cursos, horas e trilhas.

O status dos cursos, o ranking e os cursos populares são panoramas fixos,
independentes do período. Os botões de detalhes abrem os valores em diálogos.
Os painéis compartilham `ReportPanel`, e a tela reaproveita os avatares, as
ilustrações dos cursos e o diálogo existentes.

Esta página ainda não consulta uma API nem compartilha estado com Cursos,
Avaliações, Certificados ou Meus Cursos. As datas e quantidades são exemplos;
ao integrar o backend, deverão vir de uma fonte comum. Não há dados reais de
outros aprendizes no ranking.
