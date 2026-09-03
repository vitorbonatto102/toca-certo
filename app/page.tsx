const CHECKOUT_URL = "https://pay.hotmart.com/N107012543U";
const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=555591572718&text=Ol%C3%A1%21%20Gostaria%20de%20entrar%20em%20contato%20sobre%20o%20Toca%20Certo&type=phone_number&app_absent=0";

const differences = [
  ["01", "O sistema inteiro entra na análise", "Toca-discos, caixas, amplificação, cabos e acessórios são escolhidos como partes da mesma arquitetura."],
  ["02", "A recomendação parte da sua realidade", "Seu orçamento, espaço, equipamentos atuais e nível de praticidade definem o projeto — não uma lista genérica."],
  ["03", "Você entende a escolha e o próximo passo", "Cada indicação vem com vantagens, limitações e um caminho de evolução para não precisar trocar tudo depois."],
  ["04", "O preço também faz parte da recomendação", "Comparamos preços e condições em lojas confiáveis para buscar a melhor oportunidade possível no momento da pesquisa — sem depender de uma única loja."],
];

const savings = [
  ["Garimpo das melhores condições", "Comparo preço anunciado, Pix, cartão, frete, voltagem, garantia e itens incluídos.", "Você recebe referências reais para começar sua compra."],
  ["O custo do sistema completo", "Um toca-discos pode parecer barato isoladamente, mas o sistema também pode exigir caixas, amplificação, pré-phono, cabos e adaptadores.", "Você sabe quanto precisará investir antes de decidir."],
  ["Aproveitamento do que você já possui", "Caixas, receivers, amplificadores e outros equipamentos existentes entram na análise quando ainda fazem sentido para o novo sistema.", "Você não compra novamente aquilo que ainda pode ser bem utilizado."],
  ["Compra planejada para não gastar duas vezes", "Se o orçamento pedir, a compra pode ser organizada por etapas para evitar componentes provisórios que logo seriam substituídos.", "Você começa na sua realidade sem perder de vista o próximo passo."],
];

const comparison = [
  ["Ponto de partida", "Dezenas de vídeos, listas e opiniões", "Seu orçamento, espaço e equipamentos"],
  ["Compatibilidade", "Você precisa conferir componente por componente", "O sistema é analisado como um conjunto"],
  ["Custo real", "Aparecem custos extras depois da escolha", "O valor do sistema completo entra na conta"],
  ["Uso do orçamento", "É fácil investir demais em um componente", "Você vê onde economizar, investir ou esperar"],
  ["Onde comprar", "Uma oferta isolada pode parecer a melhor", "Preços e condições são comparados em lojas confiáveis"],
  ["Decisão", "Mais opções podem aumentar a dúvida", "Três caminhos comparados e explicados"],
  ["Futuro", "O upgrade é pensado somente depois", "A evolução já faz parte do projeto"],
];

const deliverables = [
  ["Diagnóstico personalizado", "Uma leitura clara do seu momento, prioridades, equipamentos atuais e restrições."],
  ["Página exclusiva", "Seu plano fica organizado em um endereço individual, feito para consultar durante a compra e a montagem."],
  ["Até três sistemas completos", "Custo-benefício, recomendação principal e opção evolutiva — quando esses três caminhos fizerem sentido."],
  ["Comparativo e mapa de compras", "Preços pesquisados, recursos, links, cabos, adaptadores e itens opcionais reunidos no mesmo lugar."],
  ["Conexão e explicações", "Um diagrama simples mostra como tudo se liga; os textos explicam escolhas, limitações e alternativas."],
  ["Plano de upgrades e suporte", "Ordem de evolução, uma rodada de dúvidas e uma revisão relacionada ao diagnóstico original."],
];

const faqs = [
  ["É um curso sobre toca-discos?", "Não. Você responde ao diagnóstico e recebe um projeto feito para a sua situação. As explicações servem para tornar a decisão compreensível, não para obrigar você a estudar áudio."],
  ["Posso pesquisar tudo sozinho?", "Sim. O Toca Certo existe para economizar esse tempo, organizar as informações e reduzir o risco de descobrir incompatibilidades somente depois da compra."],
  ["Tenho um toca-discos ou caixas antigas. Dá para aproveitar?", "A análise considera marca, modelo, estado aparente e fotos das conexões. O relatório mostra o que pode continuar no sistema e onde estão as limitações."],
  ["Existe um orçamento mínimo?", "Não existe um valor obrigatório. Se o orçamento não permitir montar agora todo o sistema desejado, o plano poderá organizar uma compra por etapas e mostrar com clareza o que ainda ficará faltando."],
  ["Vocês indicam equipamentos novos e usados?", "As duas possibilidades podem ser consideradas, de acordo com sua preferência, a segurança da compra e a disponibilidade encontrada durante a análise."],
  ["O valor dos equipamentos está incluído?", "Não. O preço da oferta é pelo diagnóstico e pelo projeto. Os equipamentos são comprados separadamente nas lojas escolhidas pelo cliente."],
  ["Vou precisar fazer videochamada?", "Não. O processo começa pelo questionário. Entrarei em contato somente se alguma resposta precisar ser esclarecida antes da análise."],
  ["Como receberei meu projeto?", "Você receberá por e-mail uma página exclusiva com seu plano completo. O prazo é de até 5 dias úteis após o envio integral do questionário."],
  ["Vocês recebem comissão nas indicações?", "Alguns links poderão ser comissionados e serão identificados. Isso não substitui os critérios de compatibilidade nem impede a apresentação de alternativas sem comissão."],
  ["O serviço inclui instalação ou conserto?", "Não. O projeto orienta a conexão e a compra, mas não inclui instalação presencial, reparo eletrônico, avaliação elétrica ou tratamento acústico."],
  ["Posso pedir alterações?", "Está incluída uma rodada de dúvidas e uma revisão relacionada às informações enviadas originalmente. Uma mudança completa de orçamento ou objetivo poderá exigir uma nova análise."],
  ["E se a recomendação não fizer sentido?", "Você poderá pedir a revisão incluída. Se, mesmo depois dela, o projeto não responder adequadamente ao diagnóstico enviado, o valor será devolvido."],
];

export default function Home() {
  return <main className="v2-page" id="topo">
    <section className="v2-hero-simple">
      <div className="v2-shell v2-hero-simple-inner">
        <figure className="v2-hero-simple-logo"><img src="/VTSD%20TOCACERTO/logo.png" alt="Toca Certo" width="1536" height="1024" fetchPriority="high" /></figure>
        <div className="v2-hero-simple-copy">
          <h1>
            <span>Você não precisa</span>
            <span>virar especialista</span>
            <span>em áudio para montar</span>
            <span>o <em>setup certo.</em></span>
          </h1>
          <p>
            <span>Você me conta seu orçamento, espaço e o que</span>
            <span>já possui. Eu preparo o plano completo para</span>
            <span>seus discos tocarem do jeito <strong>certo.</strong></span>
          </p>
          <a className="v2-button" href={CHECKOUT_URL}>Quero montar meu sistema certo <span>→</span></a>
          <small className="v2-hero-simple-meta">Pagamento único de R$ 67 <i>·</i> Tudo online</small>
        </div>
      </div>
    </section>

    <section className="v2-problem">
      <div className="v2-shell">
        <header className="v2-section-head">
          <span className="v2-number">02</span>
          <div className="v2-emotional-copy"><span className="v2-overline">Você já investiu na coleção…</span><h2>Agora falta um sistema pensado para ouvi-la.</h2><p>Talvez você já tenha pago R$ 300, R$ 400 ou até R$ 500 por um disco especial, mas ainda esteja adiando a compra do primeiro toca-discos — ou usando um equipamento improvisado sem saber se ele realmente é adequado para sua coleção.</p><p>O problema é que escolher apenas um toca-discos pode não resolver. Dependendo do modelo, você também precisará de caixas, pré-phono, amplificação, cabos e componentes compatíveis entre si.</p></div>
        </header>
        <div className="v2-chaos-clarity">
          <article className="v2-chaos-card">
            <figure><img src="/VTSD%20TOCACERTO/comparativo-caos.webp" alt="Equipamentos e conexões apresentados de forma confusa, representando a compra sem planejamento" width="1100" height="1100" loading="lazy" /></figure>
            <div className="v2-contrast-copy"><span>Sem um plano</span><h3>Muitas peças. Pouca clareza.</h3><ul><li>Muitas dúvidas antes de escolher</li><li>Conexões confusas e componentes incompatíveis</li><li>Risco de escolhas erradas e gastos repetidos</li><li>Frustração antes do primeiro disco tocar</li></ul></div>
          </article>
          <div className="v2-versus" aria-hidden="true">VS.</div>
          <article className="v2-clarity-card">
            <figure><img src="/VTSD%20TOCACERTO/comparativo-clareza.webp" alt="Equipamentos conectados em uma sequência clara e compatível" width="1100" height="1100" loading="lazy" /></figure>
            <div className="v2-contrast-copy"><span>Com o Toca Certo</span><h3>Cada escolha ocupa o lugar certo.</h3><ul><li>Um caminho claro dentro do seu orçamento</li><li>Conexões corretas e compatibilidade confirmada</li><li>Compras organizadas na ordem certa</li><li>Som de verdade, pronto para aproveitar</li></ul></div>
          </article>
        </div>
        <strong className="v2-contrast-conclusion">O Toca Certo ajuda você a descobrir o sistema completo que faz sentido para seu espaço, orçamento e forma de ouvir música.</strong>
        <div className="v2-solution-intro">
          <div><span className="v2-overline">É aqui que entra o Toca Certo</span><h2>Você me conta sua realidade.<br/>Eu organizo a decisão inteira.</h2></div>
          <div><p>Você informa seu espaço, orçamento, maneira de ouvir música e o que já possui. A partir disso, eu preparo um plano completo do sistema que faz sentido para você — incluindo o que comprar, o que reaproveitar e o que pode esperar.</p><a className="v2-inline-cta" href={CHECKOUT_URL}>Quero receber minha recomendação <span>→</span></a></div>
        </div>
      </div>
    </section>

    <section className="v2-differences v2-shell">
      <header className="v2-section-head">
        <span className="v2-number">04</span>
        <div><span className="v2-overline">O que tem de diferente?</span><h2>Uma recomendação não começa pelo produto. Começa pela pessoa.</h2></div>
      </header>
      <div className="v2-difference-list">{differences.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="v2-practice">
      <div className="v2-shell">
        <header className="v2-section-head v2-head-light">
          <span className="v2-number">05</span>
          <div><h2>Você recebe uma página exclusiva com seu plano completo.</h2></div>
        </header>
        <figure className="v2-section-art v2-practice-art"><img src="/VTSD%20TOCACERTO/4.png" alt="Exemplo da página personalizada do Toca Certo aberta em computador e celular" width="1448" height="1086" loading="lazy" /><figcaption>Exemplo ilustrativo da página individual entregue ao cliente.</figcaption></figure>
      </div>
    </section>

    <section className="v2-savings">
      <div className="v2-shell">
        <header className="v2-savings-head">
          <h2>Comprar certo também é <em>economizar.</em></h2>
          <p>Seu orçamento rende melhor quando preço, compatibilidade e próximos passos são analisados juntos.</p>
        </header>
        <div className="v2-savings-grid">{savings.map(([title, copy, result], index) => <article key={title}>
          <span className={`v2-saving-icon v2-saving-icon-${index + 1}`} role="img" aria-label="Ilustração do benefício" />
          <small>0{index + 1}</small>
          <h3>{title}</h3>
          <p>{copy}</p>
          <strong><i>✦</i>{result}</strong>
        </article>)}</div>
        <div className="v2-savings-close"><div><strong>Mais do que procurar o menor preço, eu faço seu orçamento trabalhar melhor.</strong><p>O objetivo é encontrar a melhor combinação possível dentro do valor que você pretende investir — aproveitando boas oportunidades e evitando gastos desnecessários.</p></div><a className="v2-button" href={CHECKOUT_URL}>Quero aproveitar melhor meu orçamento <span>→</span></a></div>
      </div>
    </section>

    <section className="v2-comparison">
      <div className="v2-shell">
        <header className="v2-section-head"><span className="v2-number">07</span><div><span className="v2-overline">Pesquisar sozinho ou receber um plano?</span><h2>Informação grátis existe. O difícil é transformar tudo em uma decisão.</h2></div></header>
        <div className="v2-table"><div className="v2-table-head"><span></span><strong>Pesquisando sozinho</strong><strong>Com o Toca Certo</strong></div>{comparison.map(([label, alone, guided]) => <div className="v2-table-row" key={label}><b>{label}</b><span>{alone}</span><span>{guided}</span></div>)}</div>
        <p className="v2-comparison-close">Por R$ 67, basta o projeto evitar uma pequena compra desnecessária para começar a se pagar — e uma decisão errada pode custar centenas ou até milhares de reais.</p>
      </div>
    </section>

    <section className="v2-delivery v2-shell">
      <header className="v2-section-head"><span className="v2-number">08</span><div><h2>Um projeto para comprar, conectar e evoluir.</h2><p>Toda a análise técnica e a pesquisa de equipamentos reunidas em um material feito para seu ambiente, seu orçamento e sua forma de ouvir música.</p></div></header>
      <figure className="v2-section-art v2-delivery-art"><img src="/VTSD%20TOCACERTO/7.png" alt="Visão dos entregáveis do Toca Certo: diagnóstico, página exclusiva, opções de setup, mapa de compra, conexão e justificativas" width="1448" height="1086" loading="lazy" /></figure>
      <div className="v2-delivery-grid">{deliverables.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="v2-about">
      <div className="v2-shell v2-about-grid">
        <figure className="v2-about-photo"><img src="/VTSD%20TOCACERTO/8.png" alt="Vitor segurando um disco de vinil" width="1024" height="1536" loading="lazy" /></figure>
        <div className="v2-about-copy"><span className="v2-number">09</span><span className="v2-overline">Oi, eu sou o Vitor</span><h2>Minha relação com o áudio começou muito antes do Toca Certo.</h2><p>Cresci próximo desse universo porque meu pai era marceneiro e construía caixas de som. Desde cedo, áudio deixou de ser apenas uma forma de ouvir música e passou a despertar minha curiosidade.</p><p>Mais tarde, estudei Engenharia Acústica durante três anos, aprofundando meu conhecimento sobre som, reprodução e funcionamento de sistemas de áudio.</p><p>Ao trabalhar diariamente com discos por meio da Vivinil, percebi que quem começa no vinil encontra muitas recomendações isoladas e pouca orientação para montar um sistema completo dentro da própria realidade. O Toca Certo nasceu para transformar pesquisa e conhecimento técnico em uma recomendação clara, prática e personalizada.</p></div>
      </div>
    </section>

    <section className="v2-offer" id="oferta">
      <div className="v2-shell v2-offer-grid">
        <div className="v2-offer-copy"><span className="v2-number">10</span><span className="v2-overline">Edição beta</span><h2>Decida primeiro.<br/>Compre depois.</h2><p>Receba uma página exclusiva com até três sistemas completos, selecionados de acordo com seu orçamento, ambiente, preferências e equipamentos atuais.</p><p>Se o projeto evitar uma compra desnecessária ou encontrar uma combinação melhor pelo mesmo orçamento, os R$ 67 podem voltar para você antes mesmo de o primeiro disco tocar.</p><div className="v2-price"><small>Pagamento único</small><span>R$</span><strong>67</strong></div><p className="v2-timing">O prazo de até 5 dias úteis começa depois do envio completo do questionário.</p></div>
        <div className="v2-offer-card"><div className="v2-offer-label">Primeiras vagas</div><h3>Projeto Toca Certo</h3><ul><li>Página exclusiva com seu plano</li><li>Diagnóstico personalizado</li><li>Até três sistemas completos</li><li>Comparativo de preços e recursos</li><li>Pesquisa de oportunidades em lojas confiáveis</li><li>Lista completa de compra</li><li>Diagrama de conexão</li><li>Explicação das escolhas e limitações</li><li>Plano de upgrades</li><li>Uma rodada de dúvidas</li><li>Uma revisão da recomendação</li></ul><a className="v2-button" href={CHECKOUT_URL}>Quero meu Toca Certo <b>→</b></a><small>Os equipamentos não estão incluídos. Pagamento seguro pela Hotmart.</small></div>
      </div>
    </section>

    <section className="v2-faq-section">
      <div className="v2-faq v2-shell"><header><span className="v2-number">11</span><span className="v2-overline">Perguntas frequentes</span><h2>O que ainda precisa ficar claro?</h2></header><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div>
    </section>

    <section className="v2-final-section"><div className="v2-final v2-shell"><h2>Evite descobrir que faltava algo tarde demais.</h2><a href={CHECKOUT_URL}>Quero montar o sistema certo <span>→</span></a></div></section>
    <a className="v2-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Falar com o Toca Certo pelo WhatsApp" title="Falar pelo WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648a9.86 9.86 0 0 1-1.323-4.964c.002-5.45 4.436-9.886 9.888-9.886 2.64 0 5.122 1.03 6.988 2.898a9.83 9.83 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.82 11.82 0 0 0 20.47 3.488Z"/></svg>
      <span>Fale comigo</span>
    </a>
  </main>;
}
