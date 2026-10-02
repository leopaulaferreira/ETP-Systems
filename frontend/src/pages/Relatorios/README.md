# Relatórios

Tela protegida em `/relatorios`, integrada ao layout e à navegação existentes.

Os dados em `../../mocks/relatorios.mock.ts` representam um recorte demonstrativo de
2024. O período selecionado atualiza os indicadores, a evolução mensal e os
certificados por trilha. O filtro de trilha afeta apenas os dados de certificados;
os demais indicadores mostram `—` para evitar associá-los a uma trilha sem dados.

O status dos cursos, o ranking de aprendizes e os cursos populares são panoramas
demonstrativos fixos, independentes do período. Os links de detalhes abrem os
valores em diálogos. Os gráficos são acessíveis por descrição e permanecem
roláveis horizontalmente em telas estreitas.

Esta página ainda não consulta uma API nem compartilha estado com Cursos,
Avaliações, Certificados ou Meus Cursos. As datas e quantidades são exemplos;
ao integrar o backend, deverão vir de uma fonte comum. Não há dados reais de
outros aprendizes no ranking.
