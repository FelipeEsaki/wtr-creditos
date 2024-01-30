const servicos = [
    {
        imagem: `//img.icons8.com/color/96/money-bag.png`,
        servico: 'Crédito Consignado',
        texto: `- Aposentados <br> - Pensionistas <br> - Servidores Públicos <br> - LOAS <br> - SIAPE`
    },
    {
        imagem: `//img.icons8.com/color/96/get-cash.png`,
        servico: 'Crédito Pessoal',
        texto: `- Débito na conta de luz <br> - Via cartão de crédito <br> - Débito em conta `
    },
    {
        imagem: `//img.icons8.com/color/96/cleaning-a-surface.png`,
        servico: 'Limpa Nome',
        texto: `O limpa nome é um serviço onde todas as suas <strong>dívidas serão colocadas em status de sigilo total</strong> durante 12 meses, elevando seu Score e <strong>facilitando a aprovação</strong> em operações financeiras.`
    },
    {
        imagem: `//img.icons8.com/color/96/farm.png`,
        servico: 'Crédito Rural',
        texto: `O crédito rural é um financiamento que <strong>auxilia produtores rurais</strong> à <strong>expandirem suas operações</strong>, fazer investimentos ou <strong>custear a produção.`
    },
    {
        imagem: `//img.icons8.com/fluency/100/security-checked--v1.png`,
        servico: 'Seguros',
        texto: `A Agi Capital possui <strong>todos os tipos de seguros</strong> e <strong>mais de 10 seguradoras</strong> parceiras para melhor atender sua necessidade!`
    },
    {
        imagem: `//img.icons8.com/bubbles/100/check.png`,
        servico: 'Consórcios',
        texto: `A Agi Capital oferece a <strong>melhor opção de consórcio</strong> de acordo com sua necessidade. Trabalhamos com todos os tipos de consórcios!`
    },
    {
        imagem: `//img.icons8.com/bubbles/100/solar-panel.png`,
        servico: 'Energia Solar',
        texto: `Já pensou em <strong>reduzir sua conta de energia em até 95%</strong>? Fazemos seu projeto e financiamento do investimento!`
    },
    {
        imagem: `//img.icons8.com/stickers/100/cash.png`,
        servico: 'Capital de Giro',
        texto: `O capital de giro é um produto para <strong>atender as necessidades de caixa da sua empresa</strong> e <strong>custear o ciclo operacional</strong> para te ajudar a honrar com seus compromissos!`
    },
    {
        imagem: `//img.icons8.com/bubbles/100/car.png`,
        servico: 'Financiamento Veicular',
        texto: `Está na hora de adquirir seu <strong>novo veículo</strong>! Com a Agi Capital você tem as <strong>melhores taxas</strong> e opções de financiamento!`
    },
    {
        imagem: `//img.icons8.com/clouds/100/cottage.png`,
        servico: 'Financiamento Residencial',
        texto: `Está na hora de adquirir sua <strong>nova casa</strong>! Com a Agi Capital você tem as <strong>melhores taxas</strong> e opções de financiamento e refinanciamento residencial!`
    },
    {
        imagem: `//img.icons8.com/dusk/100/insert-card.png`,
        servico: 'Maquininha de Cartão',
        texto: `Peça sua maquininha de cartão e <strong>aumente suas vendas</strong>! Temos <strong>diversas opções para melhor atendê-lo</strong>!`
    },
];

for (const servico of servicos) {
    const content = `<div class="servico">
    <img width="96" height="96" src="https:${servico.imagem}" alt="get-cash--v1"/>
    <h2>${servico.servico}</h2>
    <p>${servico.texto} </p>
</div>`

    document.querySelector('.servicos').innerHTML += content;
}