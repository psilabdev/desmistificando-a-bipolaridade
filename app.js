
const CHARACTERS={
  rafa:{name:'Rafa',img:'assets/rafa.webp'},
  bia:{name:'Bia',img:'assets/bia.webp'},
  maya:{name:'Dra. Maya',img:'assets/maya.webp'}
};

const EPISODE_VISUALS=[
  {title:'Estabilidade',tag:'Entre episódios',cls:'stable',img:'assets/episode_stability.webp',items:['Humor e energia mais próximos do habitual','Rotina e sono mais regulados','Não significa “cura” ou ausência definitiva de risco']},
  {title:'Hipomania',tag:'Ativação mais leve',cls:'hypo',img:'assets/episode_hypomania.webp',items:['Mais energia e atividade','Menor necessidade de sono','Fala e pensamentos mais rápidos','Mudança clara, sem prejuízo grave típico da mania']},
  {title:'Mania',tag:'Ativação intensa',cls:'mania',img:'assets/episode_mania.webp',items:['Humor elevado, expansivo ou irritável','Energia muito aumentada e pouco sono','Impulsividade, grandiosidade ou decisões de risco','Pode causar prejuízo importante, psicose ou necessidade de internação']},
  {title:'Depressão',tag:'Polo depressivo',cls:'dep',img:'assets/episode_depression.webp',items:['Humor deprimido ou perda de interesse','Baixa energia e dificuldade de concentração','Mudanças no sono e no apetite','Pode haver desesperança e pensamentos de morte']}
];

const PHASES=[
{
 id:1,title:'O diagnóstico não é um rótulo',subtitle:'Primeiro, separar Transtorno Bipolar das mudanças comuns de humor.',img:'assets/p1.webp',speaker:'rafa',
 dialogue:'“Quando falaram em bipolaridade, eu pensei: então qualquer mudança de humor minha vai virar sintoma?”',badge:'Mapa do Humor',icon:'🧭',
 lessons:[
  ['Mais do que “altos e baixos”','O Transtorno Bipolar envolve episódios com mudanças marcantes de humor, energia, atividade e pensamento. O que importa é o conjunto, a duração, a intensidade e o impacto no funcionamento.'],
  ['Existem apresentações diferentes','No Transtorno Bipolar I há episódio maníaco. No Bipolar II há episódios depressivos e hipomaníacos, sem episódio maníaco completo. A ciclotimia envolve oscilações recorrentes que não atingem critérios completos de episódios.'],
  ['Diagnóstico é longitudinal','Nenhum sintoma isolado, teste online ou dia ruim confirma bipolaridade. A avaliação considera história, padrão dos episódios, contexto, prejuízo, outras condições e uso de substâncias.']
 ],
 key:'Ponto-chave: aprender sinais ajuda no cuidado, mas reconhecer sinais não é o mesmo que fazer diagnóstico.',
 takeaway:'Bipolaridade não é sinônimo de “mudar de humor”. O diagnóstico depende de episódios e de avaliação clínica ao longo do tempo.',
 qs:[
  {scene:'Bia tenta resumir o diagnóstico para a família.',q:'Qual frase é a mais adequada?',opts:['“Bipolaridade é mudar de opinião ou de humor várias vezes no mesmo dia.”','“Bipolaridade envolve episódios com mudanças importantes de humor, energia e funcionamento.”','“Qualquer pessoa muito emotiva é bipolar.”','“Se alguém está animado, provavelmente está em mania.”'],a:1,
   fb:['Mudanças cotidianas não definem o transtorno. O foco está em episódios e mudanças clinicamente relevantes.','Isso. O diagnóstico considera padrões de humor, energia, atividade e impacto no funcionamento.','Emotividade não equivale a Transtorno Bipolar.','Animação isolada não é mania. É preciso avaliar um conjunto de sinais, duração e impacto.']},
  {scene:'Dra. Maya explica que “bipolaridade” não é uma única apresentação.',q:'Qual alternativa descreve corretamente o Transtorno Bipolar I?',opts:['É definido pela presença de pelo menos um episódio maníaco.','É definido apenas por episódios depressivos.','É o mesmo que ciclotimia.','Exige que a pessoa alterne de humor todos os dias.'],a:0,
   fb:['Correto. O episódio maníaco é central para o diagnóstico de Transtorno Bipolar I.','Episódios depressivos podem ocorrer, mas não definem sozinhos o Bipolar I.','Ciclotimia é uma condição distinta dentro do espectro bipolar.','Oscilações diárias não são um critério definidor.']},
  {scene:'Depois de um prazo de trabalho, Rafa dormiu pouco por duas noites e ficou mais acelerado.',q:'Isso, sozinho, confirma um episódio bipolar?',opts:['Sim, qualquer redução do sono confirma hipomania.','Sim, se a pessoa se sentir produtiva.','Não. É necessário avaliar padrão, duração, outros sintomas, contexto e impacto.','Não, porque sono nunca tem relação com episódios de humor.'],a:2,
   fb:['Sono reduzido pode ser uma pista, mas não fecha diagnóstico isoladamente.','Produtividade também pode ocorrer fora de episódios.','Exatamente. O diagnóstico exige avaliação clínica contextual e longitudinal.','Mudanças no sono podem ser relevantes, mas precisam ser interpretadas em conjunto.']}
 ]
},
{
 id:2,title:'Lendo os episódios de humor',subtitle:'Rafa e Dra. Maya revisam momentos diferentes da história para entender padrões.',img:'assets/p2.webp',speaker:'maya',
 dialogue:'“Não vamos transformar cada emoção em sintoma. Vamos observar conjuntos de mudanças e o quanto elas alteraram a vida de Rafa.”',badge:'Lente dos Episódios',icon:'🔎',
 lessons:[
  ['Mania','Não é simplesmente “estar muito feliz”. Pode envolver humor elevado, expansivo ou irritável, aumento marcante de energia, menor necessidade de sono, fala acelerada, distração, grandiosidade e comportamentos de risco. Em quadros graves pode haver psicose ou necessidade de internação.'],
  ['Hipomania','Pode envolver humor elevado ou irritável, mais energia e atividade, menor necessidade de sono, mais fala e pensamentos acelerados. É menos grave que a mania e não causa o mesmo nível de prejuízo, mas ainda representa uma mudança clara em relação ao funcionamento habitual.'],
  ['Depressão e características mistas','Episódios depressivos podem envolver tristeza ou irritabilidade, perda de interesse, fadiga, alterações de sono, culpa, dificuldade de concentração e pensamentos de morte. Também podem existir episódios “com características mistas”, quando aparecem sintomas do polo oposto.']
 ],
 key:'Ponto-chave: a diferença entre estados não está apenas em “sentir-se bem ou mal”, mas no padrão de sintomas, intensidade, duração e impacto.',
 takeaway:'Mania, hipomania e depressão têm padrões diferentes. “Características mistas” descrevem a presença simultânea de sintomas do polo oposto.',
 qs:[
  {scene:'No diário antigo, Rafa descreveu vários dias com pouquíssimo sono, fala muito acelerada, sensação de capacidade extraordinária e gastos impulsivos que trouxeram prejuízo importante.',q:'Qual conceito melhor organiza esse conjunto de sinais?',opts:['Oscilação comum de humor','Episódio maníaco','Timidez social','Cansaço normal'],a:1,
   fb:['O conjunto descrito vai além de uma variação cotidiana.','Boa leitura. O conjunto de energia elevada, menor necessidade de sono, grandiosidade, impulsividade e prejuízo é compatível com mania e exige avaliação profissional.','Timidez não explica esse padrão.','O padrão descrito não é explicado por cansaço comum.']},
  {scene:'Em outro período, Rafa teve alguns dias de energia e sociabilidade acima do habitual, dormiu menos e ficou mais falante, mas sem prejuízo marcante, psicose ou necessidade de internação.',q:'Qual termo é mais compatível com esse padrão, dentro do espectro bipolar?',opts:['Hipomania','Mania grave','Episódio depressivo','Estabilidade obrigatória'],a:0,
   fb:['Isso. Hipomania envolve mudança clara, porém menos grave que mania.','O cenário não descreve o nível de gravidade típico de mania grave.','O padrão apresentado é de ativação, não de depressão.','Mudança clara do funcionamento não é simplesmente estabilidade.']},
  {scene:'Durante um período de humor deprimido, Rafa relata também agitação e pensamentos muito acelerados.',q:'Qual ideia é importante lembrar?',opts:['Sintomas de polos diferentes nunca aparecem juntos.','Isso prova que o diagnóstico está errado.','Podem existir episódios com características mistas, que precisam ser avaliados clinicamente.','Agitação sempre significa mania completa.'],a:2,
   fb:['Podem ocorrer sintomas do polo oposto durante um episódio.','A presença de sintomas mistos não invalida automaticamente o diagnóstico.','Correto. “Com características mistas” é um especificador clínico importante.','Agitação isolada não define mania.']}
 ]
},
{
 id:3,title:'As pistas aparecem no cotidiano',subtitle:'A família quer aprender a perceber mudanças cedo, sem vigiar Rafa.',img:'assets/p3.webp',speaker:'bia',
 dialogue:'“Eu quero ajudar, mas não quero transformar cada noite mal dormida numa crise. O que vale a pena observar?”',badge:'Bússola de Sinais',icon:'🧭',
 lessons:[
  ['Observe mudanças em relação ao habitual','Sinais úteis são mudanças persistentes e incomuns para aquela pessoa: sono, energia, fala, atividade, irritabilidade, isolamento, gastos, impulsividade ou perda de interesse.'],
  ['Monitore, não diagnostique','Registrar humor, sono, energia, rotina e acontecimentos relevantes pode ajudar a perceber padrões e melhorar a conversa com a equipe de saúde. Um registro não substitui avaliação clínica.'],
  ['Contexto importa','Estresse, privação de sono, álcool e outras drogas podem influenciar sintomas e curso do transtorno. Outras condições também podem coexistir ou produzir sintomas parecidos.']
 ],
 key:'Ponto-chave: o melhor sinal de alerta costuma ser uma mudança significativa em relação ao padrão habitual da própria pessoa.',
 takeaway:'Sono, energia, comportamento, impulsividade e humor podem funcionar como sinais de alerta quando mudam de modo persistente em relação ao padrão habitual.',
 qs:[
  {scene:'Bia percebe que Rafa dormiu 3 horas por noite durante vários dias, está muito mais acelerado e começou a fazer compras incomuns.',q:'Qual atitude é mais coerente com psicoeducação?',opts:['Ignorar porque sono não importa.','Observar o conjunto de mudanças e conversar com Rafa sobre procurar orientação da equipe.','Concluir sozinha que é mania e anunciar o diagnóstico.','Confiscar todos os objetos pessoais sem conversar.'],a:1,
   fb:['Sono pode ser uma pista importante quando muda muito em relação ao habitual.','Isso. Observar padrões e favorecer contato com a equipe é mais útil do que diagnosticar por conta própria.','Familiares não devem fechar diagnóstico com base em sinais isolados.','Apoio não é sinônimo de controle indiscriminado.']},
  {scene:'Rafa decide montar um registro simples para levar às consultas.',q:'Qual combinação tende a ser mais útil?',opts:['Apenas “dia bom” ou “dia ruim”.','Sono, humor, energia, nível de atividade/impulsividade e acontecimentos relevantes.','Somente peso corporal.','A opinião de outras pessoas, sem registrar a própria experiência.'],a:1,
   fb:['Um registro tão genérico perde informações importantes.','Ótimo. Esses dados podem ajudar a observar padrões sem transformar o diário em ferramenta diagnóstica.','Peso pode ser relevante em alguns contextos clínicos, mas não resume a variação de humor.','A percepção de outras pessoas pode ajudar, mas não substitui a experiência da própria pessoa.']},
  {scene:'Depois de uma semana muito estressante, Rafa percebe piora do sono e irritabilidade.',q:'Qual interpretação é mais equilibrada?',opts:['Estresse sempre causa Transtorno Bipolar.','O contexto pode influenciar sintomas e vale ser registrado, mas não determina sozinho um episódio.','Se houve estresse, qualquer tratamento deixa de ser necessário.','Irritabilidade nunca aparece em episódios de humor.'],a:1,
   fb:['Estresse não é causa única nem diagnóstico.','Correto. Contexto importa, mas precisa ser interpretado junto com o restante do quadro.','O contexto não torna o acompanhamento dispensável.','Irritabilidade pode aparecer em episódios de humor.']}
 ]
},
{
 id:4,title:'Mitos entram pela porta dos fundos',subtitle:'Num almoço de família, surgem frases que parecem familiares demais.',img:'assets/p4.webp',speaker:'rafa',
 dialogue:'“Eu percebi que algumas frases doem mais do que ajudam. Quando tudo vira ‘isso é tua bipolaridade’, eu deixo de ser uma pessoa e viro um rótulo.”',badge:'Caçador de Mitos',icon:'💡',
 lessons:[
  ['Não é “dupla personalidade”','Transtorno Bipolar é um transtorno do humor. Não significa ter duas personalidades e não é sinônimo de indecisão, instabilidade moral ou “temperamento difícil”.'],
  ['Há períodos de estabilidade','Pessoas com bipolaridade podem passar períodos estáveis e construir relações, trabalho, estudo e projetos de vida. O diagnóstico não define toda a identidade.'],
  ['Estigma atrapalha cuidado','Rótulos e simplificações podem aumentar vergonha e afastar pessoas do tratamento. Informação clara favorece autonomia, adesão e apoio social.']
 ],
 key:'Ponto-chave: desmistificar não é minimizar a condição; é falar dela com precisão e sem reduzir a pessoa ao diagnóstico.',
 takeaway:'Bipolaridade não é “duas personalidades”, nem sinônimo de indecisão. A pessoa pode ter períodos de estabilidade e uma vida significativa.',
 qs:[
  {scene:'Um parente comenta: “bipolar é quem muda de humor toda hora”.',q:'Como classificar essa afirmação?',opts:['Mito','Verdade'],a:0,fb:['Correto. O transtorno é definido por episódios e padrões clínicos, não por qualquer mudança rápida de humor.','Essa frase simplifica demais e reforça uma confusão comum.']},
  {scene:'Outro familiar diz: “se a pessoa está estável, então nunca mais precisa conversar sobre prevenção”.',q:'Como classificar?',opts:['Mito','Verdade'],a:0,fb:['Isso. Estabilidade é importante, mas prevenção de recaídas, acompanhamento e reconhecimento de sinais continuam relevantes.','A estabilidade não torna planejamento e prevenção automaticamente desnecessários.']},
  {scene:'Bia afirma: “o diagnóstico não resume quem o Rafa é, e com cuidado adequado ele pode construir uma vida significativa”.',q:'Essa fala está alinhada com uma abordagem baseada em recuperação?',opts:['Não','Sim'],a:1,fb:['Uma abordagem de recuperação não reduz a pessoa ao transtorno.','Exato. Tratamento e apoio podem favorecer autonomia, funcionamento e qualidade de vida.']}
 ]
},
{
 id:5,title:'Quando melhorar dá vontade de largar tudo',subtitle:'Rafa está estável há meses e começa a questionar por que ainda precisa de cuidado.',img:'assets/p5.webp',speaker:'rafa',
 dialogue:'“Se eu estou bem agora, talvez eu não precise mais de nada. E se eu simplesmente parar?”',badge:'Aliado do Cuidado',icon:'🧩',
 lessons:[
  ['Tratamento costuma ser combinado','Para muitas pessoas, o cuidado inclui medicamentos e intervenções psicológicas ou psicossociais. A combinação é individualizada e deve considerar benefícios, efeitos adversos e preferências.'],
  ['Estabilidade pode ser resultado do cuidado','Sentir-se bem não significa necessariamente que o tratamento deixou de ser necessário. Mudanças de medicação devem ser discutidas com o profissional prescritor.'],
  ['Rotina também importa','Sono regular, atividade física, alimentação saudável, redução de estressores e monitoramento do humor podem complementar o tratamento, sem substituí-lo.']
 ],
 key:'Ponto-chave: adesão não é obediência cega. É participação informada e compartilhada nas decisões de cuidado.',
 takeaway:'O cuidado costuma combinar tratamento médico e intervenções psicossociais. Mudanças em medicação devem ser discutidas com quem prescreve.',
 qs:[
  {scene:'Dra. Maya pergunta o que Rafa entende por “tratamento”.',q:'Qual resposta é mais completa?',opts:['Apenas força de vontade.','Apenas psicoterapia, independentemente do quadro.','Um plano individualizado que pode combinar medicamentos e intervenções psicológicas/psicossociais.','Tomar qualquer medicação indicada por amigos.'],a:2,
   fb:['Força de vontade não substitui tratamento.','Psicoterapia pode ser importante, mas o cuidado costuma ser combinado.','Correto. O plano deve ser individualizado e construído com profissionais.','Medicamentos exigem indicação e acompanhamento profissional.']},
  {scene:'Rafa pensa em interromper a medicação porque está bem.',q:'Qual é a orientação mais segura?',opts:['Parar imediatamente.','Reduzir a dose por conta própria.','Conversar com o profissional prescritor antes de qualquer mudança.','Substituir por álcool ou suplementos.'],a:2,
   fb:['Interrupção abrupta pode trazer riscos e deve ser evitada sem orientação.','Ajustes de dose também precisam ser discutidos com o prescritor.','Isso. Decisões sobre medicação devem ser compartilhadas com o profissional responsável.','Álcool e suplementos não substituem tratamento prescrito.']},
  {scene:'Rafa quer complementar o tratamento com hábitos cotidianos.',q:'Qual conjunto está mais alinhado às recomendações gerais?',opts:['Sono regular, atividade física, alimentação saudável, redução de estressores e monitoramento do humor.','Virar noites para “testar” o humor.','Evitar consultas quando estiver bem.','Usar álcool para dormir.'],a:0,
   fb:['Perfeito. Esses hábitos podem complementar o cuidado.','Privação de sono pode piorar sintomas.','Acompanhamento não serve apenas para crises.','Álcool não é estratégia de tratamento do sono ou do transtorno.']}
 ]
},
{
 id:6,title:'Construindo uma rede que apoia sem controlar',subtitle:'A jornada termina com um plano: sinais, comunicação, ajuda profissional e segurança.',img:'assets/p6.webp',speaker:'bia',
 dialogue:'“Quero saber quando agir, como falar e onde buscar ajuda — mas também quero respeitar a autonomia do Rafa.”',badge:'Rede Ativa',icon:'🤝',
 lessons:[
  ['Combine antes da crise','Planos construídos em períodos de estabilidade podem incluir sinais pessoais de alerta, pessoas de confiança, contatos profissionais e preferências sobre como receber ajuda.'],
  ['Apoio é diferente de confronto','Escuta, calma, linguagem não julgadora e atenção à segurança tendem a ajudar mais do que humilhação, ameaça ou discussão para “provar” que a pessoa está errada.'],
  ['Saiba reconhecer urgência','Risco de suicídio, comportamento perigoso, agitação grave ou perda importante do contato com a realidade exigem avaliação urgente. No SUS, CAPS e UBS integram a rede; urgências podem buscar UPA, pronto-socorro ou SAMU 192.']
 ],
 key:'Ponto-chave: uma boa rede de apoio amplia segurança e autonomia. Ela não substitui profissionais e não precisa esperar a crise ficar grave para procurar orientação.',
 takeaway:'Rede de apoio envolve escuta, sinais combinados, contatos de cuidado e um plano claro para situações de urgência.',
 qs:[
  {scene:'Bia percebe redução intensa do sono, agitação e comportamento de risco.',q:'Qual resposta tende a ser mais útil?',opts:['Ridicularizar Rafa para que “caia na realidade”.','Entrar em confronto e discutir até ele concordar.','Abordar com calma, reduzir riscos e favorecer contato com a equipe de saúde.','Esperar obrigatoriamente piorar antes de agir.'],a:2,
   fb:['Vergonha costuma aumentar conflito e estigma.','Confronto intenso pode dificultar comunicação.','Isso. Calma, segurança e conexão com cuidado profissional são prioridades.','Não é necessário esperar a situação se agravar para buscar orientação.']},
  {scene:'Dra. Maya pergunta em que situação a família deve pensar em atendimento urgente.',q:'Qual alternativa apresenta sinais de maior urgência?',opts:['Uma dúvida sobre um texto na internet.','Risco de suicídio, comportamento perigoso, agitação grave ou sintomas psicóticos importantes.','Um dia de cansaço após trabalho intenso.','Vontade de revisar a rotina na próxima consulta.'],a:1,
   fb:['Essa situação pode ser discutida sem urgência.','Correto. Esses sinais podem exigir atendimento imediato.','Cansaço isolado não indica emergência.','Planejamento rotineiro pode ser feito em acompanhamento regular.']},
  {scene:'A família quer registrar contatos úteis para o Brasil.',q:'Qual combinação está correta?',opts:['CAPS/UBS podem acolher demandas de saúde mental; UPA, pronto-socorro e SAMU 192 atendem urgências; CVV 188 oferece apoio emocional.','CVV 188 substitui atendimento médico de emergência.','SAMU 192 atende apenas acidentes de trânsito.','CAPS só atende pessoas internadas.'],a:0,
   fb:['Exato. Essa combinação diferencia cuidado territorial, urgência e apoio emocional.','O CVV é apoio emocional e não substitui emergência médica.','O SAMU também atende urgências clínicas e psiquiátricas.','CAPS é serviço comunitário da RAPS e não se limita a internações.']}
 ]
}
];
const SOURCES=[
 ['Organização Mundial da Saúde — Bipolar disorder','https://www.who.int/news-room/fact-sheets/detail/bipolar-disorder'],
 ['National Institute of Mental Health — Bipolar Disorder','https://www.nimh.nih.gov/health/publications/bipolar-disorder'],
 ['Ministério da Saúde — Centros de Atenção Psicossocial (CAPS)','https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps/caps/caps/'],
 ['Ministério da Saúde — Suicídio (Prevenção)','https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/suicidio-prevencao'],
 ['Ministério da Saúde — SAMU 192','https://www.gov.br/saude/pt-br/composicao/saes/samu-192']
];

const PRETEST=[
 {scene:'Uma amiga diz que “bipolaridade é quando a pessoa muda de humor várias vezes no mesmo dia”.',q:'Qual resposta é mais adequada?',opts:['Isso define o transtorno.','Não necessariamente. O diagnóstico envolve episódios, duração, intensidade e impacto.','Isso só seria bipolaridade se houvesse tristeza.','Qualquer oscilação de humor confirma hipomania.'],a:1},
 {scene:'Rafa pergunta se mania significa apenas “estar muito feliz”.',q:'Qual resposta é mais precisa?',opts:['Sim. Mania é felicidade extrema.','Não. Pode haver humor elevado, expansivo ou irritável, além de aceleração, pouco sono e prejuízo.','Sim, desde que a pessoa esteja produtiva.','Não. Mania é apenas insônia.'],a:1},
 {scene:'Rafa está estável há alguns meses com acompanhamento.',q:'O que essa estabilidade sugere?',opts:['Que o tratamento pode ser abandonado sem conversa com profissionais.','Que estabilidade é desejável e pode estar relacionada ao cuidado em curso.','Que o diagnóstico estava necessariamente errado.','Que a prevenção deixou de ser importante.'],a:1},
 {scene:'Bia percebe pouco sono, aceleração e gastos incomuns por vários dias.',q:'Qual atitude é mais adequada?',opts:['Fechar o diagnóstico sozinha.','Observar o conjunto e favorecer contato com a equipe de saúde.','Ignorar até haver uma crise grave.','Discutir até Rafa admitir que está em mania.'],a:1},
 {scene:'Há risco de suicídio e comportamento perigoso.',q:'Qual conduta é mais segura?',opts:['Esperar a próxima consulta de rotina.','Buscar avaliação urgente e priorizar segurança.','Resolver apenas com um teste online.','Evitar falar com serviços de saúde para não alarmar.'],a:1}
];

const POSTTEST=[
 {scene:'Rafa está falando muito mais rápido, dormindo muito pouco e tomando decisões financeiras arriscadas. Bia percebe que isso é muito diferente do habitual.',q:'Qual raciocínio mostra melhor o que você aprendeu?',opts:['É apenas felicidade intensa.','O conjunto de mudanças pode indicar um episódio e merece avaliação profissional.','É possível confirmar mania apenas pela fala rápida.','Nada disso tem relação com episódios de humor.'],a:1,exp:'O conjunto de sinais, a mudança em relação ao habitual, a duração e o impacto são mais informativos do que um sintoma isolado.'},
 {scene:'Uma pessoa apresenta mais energia, menos necessidade de sono e maior sociabilidade, mas sem prejuízo grave, psicose ou necessidade de internação.',q:'Qual conceito é mais compatível?',opts:['Hipomania','Mania grave','Depressão','Estabilidade'],a:0,exp:'Hipomania envolve ativação e mudança clara do funcionamento, mas não tem a mesma gravidade típica da mania.'},
 {scene:'Durante um episódio depressivo, surgem também agitação e pensamentos acelerados.',q:'O que é importante considerar?',opts:['Polos diferentes nunca coexistem.','Podem existir características mistas.','Isso sempre significa erro diagnóstico.','Agitação confirma mania completa.'],a:1,exp:'Características mistas podem ocorrer e são clinicamente relevantes.'},
 {scene:'Rafa quer parar a medicação porque está se sentindo bem.',q:'Qual resposta é mais segura?',opts:['Parar imediatamente.','Conversar com o profissional prescritor antes de qualquer mudança.','Trocar por suplementos por conta própria.','Esperar uma recaída para decidir.'],a:1,exp:'Estabilidade não significa que mudanças em medicação devam ser feitas sem o prescritor.'},
 {scene:'Bia quer apoiar Rafa quando percebe sinais importantes de piora.',q:'Qual postura tende a ser mais útil?',opts:['Escuta, calma, redução de riscos e contato com a rede de cuidado.','Humilhação para ele perceber a gravidade.','Controle total da vida dele.','Esperar sempre até a crise ficar extrema.'],a:0,exp:'Apoio tende a funcionar melhor com calma, segurança, respeito à autonomia e conexão com os serviços quando necessário.'}
];

const SOURCES_EXTRA=[
 ['Organização Mundial da Saúde — Bipolar disorder','https://www.who.int/news-room/fact-sheets/detail/bipolar-disorder'],
 ['National Institute of Mental Health — Bipolar Disorder','https://www.nimh.nih.gov/health/publications/bipolar-disorder'],
 ['Ministério da Saúde — CAPS','https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps/caps/caps/'],
 ['Ministério da Saúde — SAMU 192','https://www.gov.br/saude/pt-br/composicao/saes/samu-192'],
 ['CVV','https://cvv.org.br/']
];

const METRICS_ENDPOINT='https://nayxpmyeqddqhxzragsw.supabase.co/rest/v1/learning_results';
const SUPABASE_PUBLISHABLE_KEY='sb_publishable_Cp9jZNth2r8FYO_Hy5iH3w_Wf_Tc-1W';
const $=id=>document.getElementById(id);
const screens=[...document.querySelectorAll('.screen')];
let state;
function resetState(){
  state={phase:0,q:0,xp:0,firstTryCorrect:0,answeredQuestions:0,reviewed:0,attempts:0,phaseFirst:0,phaseXpStart:0,badges:[],completed:0,screen:'home',history:[],preIndex:0,preScore:0,postIndex:0,postScore:0,postAnswered:false,startTs:Date.now(),sent:false,sessionId:(crypto.randomUUID?crypto.randomUUID():('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{const r=Math.random()*16|0,v=c==='x'?r:(r&3|8);return v.toString(16)})))};
}
resetState();

function snapshot(){
  return {screen:state.screen,phase:state.phase,q:state.q,preIndex:state.preIndex,preScore:state.preScore,postIndex:state.postIndex,postScore:state.postScore,postAnswered:state.postAnswered,completed:state.completed,phaseFirst:state.phaseFirst,phaseXpStart:state.phaseXpStart,xp:state.xp,firstTryCorrect:state.firstTryCorrect,answeredQuestions:state.answeredQuestions,reviewed:state.reviewed,badges:JSON.parse(JSON.stringify(state.badges))};
}
function restore(snap){
  state.phase=snap.phase;state.q=snap.q;state.preIndex=snap.preIndex;state.preScore=snap.preScore;state.postIndex=snap.postIndex;state.postScore=snap.postScore;state.postAnswered=snap.postAnswered;state.completed=snap.completed;state.phaseFirst=snap.phaseFirst;state.phaseXpStart=snap.phaseXpStart;state.xp=snap.xp;state.firstTryCorrect=snap.firstTryCorrect;state.answeredQuestions=snap.answeredQuestions;state.reviewed=snap.reviewed;state.badges=snap.badges;
  renderScreen(snap.screen,false);
}
function updateBackBtn(){const b=$('backBtn');const can=state.history.length>0;b.disabled=!can;b.setAttribute('aria-hidden',String(!can));}
function updateTop(){
  const total=PHASES.reduce((n,p)=>n+p.qs.length,0);
  const done=PHASES.slice(0,state.phase).reduce((n,p)=>n+p.qs.length,0)+state.q;
  const pct=state.screen==='final'?100:Math.min(99,Math.round(done/total*100));
  $('progressFill').style.width=pct+'%';
  $('xpStat').textContent=state.xp+' XP';
  $('chapterStat').textContent=state.screen==='home'?'Jornada':state.screen==='final'?'Concluído':(state.phase>=0&&state.phase<PHASES.length?'Capítulo '+(state.phase+1)+' de 6':'Jornada');
  updateBackBtn();
}
function show(id,push=true){
  if(push && state.screen){state.history.push(snapshot());}
  state.screen=id;
  screens.forEach(s=>s.classList.toggle('active',s.id===id));
  window.scrollTo({top:0,behavior:'smooth'});
  updateTop();
}
function goBack(){if(!state.history.length) return; const prev=state.history.pop(); restore(prev);}
function renderScreen(id,push=true){
  const routes={home:()=>show('home',push),cast:renderCast,pretest:renderPretest,chapter:renderChapter,lesson:renderLesson,quiz:renderQ,phaseDone:renderPhaseDone,posttest:renderPosttest,final:renderFinal};
  (routes[id]||routes.home)(push);
}

function renderCast(push=true){show('cast',push)}
function renderPretest(push=true){
  const q=PRETEST[state.preIndex];
  $('preCount').textContent=(state.preIndex+1)+' de '+PRETEST.length;
  $('preScene').textContent=q.scene; $('preText').textContent=q.q;
  const box=$('preOptions'); box.innerHTML='';
  q.opts.forEach((o,i)=>{const b=document.createElement('button'); b.type='button'; b.className='option'; b.textContent=o; b.addEventListener('click',()=>{if(i===q.a) state.preScore++; if(state.preIndex<PRETEST.length-1){state.preIndex++; renderPretest(true);}else{state.phase=0;state.q=0;state.phaseFirst=0;state.phaseXpStart=state.xp; renderChapter(true);}}); box.appendChild(b)});
  show('pretest',push);
}
function renderChapter(push=true){
  const p=PHASES[state.phase];
  const grid=$('chapterEpisodeGrid');
  const img=$('chapterImg');

  if(grid){
    grid.hidden=true;
    grid.innerHTML='';
  }

  img.hidden=false;
  img.src=p.img;
  img.alt='Ilustração do capítulo '+p.id+': '+p.title;

  $('chapterNo').textContent='Capítulo '+p.id+' de 6';
  $('chapterTitle').textContent=p.title;
  $('chapterSubtitle').textContent=p.subtitle;

  const c=CHARACTERS[p.speaker];
  $('speakerImg').src=c.img;
  $('speakerImg').alt='Retrato de '+c.name;
  $('speakerName').textContent=c.name;
  $('speakerText').textContent=p.dialogue;

  $('openLessonBtn').textContent='Ver os pontos principais';
  $('openLessonBtn').disabled=false;
  show('chapter',push);
}
function renderLesson(push=true){
  const p=PHASES[state.phase]; $('lessonNo').textContent='Capítulo '+p.id+' • leitura rápida'; $('lessonTitle').textContent=p.title;
  const g=$('lessonGrid');g.innerHTML=''; p.lessons.forEach((l,i)=>{const d=document.createElement('div'); d.className='lesson-card'; d.innerHTML='<div class="n">Pista '+(i+1)+'</div><h3>'+l[0]+'</h3><p>'+l[1]+'</p>'; g.appendChild(d)});
  const compare=$('episodeCompare');
  if(p.id===2){
    compare.hidden=false;
    compare.innerHTML='<div class="episode-head"><h3>Comparativo visual</h3><p>As imagens são apenas ilustrações de apoio. Não substituem avaliação clínica e não devem ser lidas como caricaturas fixas de cada estado.</p></div><img class="episode-wide" src="assets/p2.webp" alt="Comparativo visual entre estabilidade, hipomania, mania e depressão"><div class="episode-summary">'+EPISODE_VISUALS.map(e=>'<article><h4><span class="episode-dot dot-'+e.cls+'"></span>'+e.title+'</h4><div class="small">'+e.tag+'</div><ul>'+e.items.map(i=>'<li>'+i+'</li>').join('')+'</ul></article>').join('')+'</div><p class="episode-note"><b>Importante:</b> mania e hipomania não significam simplesmente “estar feliz”. Irritabilidade, agitação e desconforto também podem aparecer.</p>';
  }else{
    compare.hidden=true; compare.innerHTML='';
  }
  $('lessonKey').textContent=p.key;
  $('startMissionBtn').disabled=false;
  show('lesson',push);
}
function renderQ(push=true){
  const p=PHASES[state.phase],q=p.qs[state.q]; state.attempts=0;
  $('qMeta').textContent='Capítulo '+p.id+' • '+p.title; $('qCount').textContent='Decisão '+(state.q+1)+' de '+p.qs.length; $('qScene').textContent=q.scene; $('qText').textContent=q.q;
  const box=$('options'); box.innerHTML=''; q.opts.forEach((o,i)=>{const b=document.createElement('button'); b.type='button'; b.className='option'; b.textContent=o; b.addEventListener('click',()=>answerPractice(i)); box.appendChild(b)});
  $('feedback').className='feedback'; $('feedback').innerHTML=''; $('retryHint').textContent=''; $('nextBtn').disabled=true; show('quiz',push);
}
function answerPractice(i){
  const p=PHASES[state.phase],q=p.qs[state.q],buttons=[...$('options').querySelectorAll('.option')],fb=$('feedback'); const selected=buttons[i];
  if(selected.classList.contains('locked')||selected.classList.contains('correct')) return;
  state.attempts++;
  if(i===q.a){
    buttons.forEach(b=>{b.classList.add('locked'); b.disabled=true}); selected.classList.remove('locked'); selected.classList.add('correct');
    const first=state.attempts===1; const earned=first?20:10; state.xp+=earned; state.answeredQuestions++; if(first){state.firstTryCorrect++; state.phaseFirst++;}
    fb.className='feedback show good'; fb.innerHTML='<strong>✓ '+(first?'Acerto na primeira tentativa':'Conceito revisado e consolidado')+'</strong>'+q.fb[i]+'<div class="reward"><span>+'+earned+' XP</span>'+(first?'<span>Precisão +1</span>':'<span>Aprendeu após revisão</span>')+'</div>';
    $('retryHint').textContent=''; $('nextBtn').disabled=false; updateTop();
  }else{
    selected.classList.add('wrong','locked'); selected.disabled=true; if(state.attempts===1) state.reviewed++;
    fb.className='feedback show learn'; fb.innerHTML='<strong>↗ Ainda não — revise e tente de novo</strong>'+q.fb[i]+'<div class="reward"><span>0 XP nesta tentativa</span><span>A resposta certa só aparece quando você acerta</span></div>';
    $('retryHint').textContent='Escolha outra alternativa. Ao acertar após revisão, a decisão vale 10 XP.'; updateTop();
  }
}
function nextQuestion(){const p=PHASES[state.phase]; if(state.q<p.qs.length-1){state.q++; renderQ(true);} else {finishPhase();}}
function finishPhase(){state.completed++; state.badges.push({icon:PHASES[state.phase].icon,title:PHASES[state.phase].badge}); renderPhaseDone(true);}
function renderPhaseDone(push=true){
  const p=PHASES[state.phase]; const bonus=state.phaseFirst===p.qs.length?15:0;
  $('nextPhaseBtn').disabled=false;
  $('badgeIcon').textContent=p.icon; $('badgeTitle').textContent=p.badge+' desbloqueado'; $('badgeText').textContent='Você concluiu “'+p.title+'”. '+(bonus?'Todas as decisões foram corretas na primeira tentativa.':'Errar, receber feedback e tentar de novo também faz parte da aprendizagem.');
  $('phaseAccuracy').textContent=state.phaseFirst+'/'+p.qs.length+' na 1ª tentativa'; $('phaseXp').textContent=((state.xp-state.phaseXpStart)+(bonus?0:0))+' XP neste capítulo'+(bonus?' • bônus +15':'');
  const ul=$('phaseTakeaways'); ul.innerHTML=''; p.lessons.forEach(l=>{const li=document.createElement('li'); li.textContent=l[0]+': '+l[1]; ul.appendChild(li)}); show('phaseDone',push);
}
function nextPhase(){
  const p=PHASES[state.phase]; if(state.phaseFirst===p.qs.length){state.xp+=15;} state.phase++; state.q=0; state.phaseFirst=0; state.phaseXpStart=state.xp;
  if(state.phase>=PHASES.length){state.postIndex=0; state.postScore=0; renderPosttest(true);} else {renderChapter(true);} 
}
function renderPosttest(push=true){
  const q=POSTTEST[state.postIndex]; $('postCount').textContent=(state.postIndex+1)+' de '+POSTTEST.length; $('postScene').textContent=q.scene; $('postText').textContent=q.q;
  $('postNextBtn').disabled=true;
  const box=$('postOptions'); box.innerHTML=''; q.opts.forEach((o,i)=>{const b=document.createElement('button'); b.type='button'; b.className='option'; b.textContent=o; b.addEventListener('click',()=>answerPost(i)); box.appendChild(b)});
  $('postFeedback').className='feedback'; $('postFeedback').innerHTML=''; $('postNextBtn').disabled=true; state.postAnswered=false; show('posttest',push);
}
function answerPost(i){
  if(state.postAnswered) return; state.postAnswered=true; const q=POSTTEST[state.postIndex]; const buttons=[...$('postOptions').querySelectorAll('.option')];
  buttons.forEach(b=>{b.disabled=true; b.classList.add('locked')}); if(i===q.a){state.postScore++; buttons[i].classList.add('correct'); $('postFeedback').className='feedback show good'; $('postFeedback').innerHTML='<strong>✓ Correto</strong>'+q.exp;} else {buttons[i].classList.add('wrong'); buttons[q.a].classList.remove('locked'); buttons[q.a].classList.add('correct'); $('postFeedback').className='feedback show learn'; $('postFeedback').innerHTML='<strong>Veja a lógica</strong>'+q.exp;}
  $('postNextBtn').disabled=false;
}
function nextPost(){if(state.postIndex<POSTTEST.length-1){state.postIndex++; renderPosttest(true);} else {renderFinal(true);}}
function renderJournal(){
  const box=$('journalList'); box.innerHTML=''; PHASES.forEach((p,i)=>{const unlocked=i<state.completed; const d=document.createElement('div'); d.className='journal-item '+(unlocked?'':'locked'); d.innerHTML='<b>'+(unlocked?p.icon:'🔒')+' '+p.title+'</b><span>'+(unlocked?p.takeaway:'Conclua este capítulo para desbloquear o resumo.')+'</span>'; box.appendChild(d)}); $('journalDialog').showModal();
}
function learningGain(){return state.postScore-state.preScore}
function interpretation(){const g=learningGain(); if(g>=3) return 'Houve um ganho claro de aprendizagem entre o pré-teste e o pós-teste.'; if(g>=1) return 'Houve melhora no desempenho final. Vale revisar os pontos do Caderno para consolidar ainda mais.'; if(g===0) return 'O desempenho ficou estável. Isso pode indicar conhecimento prévio ou necessidade de revisar alguns conceitos para consolidar melhor.'; return 'O pós-teste teve menos acertos que o pré-teste. Isso não significa fracasso. Use o Caderno de Bordo e os feedbacks para revisar os pontos que geraram dúvida.';}
function buildPayload(){return {session_id:state.sessionId,participant_id:$('participantId').value.trim()||null,duration_seconds:Math.round((Date.now()-state.startTs)/1000),pretest_score:state.preScore,posttest_score:state.postScore,learning_gain:learningGain(),practice_first_try:state.firstTryCorrect,practice_total:PHASES.reduce((n,p)=>n+p.qs.length,0),practice_reviewed:state.reviewed,xp:state.xp,badges:state.badges.map(b=>b.title),version:'v5',user_agent:navigator.userAgent.slice(0,500)};}
async function saveMetrics(){
  const status=$('saveStatus'); const payload=buildPayload();
  if(!METRICS_ENDPOINT){status.textContent='Nenhum endpoint configurado. Use o botão “Baixar resultado” ou edite a constante METRICS_ENDPOINT no app.js.'; return;}
  try{
    status.textContent='Enviando resultado...';
    const res=await fetch(METRICS_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json','apikey':SUPABASE_PUBLISHABLE_KEY,'Authorization':'Bearer '+SUPABASE_PUBLISHABLE_KEY,'Prefer':'return=minimal'},body:JSON.stringify(payload)});
    if(!res.ok){const detail=await res.text(); throw new Error('HTTP '+res.status+' '+detail);}
    status.textContent='Resultado registrado com sucesso.'; state.sent=true;
  }catch(err){status.textContent='Não foi possível registrar o resultado. Tente novamente.'; console.error(err);}
}
function downloadMetrics(){const payload=buildPayload(); const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='resultado-desmistificando-bipolaridade.json'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url); $('saveStatus').textContent='Arquivo JSON baixado.';}
function renderFinal(push=true){
  $('preScore').textContent=state.preScore+'/5'; $('postScore').textContent=state.postScore+'/5'; $('gainScore').textContent=(learningGain()>=0?'+':'')+learningGain(); $('firstTryScore').textContent=state.firstTryCorrect+'/'+PHASES.reduce((n,p)=>n+p.qs.length,0); $('reviewedScore').textContent=state.reviewed; $('xpScore').textContent=state.xp; $('interpretationBox').innerHTML='<b>Leitura rápida.</b> '+interpretation();
  const bl=$('badgeList'); bl.innerHTML=''; state.badges.forEach(b=>{const d=document.createElement('div'); d.className='badge-chip'; d.innerHTML='<span style="font-size:26px">'+b.icon+'</span><b>'+b.title+'</b>'; bl.appendChild(d)});
  const tk=$('finalTakeaways'); tk.innerHTML=''; PHASES.forEach(p=>{const d=document.createElement('div'); d.className='takeaway'; d.innerHTML='<b>'+p.icon+' '+p.title+'</b><div>'+p.takeaway+'</div>'; tk.appendChild(d)});
  const src=$('sources'); src.innerHTML=''; [...SOURCES,...SOURCES_EXTRA].forEach(([name,url])=>{const li=document.createElement('li'),a=document.createElement('a'); a.href=url; a.target='_blank'; a.rel='noopener'; a.textContent=name; li.appendChild(a); src.appendChild(li)});
  show('final',push);

if (!state.sent) {
  saveMetrics();
}
}

$('backBtn').addEventListener('click',goBack);
$('startBtn').addEventListener('click',()=>renderCast(true));
$('aboutBtn').addEventListener('click',()=>{$('aboutBox').hidden=!$('aboutBox').hidden});
$('castNextBtn').addEventListener('click',()=>renderPretest(true));
$('openLessonBtn').addEventListener('click',()=>renderLesson(true));
$('startMissionBtn').addEventListener('click',()=>renderQ(true));
$('nextBtn').addEventListener('click',nextQuestion);
$('nextPhaseBtn').addEventListener('click',nextPhase);
$('postNextBtn').addEventListener('click',nextPost);
$('journalBtn').addEventListener('click',renderJournal);
$('closeJournal').addEventListener('click',()=>$('journalDialog').close());
$('restartBtn').addEventListener('click',()=>{resetState(); show('home',false);});
$('saveMetricsBtn').addEventListener('click',saveMetrics);
$('downloadMetricsBtn').addEventListener('click',downloadMetrics);
show('home',false);
