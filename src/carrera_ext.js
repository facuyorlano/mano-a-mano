/* ================= LIGAS DEL MUNDO, CLUBES Y MERCADO, COPAS INTERNACIONALES Y SELECCIÓN =================
   Se agrega a la Carrera: diez ligas del exterior (sin ascensos), un club que te paga un sueldo,
   ofertas de varias ligas a la vez con negociación y préstamos, la BCL Américas, la Champions League
   y la Intercontinental, y la Selección Argentina en los veranos.
   Jugadores reales: homenaje no oficial; alturas aproximadas y atributos estimados por el juego. */

/* ---------- ligas del exterior ---------- */
// [id, nombre, base, perfil, altura, piel, pelo, colorPelo, barba, estilo]
const EXT=[
 {k:'acb',name:'Liga Endesa (España)',sh:'España',diff:.14,col:'#ff7a1a',court:'euro',nat:'ESP',sal:[150e3,1.6e6],
  clubs:['Unicaja Málaga','Valencia Basket','Joventut Badalona','Gran Canaria','La Laguna Tenerife','UCAM Murcia','Surne Bilbao','BAXI Manresa','Casademont Zaragoza','Río Breogán'],
  pl:[['navarro','Juan Carlos Navarro',.7,'tirador',1.91,'#f0c4a2','corto','#2a1c12',false,'La Bomba: tira en carrera y con la bomba por arriba de los grandes.'],
   ['llull','Sergio Llull',.69,'penetrador',1.9,'#f0c4a2','corto','#2a1c12',true,'Triples imposibles sobre la bocina: el hombre de los últimos segundos.'],
   ['freyes','Felipe Reyes',.66,'grande',2.04,'#ecc3a2','corto','#2a1c12',true,'Rebotea todo y no se cansa nunca.'],
   ['calderon','José Manuel Calderón',.66,'base',1.91,'#f0c4a2','corto','#2a1c12',false,'Base fino: no pierde una pelota y tira de afuera.'],
   ['garbajosa','Jorge Garbajosa',.66,'completo',2.06,'#f0c4a2','corto','#3a2a1e',false,'Ala-pívot completo y duro.'],
   ['fmartin','Fernando Martín',.67,'grande',2.06,'#f0c4a2','corto','#2a1c12',true,'Pívot pionero: fuerza y carácter.'],
   ['epi','Juan Antonio San Epifanio',.68,'tirador',2.0,'#f0c4a2','corto','#3a2a1e',true,'Epi: anotador de muñeca fina.'],
   ['chacho','Sergio Rodríguez',.66,'base',1.91,'#f0c4a2','corto','#2a1c12',true,'El Chacho: pases que nadie ve venir.'],
   ['abrines','Álex Abrines',.64,'tirador',1.98,'#f0c4a2','corto','#3a2a1e',false,'Tirador puro.'],
   ['willy','Willy Hernangómez',.65,'grande',2.11,'#f0c4a2','corto','#2a1c12',false,'Pívot con buenas manos.']]},
 {k:'lba',name:'Lega Basket (Italia)',sh:'Italia',diff:.13,col:'#2a9d8f',court:'euro',nat:'ITA',sal:[120e3,1.1e6],
  clubs:['Reyer Venezia','Dinamo Sassari','Pallacanestro Trieste','Germani Brescia','Derthona Tortona','Pistoia Basket','Napoli Basket','Treviso Basket','Pallacanestro Varese','Aquila Trento'],
  pl:[['meneghin','Dino Meneghin',.67,'grande',2.04,'#f0c4a2','corto','#2a1c12',false,'Leyenda europea: un muro abajo del aro.'],
   ['belinelli','Marco Belinelli',.66,'tirador',1.96,'#f0c4a2','corto','#2a1c12',true,'Tirador de rango larguísimo.'],
   ['gallinari','Danilo Gallinari',.67,'completo',2.08,'#f0c4a2','corto','#3a2a1e',true,'Alero alto: tira y saca faltas.'],
   ['bargnani','Andrea Bargnani',.64,'tirador',2.13,'#f0c4a2','corto','#2a1c12',false,'Siete pies con mano de escolta.'],
   ['basile','Gianluca Basile',.65,'tirador',1.92,'#f0c4a2','rapado','#2a1c12',true,'Triples desde cualquier lado, sin miedo.'],
   ['myers','Carlton Myers',.65,'penetrador',1.94,'#8a5536','rapado','#120c08',false,'Goleador explosivo.'],
   ['datome','Gigi Datome',.63,'completo',2.03,'#f0c4a2','corto','#3a2a1e',true,'Alero inteligente y tirador.'],
   ['melli','Nicolò Melli',.63,'grande',2.05,'#f0c4a2','corto','#c9a36a',true,'Grande que defiende y pasa.'],
   ['riva','Antonello Riva',.64,'tirador',1.96,'#f0c4a2','corto','#2a1c12',false,'Máximo anotador histórico de Italia.'],
   ['fontecchio','Simone Fontecchio',.63,'completo',2.03,'#f0c4a2','corto','#2a1c12',false,'Alero moderno: tira y corre.']]},
 {k:'gbl',name:'Liga Griega',sh:'Grecia',diff:.13,col:'#3a86ff',court:'euro',nat:'GRE',sal:[120e3,1.2e6],
  clubs:['AEK Atenas','PAOK','Aris Salónica','Peristeri','Promitheas Patras','Kolossos Rodas','Lavrio','Maroussi','Iraklis','Karditsa'],
  pl:[['galis','Nikos Galis',.69,'penetrador',1.83,'#ecc3a2','corto','#2a1c12',true,'El gángster: imparable hacia el aro.'],
   ['diamantidis','Dimitris Diamantidis',.67,'base',1.96,'#ecc3a2','corto','#2a1c12',false,'Defensor y pasador de élite.'],
   ['spanoulis','Vassilis Spanoulis',.68,'penetrador',1.92,'#ecc3a2','corto','#2a1c12',true,'Kill Bill: cierra partidos solo.'],
   ['papaloukas','Theo Papaloukas',.66,'base',2.0,'#ecc3a2','rapado','#2a1c12',false,'Base alto que lee todo.'],
   ['giannakis','Panagiotis Giannakis',.64,'base',1.89,'#ecc3a2','corto','#2a1c12',true,'Base histórico de Grecia.'],
   ['calathes','Nick Calathes',.64,'base',1.98,'#f0c4a2','corto','#2a1c12',true,'Manos rápidas: roba y asiste.'],
   ['sloukas','Kostas Sloukas',.64,'base',1.9,'#ecc3a2','corto','#2a1c12',true,'Base frío en los finales.'],
   ['printezis','Georgios Printezis',.65,'completo',2.05,'#ecc3a2','corto','#2a1c12',true,'El gancho que ganó una Euroliga.'],
   ['papanikolaou','Kostas Papanikolaou',.63,'completo',2.03,'#ecc3a2','corto','#2a1c12',true,'Alero defensivo y tirador.'],
   ['bourousis','Ioannis Bourousis',.64,'grande',2.13,'#ecc3a2','corto','#2a1c12',true,'Pívot grande que tira de afuera.']]},
 {k:'bsl',name:'Super Liga (Turquía)',sh:'Turquía',diff:.13,col:'#e63946',court:'euro',nat:'TUR',sal:[150e3,1.5e6],
  clubs:['Galatasaray','Beşiktaş','Türk Telekom','Karşıyaka','Darüşşafaka','Bahçeşehir','Tofaş Bursa','Manisa','Pınar','Büyükçekmece'],
  pl:[['turkoglu','Hedo Türkoğlu',.67,'completo',2.08,'#ecc3a2','corto','#2a1c12',false,'Alero que maneja como base.'],
   ['okur','Mehmet Okur',.66,'grande',2.11,'#ecc3a2','rapado','#2a1c12',true,'Pívot tirador.'],
   ['tunceri','Kerem Tunçeri',.63,'base',1.9,'#ecc3a2','corto','#2a1c12',false,'Base rápido y valiente.'],
   ['kutluay','İbrahim Kutluay',.64,'tirador',1.98,'#ecc3a2','corto','#2a1c12',false,'Escolta goleador.'],
   ['ilyasova','Ersan İlyasova',.64,'completo',2.08,'#ecc3a2','corto','#2a1c12',true,'Saca faltas en ataque como nadie.'],
   ['osman','Cedi Osman',.63,'completo',2.03,'#ecc3a2','corto','#2a1c12',true,'Alero con energía.'],
   ['korkmaz','Furkan Korkmaz',.62,'tirador',2.01,'#ecc3a2','corto','#2a1c12',false,'Tirador de catch and shoot.'],
   ['asik','Ömer Aşık',.62,'grande',2.13,'#ecc3a2','corto','#2a1c12',true,'Gigante defensivo.'],
   ['guler','Sinan Güler',.62,'base',1.92,'#ecc3a2','rapado','#2a1c12',true,'Líder y defensor.'],
   ['sengun','Alperen Şengün',.67,'grande',2.11,'#ecc3a2','corto','#2a1c12',false,'Pívot con manos de base.']]},
 {k:'lkl',name:'LKL (Lituania)',sh:'Lituania',diff:.12,col:'#2b9348',court:'euro',nat:'LTU',sal:[60e3,500e3],
  clubs:['Rytas Vilnius','Lietkabelis','Neptūnas Klaipėda','Juventus Utena','Šiauliai','Pieno Žvaigždės','Nevėžis','Wolves Vilnius','Gargždai','Jonava'],
  pl:[['jasikevicius','Šarūnas Jasikevičius',.68,'base',1.93,'#f2c9a8','corto','#3a2a1e',false,'Base ganador: tira, pasa y provoca.'],
   ['marciulionis','Šarūnas Marčiulionis',.68,'penetrador',1.96,'#f2c9a8','corto','#3a2a1e',false,'Ataca el aro con todo.'],
   ['kurtinaitis','Rimas Kurtinaitis',.65,'tirador',1.96,'#f2c9a8','corto','#5a3a22',true,'Tirador de la vieja escuela.'],
   ['kleiza','Linas Kleiza',.63,'completo',2.03,'#f2c9a8','rapado','#3a2a1e',false,'Alero potente.'],
   ['valanciunas','Jonas Valančiūnas',.65,'grande',2.11,'#f2c9a8','corto','#3a2a1e',false,'Pívot clásico: rebote y gancho.'],
   ['siskauskas','Ramūnas Šiškauskas',.64,'completo',1.98,'#f2c9a8','corto','#3a2a1e',false,'Alero elegante.'],
   ['macijauskas','Arvydas Macijauskas',.64,'tirador',1.93,'#f2c9a8','corto','#3a2a1e',false,'Lanzador incansable.'],
   ['dsabonis','Domantas Sabonis',.66,'grande',2.11,'#f2c9a8','corto','#8a6a3c',false,'Pívot que pasa como su papá.'],
   ['kuzminskas','Mindaugas Kuzminskas',.61,'completo',2.06,'#f2c9a8','corto','#3a2a1e',true,'Alero atlético.'],
   ['jokubaitis','Rokas Jokubaitis',.61,'base',1.96,'#f2c9a8','corto','#3a2a1e',false,'Base joven y talentoso.']]},
 {k:'gl',name:'G League (EE.UU.)',sh:'G League',diff:.12,col:'#5e60ce',court:'estadio',nat:'USA',sal:[40e3,130e3],
  clubs:['Austin Spurs','Maine Celtics','South Bay Lakers','Long Island Nets','Sioux Falls Skyforce','Windy City Bulls','Santa Cruz Warriors','Westchester Knicks','Iowa Wolves','Capital City Go-Go'],
  pl:[['gl_brooks','Jaylen Brooks',.64,'penetrador',1.96,'#6b4228','corto','#120c08',false,'Atleta que vuela en contraataque.'],
   ['gl_hill','Marcus Hill',.63,'tirador',1.93,'#7a4a2c','rapado','#120c08',true,'Tirador de rango largo.'],
   ['gl_price','DeAndre Price',.63,'grande',2.08,'#5a3520','trenzas','#120c08',false,'Grande que tapa todo.'],
   ['gl_grant','Tyler Grant',.62,'base',1.85,'#f2c9a8','corto','#5a3a22',false,'Base veloz.'],
   ['gl_wells','Isaiah Wells',.62,'completo',2.01,'#6b4228','afro','#120c08',false,'Alero completo que busca su lugar en la NBA.'],
   ['gl_morris','Caleb Morris',.61,'penetrador',1.91,'#7a4a2c','corto','#120c08',true,'Encara siempre.'],
   ['gl_reese','Jordan Reese',.61,'tirador',1.98,'#f0c4a2','corto','#3a2a1e',false,'Escolta tirador.'],
   ['gl_stone','Malik Stone',.62,'grande',2.06,'#5a3520','rapado','#120c08',true,'Pívot fuerte.'],
   ['gl_carter','Andre Carter',.6,'base',1.88,'#6b4228','corto','#120c08',false,'Base pasador.'],
   ['gl_doyle','Kevin Doyle',.6,'completo',2.0,'#f2c9a8','corto','#c9a36a',false,'Alero trabajador.']]},
 {k:'nbb',name:'NBB (Brasil)',sh:'Brasil',diff:.1,col:'#ffb703',court:'estadio',nat:'BRA',sal:[50e3,400e3],
  clubs:['Flamengo','Franca','Minas','Paulistano','Corinthians','São Paulo','Pinheiros','Bauru','Fortaleza','Brasília'],
  pl:[['oscar','Oscar Schmidt',.69,'tirador',2.05,'#ecc3a2','corto','#2a1c12',false,'Mão Santa: el máximo anotador de la historia.'],
   ['huertas','Marcelinho Huertas',.64,'base',1.91,'#ecc3a2','rapado','#2a1c12',true,'Base creativo de pick and roll.'],
   ['leandrinho','Leandrinho Barbosa',.64,'penetrador',1.91,'#7a4a2c','rapado','#120c08',false,'Relámpago hacia el aro.'],
   ['varejao','Anderson Varejão',.63,'grande',2.11,'#ecc3a2','afro','#2a1c12',false,'Energía y rebote.'],
   ['nene','Nenê Hilário',.64,'grande',2.11,'#7a4a2c','rapado','#120c08',true,'Pívot fuerte y ágil.'],
   ['splitter','Tiago Splitter',.63,'grande',2.11,'#ecc3a2','corto','#2a1c12',true,'Pívot inteligente.'],
   ['alexgarcia','Alex Garcia',.62,'completo',1.91,'#7a4a2c','rapado','#120c08',false,'El Brabo: defiende a cualquiera.'],
   ['machado','Marcelinho Machado',.62,'tirador',1.98,'#ecc3a2','corto','#2a1c12',false,'Tirador de la Selección brasileña.'],
   ['raulzinho','Raulzinho Neto',.6,'base',1.85,'#ecc3a2','corto','#2a1c12',false,'Base rápido.'],
   ['yago','Yago Mateus',.59,'base',1.78,'#ecc3a2','corto','#2a1c12',false,'Base eléctrico.']]},
 {k:'cba',name:'CBA (China)',sh:'China',diff:.1,col:'#d62828',court:'estadio',nat:'CHN',sal:[200e3,2e6],
  clubs:['Guangdong Southern Tigers','Liaoning Flying Leopards','Beijing Ducks','Shanghai Sharks','Zhejiang Lions','Xinjiang Flying Tigers','Shenzhen Leopards','Shandong Heroes','Guangzhou Loong Lions','Qingdao Eagles'],
  pl:[['yao','Yao Ming',.69,'grande',2.29,'#f0d0b0','corto','#120c08',false,'Un gigante con toque suave.'],
   ['yijianlian','Yi Jianlian',.65,'completo',2.13,'#f0d0b0','corto','#120c08',false,'Ala-pívot alto con buen tiro.'],
   ['wangzhizhi','Wang Zhizhi',.63,'grande',2.16,'#f0d0b0','corto','#120c08',false,'Pívot zurdo pionero.'],
   ['zhouqi','Zhou Qi',.62,'grande',2.16,'#f0d0b0','corto','#120c08',false,'Tapador larguísimo.'],
   ['guoailun','Guo Ailun',.62,'base',1.92,'#f0d0b0','corto','#120c08',false,'Base veloz y anotador.'],
   ['sunyue','Sun Yue',.6,'completo',2.06,'#f0d0b0','corto','#120c08',false,'Base alto.'],
   ['dingyanyuhang','Ding Yanyuhang',.61,'completo',2.0,'#f0d0b0','corto','#120c08',false,'Alero completo.'],
   ['liuwei','Liu Wei',.59,'base',1.9,'#f0d0b0','corto','#120c08',false,'Base clásico.'],
   ['zhaorui','Zhao Rui',.6,'penetrador',1.96,'#f0d0b0','corto','#120c08',false,'Escolta físico.'],
   ['zhufangyu','Zhu Fangyu',.6,'tirador',1.97,'#f0d0b0','corto','#120c08',false,'Tirador histórico de la CBA.']]},
 {k:'nbl',name:'NBL (Australia)',sh:'Australia',diff:.1,col:'#06d6a0',court:'estadio',nat:'AUS',sal:[60e3,500e3],
  clubs:['Sydney Kings','Perth Wildcats','Melbourne United','Brisbane Bullets','Adelaide 36ers','Illawarra Hawks','Tasmania JackJumpers','New Zealand Breakers','Cairns Taipans','South East Melbourne Phoenix'],
  pl:[['gaze','Andrew Gaze',.66,'tirador',2.0,'#f2c9a8','corto','#5a3a22',false,'El gran anotador de Australia.'],
   ['bogut','Andrew Bogut',.64,'grande',2.13,'#f2c9a8','corto','#5a3a22',true,'Pívot pasador y defensor.'],
   ['mills','Patty Mills',.64,'base',1.83,'#7a4a2c','corto','#120c08',true,'Base que tira de lejos sin dudar.'],
   ['ingles','Joe Ingles',.63,'completo',2.03,'#f2c9a8','corto','#5a3a22',true,'Alero zurdo y astuto.'],
   ['dellavedova','Matthew Dellavedova',.61,'base',1.93,'#f2c9a8','corto','#5a3a22',true,'Pura garra.'],
   ['longley','Luc Longley',.62,'grande',2.18,'#f2c9a8','corto','#c9a36a',true,'Gigante de equipo.'],
   ['heal','Shane Heal',.61,'tirador',1.83,'#f2c9a8','corto','#5a3a22',false,'Triplista sin miedo.'],
   ['baynes','Aron Baynes',.61,'grande',2.08,'#f2c9a8','rapado','#5a3a22',true,'Pívot durísimo.'],
   ['giddey','Josh Giddey',.63,'base',2.03,'#f2c9a8','corto','#5a3a22',false,'Base alto con visión.'],
   ['ddaniels','Dyson Daniels',.61,'completo',2.01,'#f2c9a8','corto','#5a3a22',false,'Defensor de perímetro.']]},
 {k:'lub',name:'Liga Uruguaya',sh:'Uruguay',diff:.06,col:'#75aadb',court:'gimnasio',nat:'URU',sal:[20e3,150e3],
  clubs:['Peñarol','Nacional','Aguada','Defensor Sporting','Hebraica Macabi','Biguá','Trouville','Malvín','Goes','Urunday Universitario'],
  pl:[['ebatista','Esteban Batista',.62,'grande',2.08,'#ecc3a2','corto','#2a1c12',true,'Pívot fuerte que llegó a la NBA.'],
   ['garciamorales','Leandro García Morales',.62,'tirador',1.91,'#ecc3a2','corto','#2a1c12',false,'Goleador de los clásicos.'],
   ['fitipaldo','Bruno Fitipaldo',.6,'base',1.86,'#ecc3a2','corto','#2a1c12',true,'Base que maneja el ritmo.'],
   ['osimani','Martín Osimani',.57,'base',1.85,'#ecc3a2','corto','#2a1c12',false,'Base histórico.'],
   ['mazzarino','Nicolás Mazzarino',.58,'tirador',1.93,'#ecc3a2','corto','#2a1c12',false,'Tirador de la Celeste.'],
   ['moglia','Óscar Moglia',.6,'completo',1.98,'#ecc3a2','corto','#2a1c12',true,'Leyenda del básquet uruguayo.'],
   ['granger','Jayson Granger',.59,'base',1.9,'#ecc3a2','corto','#2a1c12',false,'Base con experiencia europea.'],
   ['svidal','Santiago Vidal',.57,'completo',1.96,'#ecc3a2','corto','#2a1c12',false,'Alero trabajador.'],
   ['parodi','Luciano Parodi',.56,'base',1.85,'#ecc3a2','corto','#2a1c12',true,'Base defensivo.'],
   ['zuvich','Agustín Zuvich',.55,'tirador',1.93,'#ecc3a2','corto','#2a1c12',false,'Tirador joven.']]}
];
const NATN={ARG:['Argentina','🇦🇷'],USA:['Estados Unidos','🇺🇸'],ESP:['España','🇪🇸'],ITA:['Italia','🇮🇹'],GRE:['Grecia','🇬🇷'],TUR:['Turquía','🇹🇷'],LTU:['Lituania','🇱🇹'],BRA:['Brasil','🇧🇷'],CHN:['China','🇨🇳'],AUS:['Australia','🇦🇺'],URU:['Uruguay','🇺🇾'],
  SLO:['Eslovenia','🇸🇮'],GER:['Alemania','🇩🇪'],CRO:['Croacia','🇭🇷'],SRB:['Serbia','🇷🇸'],FRA:['Francia','🇫🇷'],CAN:['Canadá','🇨🇦'],PUR:['Puerto Rico','🇵🇷'],VEN:['Venezuela','🇻🇪'],MEX:['México','🇲🇽']};
const NAT={lebron:'USA',kobe:'USA',shaq:'USA',bird:'USA',luka:'SLO',nowitzki:'GER',pgasol:'ESP',mgasol:'ESP',rudy:'ESP',rubio:'ESP',kukoc:'CRO',petrovic:'CRO',sabonis:'LTU',divac:'SRB',parker:'FRA'};
EXT.forEach((L,li)=>{const d=ND+li;
  L.pl.forEach(([id,name,base,prof,hm,skin,hair,hc,beard,style],i)=>{mkRival(id,name,L.sh,base>=.65?'oro':'plata',L.court,base,prof,hm,skin,hair,hc,L.col,beard);
    const r=RIVALS[id];r.hidden=false;r.nick=L.sh;r.real=true;r.style=style;r.look.trim='#f6f1e4';if(r.look.hair==='vincha')r.look.band='#f6f1e4';NAT[id]=L.nat;FOREIGN.add(id);});
  L.ids=L.pl.map(x=>x[0]);L.d=d;
  DIVS.push(L.name);DIVSH.push(L.sh);DIVDIFF.push(L.diff);DIVW.push(Math.round(L.diff*70));DIVCOL.push(L.col);DIVCOURT.push([L.court]);LIG_ART.push(['cup',L.col,'#f6f1e4']);});
// jugadores que solo aparecen con su selección
[['nash','Steve Nash','CAN',.72,'base',1.91,'#f2c9a8','corto','#5a3a22',false],['sga','Shai Gilgeous-Alexander','CAN',.74,'penetrador',1.98,'#5a3520','corto','#120c08',false],['wiggins','Andrew Wiggins','CAN',.66,'completo',2.01,'#6b4228','corto','#120c08',false],['rjbarrett','RJ Barrett','CAN',.64,'penetrador',1.98,'#6b4228','corto','#120c08',true],
 ['barea','J.J. Barea','PUR',.64,'base',1.78,'#d9a07a','corto','#120c08',false],['arroyo','Carlos Arroyo','PUR',.63,'base',1.88,'#d9a07a','rapado','#120c08',true],['piculin','José Ortiz','PUR',.62,'grande',2.08,'#d9a07a','corto','#120c08',true],
 ['gvasquez','Greivis Vásquez','VEN',.62,'base',1.98,'#c99068','corto','#120c08',true],['cherrera','Carl Herrera','VEN',.6,'grande',2.06,'#8a5536','corto','#120c08',false],['hromero','Héctor Romero','VEN',.59,'completo',2.01,'#c99068','corto','#120c08',true],
 ['ayon','Gustavo Ayón','MEX',.61,'grande',2.06,'#c99068','corto','#120c08',true],['najera','Eduardo Nájera','MEX',.6,'completo',2.03,'#c99068','corto','#120c08',false],['jgutierrez','Jorge Gutiérrez','MEX',.58,'base',1.91,'#c99068','corto','#120c08',true],
 ['bodiroga','Dejan Bodiroga','SRB',.72,'completo',2.05,'#f2c9a8','corto','#3a2a1e',false],['danilovic','Predrag Danilović','SRB',.7,'tirador',2.0,'#f2c9a8','corto','#3a2a1e',false],['stojakovic','Peja Stojaković','SRB',.71,'tirador',2.08,'#f2c9a8','corto','#3a2a1e',false],['jokic','Nikola Jokić','SRB',.8,'grande',2.11,'#f2c9a8','corto','#3a2a1e',false],
 ['diaw','Boris Diaw','FRA',.66,'completo',2.03,'#8a5536','corto','#120c08',false],['gobert','Rudy Gobert','FRA',.68,'grande',2.16,'#6b4228','corto','#120c08',false],['batum','Nicolas Batum','FRA',.65,'completo',2.03,'#8a5536','corto','#120c08',false],
 ['dragic','Goran Dragić','SLO',.69,'penetrador',1.91,'#f2c9a8','corto','#3a2a1e',true],['nachbar','Boštjan Nachbar','SLO',.62,'tirador',2.06,'#f2c9a8','corto','#3a2a1e',false],
 ['schroder','Dennis Schröder','GER',.67,'base',1.85,'#8a5536','rapado','#120c08',true],['schrempf','Detlef Schrempf','GER',.67,'completo',2.06,'#f2c9a8','corto','#c9a36a',false],
 ['radja','Dino Rađa','CRO',.66,'grande',2.11,'#f2c9a8','corto','#3a2a1e',false],['bbogdanovic','Bojan Bogdanović','CRO',.66,'tirador',2.03,'#f2c9a8','corto','#3a2a1e',true]
].forEach(([id,name,nat,base,prof,hm,skin,hair,hc,beard])=>{mkRival(id,name,NATN[nat][0],'oro','nba',base,prof,hm,skin,hair,hc,'#1b2a4a',beard);RIVALS[id].nick='Selección de '+NATN[nat][0];RIVALS[id].real=true;NAT[id]=nat;FOREIGN.add(id);});
const SITCOM=new Set(SERIES_IDS);
function natOf(id){if(id==='you')return 'ARG';if(NAT[id])return NAT[id];if(SITCOM.has(id))return null;return FOREIGN.has(id)?null:'ARG';}
const isExt=d=>d>=ND;
const extOf=d=>EXT[d-ND];

/* ---------- calendario con copas internacionales ---------- */
const WCAL5=(()=>{const H=WCAL2.slice();[4,10,15,19].forEach(i=>H.splice(i,0,'I'));return [...H,'P','P','S','S','S',...WCAL4.slice(WCAL3.length)];})();

/* ---------- clubes por liga ---------- */
const CLUBS_D=[CLUBS.nba.concat(['Dallas Mavericks','Golden State Warriors','Miami Heat','Phoenix Suns','Oklahoma City Thunder','New York Knicks']),
  ['Real Madrid','FC Barcelona','Olympiacos','Panathinaikos','Fenerbahçe','Anadolu Efes','Maccabi Tel Aviv','Žalgiris Kaunas','Partizan','Virtus Bologna','Olimpia Milano','Baskonia','AS Mónaco','Bayern Múnich'],
  CLUBS.nacional,CLUBS.argentina,CLUBS.federal,
  ['Bahiense del Norte','Olimpo de Bahía Blanca','Sportivo Escobar','Alvarado de Mar del Plata','Kimberley','Racing de Olavarría','Estudiantes de Tandil','Sportivo Pergamino'],
  CLUBS.apdeb,
  ['Banco Provincia','Villa Elvira','Hogar Social','Unidos de Olmos','Reconquista','Club City Bell','Talleres de Tolosa','Juventud de Los Hornos'],
  ['Plaza Moreno','Plaza Malvinas','Parque Saavedra','Plaza Rocha','Plaza Paso','Plaza San Martín','Parque Castelli','Plaza Alsina']];
EXT.forEach(L=>CLUBS_D.push(L.clubs));
const SAL_D=[[1.1e6,25e6],[250e3,2.5e6],[25e3,180e3],[8e3,40e3],[2e3,10e3],[600,3e3],[0,600],[0,300],[0,0]];EXT.forEach(L=>SAL_D.push(L.sal));
const LVL_D=[.74,.69,.64,.62,.58,.56,.53,.5,.45];EXT.forEach(L=>LVL_D.push(L.pl.reduce((a,p)=>a+p[2],0)/L.pl.length));
function lvlOf(w,d){if(w&&w.divs&&w.divs[d]){const o=w.divs[d].filter(x=>x!=='you').map(id=>ovr(wStats(w,id)));if(o.length)return o.reduce((a,b)=>a+b,0)/o.length;}return LVL_D[d]||.5;}
function money(v){v=Math.round(v||0);return v>=1e6?'US$ '+(v/1e6).toFixed(v>=1e7?0:1).replace('.',',')+' M':v>=1e3?'US$ '+Math.round(v/1e3)+' mil':v>0?'US$ '+v:'sin sueldo';}
function salFor(d,o,w){const [a,b]=SAL_D[d]||[0,0];if(!b)return 0;const L=lvlOf(w,d),t=clamp((o-(L-.08))/.2,0,1);const step=b>=1e6?10000:b>=1e5?1000:100;return Math.round((a+(b-a)*t*t)*(.88+rand()*.24)/step)*step;}
function myOvr(){return ovr(humanStats());}
function clubColor(d){return DIVCOL[d]||'#75aadb';}
const PERKS={elite:['Entrenamiento de élite','🏋️','Tu nivel sube más al final de la temporada'],casa:['Casa y auto pagos','🏠','Te ahorrás gastos: +15% del sueldo'],marca:['Contrato con una marca','👟','Una marca de zapatillas te paga aparte'],nba:['Salida libre a la NBA','🇺🇸','Si te llama la NBA, te vas sin pagar nada'],titulos:['Premio por títulos','🏆','Cobrás un extra si salís campeón']};
const STAFF={entrenador:['Entrenador personal','Tu nivel sube un poco más cada temporada'],fisio:['Fisioterapeuta','Te recuperás antes de las lesiones'],psico:['Psicólogo deportivo','Más sangre fría en los finales']};
function staffCost(w,k){const d=w&&w.club?w.club.d:8,s=(w&&w.club&&w.club.sal)||0;return Math.max({entrenador:800,fisio:600,psico:500}[k],Math.round(s*({entrenador:.12,fisio:.08,psico:.06}[k])/100)*100)+(SAL_D[d][1]>1e6?20000:0);}

/* ---------- migración y club inicial ---------- */
function extInitDiv(w,L){const d=L.d;if(w.divs[d])return;const used=new Set(w.divs.flat());const ids=L.ids.filter(x=>!used.has(x));while(ids.length<10)ids.push(L.ids[ids.length]);
  w.divs[d]=ids;w.sched[d]=makeSchedule(shuffle(ids.slice()));const t={};ids.forEach(id=>t[id]={pj:0,g:0,p:0,pf:0,pc:0});w.table[d]=t;
  w.prevRank[d]=ids.slice().sort((a,b)=>ovr(wStats(w,b))-ovr(wStats(w,a)));}
function extMigrate(){const w=save.world;if(!w||!w.divs)return;
  if(w.divs.length<ND+EXT.length){EXT.forEach(L=>extInitDiv(w,L));if(w.nextDivs)EXT.forEach(L=>{if(!w.nextDivs[L.d])w.nextDivs[L.d]=w.divs[L.d].slice();});}
  if(!w.club||!w.club.n){const d=divOf(w,'you');w.club={n:CLUBS_D[d>=0?d:8][0],d:d>=0?d:8,sal:0,yrs:1,perks:[],since:w.season};w.clubHist=[{s:w.season,club:w.club.n,d:w.club.d}];}
  if(save.money==null)save.money=0;if(!save.staff)save.staff={};}
{const _ms=migrateSave;migrateSave=function(){_ms();extMigrate();};}
{const _nw=newWorld;newWorld=function(mode){const w=_nw(mode);EXT.forEach(L=>{if(!w.divs[L.d])extInitDiv(w,L);});w.club={n:CLUBS_D[8][Math.floor(rand()*CLUBS_D[8].length)],d:8,sal:0,yrs:1,perks:[],since:1};w.clubHist=[{s:1,club:w.club.n,d:8}];if(save.money==null)save.money=0;save.staff={};return w;};}

/* ---------- desafío del partido (variedad) ---------- */
const RETOS=[{k:'om',n:2,t:'Meté 2 dobles de afuera'},{k:'blk',n:2,t:'Tapá 2 tiros'},{k:'stl',n:2,t:'Robá 2 pelotas'},{k:'dnk',n:1,t:'Volcala al menos una vez',need:p=>p.dunk>.5},{k:'margin',n:4,t:'Ganá por 4 o más'},
  {k:'nofl',t:'Ganá sin hacer faltas'},{k:'reb',n:5,t:'Agarrá 5 rebotes'},{k:'noto',t:'Ganá sin perder ninguna pelota'},{k:'mv',n:2,t:'Dejá pagando a tu rival 2 veces con una movida'},{k:'comeback',t:'Ganá aunque vayas perdiendo por 3 en algún momento'}];
function pickReto(w){srand(w.season*977+w.step*31+7);const st=humanStats(),L=RETOS.filter(r=>!r.need||r.need(st));return Object.assign({},L[Math.floor(sr()*L.length)]);}
function retoOk(r,won,sa,sb,ma,mb){const s=ma||{};switch(r.k){case 'om':return (s.om||0)>=r.n;case 'blk':return (s.blk||0)>=r.n;case 'stl':return (s.stl||0)>=r.n;case 'dnk':return (s.dnk||0)>=r.n;case 'margin':return won&&sa-sb>=r.n;
  case 'nofl':return won&&!(s.fl||0);case 'reb':return (s.reb||0)>=r.n;case 'noto':return won&&!(s.to||0)&&!((mb||{}).stl||0);case 'mv':return (s.mv||0)>=r.n;case 'comeback':return won&&(game.maxDown||0)>=3;}return false;}
{const _mc=worldMatchCfg;worldMatchCfg=function(w,nx){const c=_mc(w,nx);c.reto=pickReto(w);return c;};}
{const _mp=makePlan;makePlan=function(p,o,cfg){const P=_mp(p,o,cfg);if(cfg.reto)P.lines.unshift(`<b>Desafío del partido</b> ${cfg.reto.t}. Si lo cumplís, tu nivel sube un poquito y cobrás un premio.`);return P;};}
{const _wp=worldPost;worldPost=function(w,cfg,won,sa,sb,ma,mb){const ex=_wp(w,cfg,won,sa,sb,ma,mb);
  if(cfg.reto&&!cfg.sim&&ma){if(retoOk(cfg.reto,won,sa,sb,ma,mb)){w.drift.you=Math.min(.3,(w.drift.you||0)+.002);const pr=Math.max(100,Math.round(((w.club&&w.club.sal)||0)*.02/100)*100);save.money=(save.money||0)+pr;(w.retos||(w.retos={})).ok=((w.retos&&w.retos.ok)||0)+1;ex.push(`¡Desafío cumplido (${cfg.reto.t.toLowerCase()})! Tu nivel sube un poquito y cobrás ${money(pr)}`);}
    else ex.push(`Desafío no cumplido: ${cfg.reto.t.toLowerCase()}`);}
  return ex;};}
// para el desafío de remontada: máxima desventaja durante el partido
{const _os=onScore;onScore=function(){_os();try{const [a,b]=game.players;game.maxDown=Math.max(game.maxDown||0,b.score-a.score);}catch(e){}};
 const _sm=setupMatch;setupMatch=function(a,b,cfg){_sm(a,b,cfg);game.maxDown=0;};}

/* ---------- temporada: sueldo, staff, contrato ---------- */
{const _hc=humanClutch;humanClutch=function(){return clamp(_hc()+(save.staff&&save.staff.psico?.08:0),.3,.97);};}
{const _ew=endWorldSeason;endWorldSeason=function(w){
  const C=w.club;if(C){C.gr=1+((C.perks||[]).includes('elite')?.15:0)+(save.staff&&save.staff.entrenador?.09:0);}
  const msgs=_ew(w);
  try{extSeasonEnd(w,msgs);}catch(e){console.error(e);}
  return msgs;};}
function extSeasonEnd(w,msgs){const C=w.club,S=w.summary;if(!C)return;
  let inc=C.sal||0;const P=C.perks||[];if(P.includes('casa'))inc+=Math.round((C.sal||0)*.15);if(P.includes('marca'))inc+=Math.max(500,Math.round((C.sal||0)*.2));
  const champ=S&&S.champs&&S.champs[S.myD]==='you';if(champ&&P.includes('titulos'))inc+=Math.max(300,Math.round((C.sal||0)*.25));
  let cost=0;for(const k in (save.staff||{}))if(save.staff[k])cost+=staffCost(w,k);
  save.money=Math.max(0,(save.money||0)+inc-cost);
  if(inc||cost)msgs.push(`Cobraste ${money(inc)}${cost?` y pagaste ${money(cost)} de tu staff`:''}`);
  if(cost&&save.money<=0){save.staff={};msgs.push('Te quedaste sin plata: tu staff dejó de trabajar con vos');}
  C.yrs=Math.max(0,(C.yrs||1)-1);
  (w.clubSeasons||(w.clubSeasons=[])).push({s:w.season,club:C.n,d:S?S.myD:C.d,pos:S?S.myPos:null,loan:!!C.loan});
  w.mkt=genMarket(w);
  w.natl=natInit(w);
  // la Copa Intercontinental y las copas internacionales quedan en el historial
  const I=w.icup;if(I&&I.s===w.season){(w.icHist||(w.icHist=[])).push({s:w.season,bcl:I.cups.bcl.champ,ucl:I.cups.ucl.champ,ic:I.ic&&I.ic.champ});}}

/* ---------- mercado de pases ---------- */
function nextD(w){return w.nextDivs?w.nextDivs.findIndex(x=>x.includes('you')):divOf(w,'you');}
function mkOffer2(w,d,club,o,extra){const sal=salFor(d,o,w),perks=[];const step=sal>1e6?10000:sal>1e5?1000:100;
  if(rand()<.28)perks.push('elite');if(rand()<.25&&sal)perks.push('casa');if(rand()<.22&&sal)perks.push('titulos');if(d!==0&&d<=2||isExt(d))if(rand()<.2)perks.push('nba');if((save.money||0)>0&&rand()<.15&&sal)perks.push('marca');
  return Object.assign({id:Math.floor(rand()*1e9),club,d,sal,yrs:o<.6?1+Math.floor(rand()*2):1+Math.floor(rand()*3),perks,bonus:sal&&rand()<.45?Math.round(sal*(.05+rand()*.25)/step)*step:0,int:Math.round(50+rand()*35),tries:0},extra||{});}
function pickClub(w,d,avoid){const used=new Set([avoid,w.club&&w.club.n]);const L=CLUBS_D[d].filter(c=>!used.has(c));return L[Math.floor(rand()*L.length)]||CLUBS_D[d][0];}
function genMarket(w){const S=w.summary||{},o=myOvr(),cur=w.club,nd=nextD(w),myD=S.myD!=null?S.myD:divOf(w,'you'),pos=S.myPos||5,champ=S.champs&&S.champs[myD]==='you';
  const offers=[],has=d=>offers.some(x=>x.d===d);
  const add=(d,n,extra)=>{for(let i=0;i<n;i++){if(d<0||d>=w.divs.length)return;offers.push(mkOffer2(w,d,pickClub(w,d,(offers.find(x=>x.d===d)||{}).club),o,extra));}};
  const good=pos<=3||champ,bad=pos>=8;
  // tu liga del año que viene (la que te toca por ascenso/descenso)
  add(nd,good?1:2);
  // un escalón arriba si la rompiste
  if(nd<ND&&nd>0&&(good&&rand()<.7||o>=lvlOf(w,nd-1)+.02))add(nd-1,1,{jump:true});
  // ligas del exterior de tu nivel
  const exts=(nd<=4||isExt(nd))?EXT.map(L=>L.d).filter(d=>d!==nd&&Math.abs(lvlOf(w,d)-o)<.055&&o>=.55&&lvlOf(w,d)<=lvlOf(w,nd)+.07).sort(()=>rand()-.5):[];
  exts.slice(0,good?3:2).forEach(d=>{if(rand()<(good?.85:.55))add(d,1);});
  // la NBA solo para los mejores
  if(nd!==0&&!has(0)&&(nd<=2||isExt(nd)&&lvlOf(w,nd)>=.62)&&(o>=.73||(o>=.7&&good)))add(0,1);
  // préstamo para sumar minutos: si en una liga top te fue mal
  if(bad&&!cur.loan&&(nd<=2||isExt(nd)&&lvlOf(w,nd)>=.63)){const lower=[nd<ND?nd+1:2,...EXT.map(L=>L.d).filter(d=>lvlOf(w,d)<lvlOf(w,nd)-.01)].filter(d=>d>=0&&d<w.divs.length&&d!==nd);
    const d=lower[Math.floor(rand()*lower.length)];if(d!=null){const of=mkOffer2(w,d,pickClub(w,d),o,{loan:true,yrs:1,bonus:0});of.sal=Math.min(SAL_D[d][1],Math.max(of.sal,Math.round((cur.sal||0)*.3/100)*100));of.buyOpt=rand()<.5;of.perks=of.perks.filter(k=>k==='elite'||k==='casa');offers.push(of);}}
  // volver del préstamo / opción de compra
  let stay=null;
  if(cur.loan){stay={id:1,stay:true,back:true,club:cur.loan.parent.n,d:cur.loan.parent.d,sal:cur.loan.parent.sal,yrs:cur.loan.parent.yrs,perks:cur.loan.parent.perks||[],int:80,tries:3,bonus:0};
    if(cur.loan.buy&&pos<=4){offers.push(mkOffer2(w,nd,cur.n,o,{purchase:true,yrs:2+Math.floor(rand()*2),int:80}));}}
  else if(cur.d===nd&&cur.yrs>0){stay={id:1,stay:true,under:true,club:cur.n,d:nd,sal:cur.sal,yrs:cur.yrs,perks:cur.perks||[],int:80,tries:3,bonus:0};}
  else if(cur.d===nd){stay=mkOffer2(w,nd,cur.n,o,{stay:true,renew:true});}
  // si te vas de tu liga, el contrato con tu club se termina
  const changed=cur.d!==nd&&!cur.loan;
  if(!offers.length&&!stay)add(nd,2);
  offers.sort((a,b)=>lvlOf(w,b.d)-lvlOf(w,a.d)||b.sal-a.sal);
  return {s:w.season,offers:offers.slice(0,7),stay,changed,signed:null,from:cur.n};}
function mAll(M){return (M.stay?[M.stay]:[]).concat(M.offers).filter(x=>!x.withdrawn);}
function mById(M,id){return mAll(M).find(x=>String(x.id)===String(id));}
const NEGK={sal:'Pedir más sueldo',yrs:'Pedir un año más',bonus:'Pedir prima por firmar',elite:'Pedir entrenamiento de élite',nba:'Pedir salida libre a la NBA',match:'Que igualen la mejor oferta'};
function negOpts(M,o){if(o.withdrawn||o.tries>=3||o.under||o.back)return [];const k=[];if(o.sal)k.push('sal');k.push('bonus');if(o.yrs<4&&!o.loan)k.push('yrs');if(!o.perks.includes('elite'))k.push('elite');if(!o.perks.includes('nba')&&o.d!==0&&!o.loan)k.push('nba');
  const best=mAll(M).filter(x=>x!==o).reduce((a,x)=>Math.max(a,x.sal),0);if(best>o.sal)k.push('match');return k;}
function negotiate2(M,o,kind){o.tries++;const step=o.sal>1e6?10000:o.sal>1e5?1000:100,best=mAll(M).filter(x=>x!==o).reduce((a,x)=>Math.max(a,x.sal),0),w=save.world;
  let pr=clamp(o.int/100*.95-(o.tries-1)*.13+(myOvr()-lvlOf(w,o.d))*2.2,.06,.9);if(kind==='match')pr*=.8;if(kind==='nba')pr*=.75;if(kind==='elite')pr*=.85;
  const r=rand();
  if(r<pr){o.int=Math.max(10,o.int-7);
    if(kind==='sal'){const inc=.08+rand()*.12;o.sal=Math.max(o.sal+step,Math.round(o.sal*(1+inc)/step)*step);o.msg=`Aceptaron: te suben el sueldo un ${Math.round(inc*100)}%.`;}
    else if(kind==='yrs'){o.yrs++;o.msg=`Aceptaron: el contrato pasa a ${o.yrs} temporadas.`;}
    else if(kind==='bonus'){const b=Math.max(step,Math.round(Math.max(o.sal,2000)*(.1+rand()*.25)/step)*step);o.bonus=(o.bonus||0)+b;o.msg=`Aceptaron: ${money(b)} de prima por firmar.`;}
    else if(kind==='elite'){o.perks.push('elite');o.msg='Aceptaron: entrenamiento de élite.';}
    else if(kind==='nba'){o.perks.push('nba');o.msg='Aceptaron: salida libre si te llama la NBA.';}
    else{o.sal=Math.max(o.sal,Math.round(best*(1+rand()*.05)/step)*step);o.msg='Igualaron la mejor oferta que tenés.';}
    o.ok=true;}
  else if(r<pr+.22+o.tries*.05){o.int-=12+Math.floor(rand()*12);if(o.int<25&&!o.stay){o.withdrawn=true;o.msg='Se ofendieron y retiraron la oferta.';}else{o.msg='No les gustó el pedido: bajó el interés.';o.ok=false;}}
  else{o.msg='Dijeron que no: es lo que hay.';o.ok=false;}
  persist();return o.msg;}
function oValue(o){return o.sal*o.yrs+(o.bonus||0);}
function oBadges(M,o){const L=mAll(M);if(L.length<2)return [];const w=save.world,b=[],mx=f=>Math.max(...L.map(f));
  if(o.sal&&o.sal===mx(x=>x.sal))b.push('Más sueldo');if(oValue(o)&&oValue(o)===mx(oValue))b.push('Más plata en total');
  if(lvlOf(w,o.d)===mx(x=>lvlOf(w,x.d)))b.push('Mejor liga');if(o.perks.includes('elite'))b.push('Mejor entrenamiento');if(icupLeague(o.d))b.push('Copa internacional');if(o.d<ND)b.push('En el país');return b;}
function icupLeague(d){return [2].concat(['nbb','lub','acb','lba','gbl','bsl','lkl'].map(k=>EXT.find(L=>L.k===k).d)).includes(d);}
function signOffer(w,o){const M=w.mkt;M.signed=o.id;persist();}
function applySigning(w){const M=w.mkt;if(!M||M.s!==w.season)return;let o=M.signed!=null?mById(M,M.signed):null;
  if(!o){o=M.stay||mAll(M)[0];if(!o)return;}
  const nd=w.nextDivs,from=nd.findIndex(x=>x.includes('you')),to=o.d;
  if(to!==from&&to>=0&&nd[to]){const cand=nd[to].filter(x=>x!=='you').sort((a,b)=>ovr(wStats(w,a))-ovr(wStats(w,b)))[0];
    nd[from].splice(nd[from].indexOf('you'),1,cand);nd[to].splice(nd[to].indexOf(cand),1,'you');}
  const prev=w.club;
  if(o.back){w.club=Object.assign({},prev.loan.parent,{loan:null});}
  else if(o.under){/* sigue igual */}
  else{w.club={n:o.club,d:to,sal:o.sal,yrs:o.yrs,perks:o.perks.slice(),since:w.season+1,loan:o.loan?{parent:{n:prev.n,d:prev.d,sal:prev.sal,yrs:Math.max(1,prev.yrs),perks:prev.perks||[]},buy:!!o.buyOpt}:null};
    if(o.bonus)save.money=(save.money||0)+o.bonus;
    (w.clubHist||(w.clubHist=[])).push({s:w.season+1,club:o.club,d:to,loan:!!o.loan});
    addNews(w,`${nT('you')} ${o.loan?'se va a préstamo a':'firmó con'} ${o.club}`,`${o.loan?'Una temporada para sumar rodaje':'Contrato por '+o.yrs+(o.yrs>1?' temporadas':' temporada')} en ${DIVS[to]}${o.sal?' · '+money(o.sal)+' por temporada':''}.`,'you',w.step);}
  if(isExt(to)&&(!prev||!isExt(prev.d)))celebrate('¡Jugás en el exterior!',`Te vas a ${DIVS[to]}: ${o.club||w.club.n}`,'star','#75aadb','MOMENTO DE CARRERA');}
{const _ns=wNewSeason;wNewSeason=function(w){try{applySigning(w);}catch(e){console.error(e);}w.mkt=null;_ns(w);try{icupInit(w);}catch(e){console.error(e);}};}

/* ---------- copas internacionales ---------- */
function topOf(w,d,n){const pr=w.prevRank[d]||[],rk=id=>{const i=pr.indexOf(id);return i<0?20-ovr(wStats(w,id))*10:i;};return w.divs[d].slice().sort((a,b)=>rk(a)-rk(b)).slice(0,n);}
function icupInit(w){if(w.icup&&w.icup.s===w.season)return w.icup;const E=k=>EXT.find(L=>L.k===k).d;
  const mk=(name,ids,court)=>{const s=shuffle(ids.slice());return {name,court,ids,rounds:[{name:'Cuartos de final',pairs:[[s[0],s[1]],[s[2],s[3]],[s[4],s[5]],[s[6],s[7]]],res:[null,null,null,null]}],champ:null};};
  w.icup={s:w.season,k:0,cups:{bcl:mk('BCL Américas',[...topOf(w,2,4),...topOf(w,E('nbb'),3),...topOf(w,E('lub'),1)],'estadio'),
    ucl:mk('Champions League',[...topOf(w,E('acb'),2),...topOf(w,E('lba'),2),...topOf(w,E('gbl'),1),...topOf(w,E('bsl'),1),...topOf(w,E('lkl'),2)],'euro')},ic:null};
  return w.icup;}
{const _sw=startWorldSeason;startWorldSeason=function(w){_sw(w);if(w.divs&&w.divs.length>ND)try{icupInit(w);}catch(e){}};}
function icupGames(w){const I=w.icup;if(!I||I.s!==w.season)return [];const k=I.k,out=[];
  if(k<3){for(const key of ['bcl','ucl']){const C=I.cups[key],R=C.rounds[k];if(!R)continue;R.pairs.forEach((p,i)=>{if(!R.res[i])out.push({key,C,R,i,p,lbl:`${C.name} · ${R.name}`});});}}
  else if(k===3){if(!I.ic){const a=I.cups.bcl.champ,b=I.cups.ucl.champ;if(a&&b)I.ic={a,b,res:null,champ:null};}if(I.ic&&!I.ic.res)out.push({ic:true,p:[I.ic.a,I.ic.b],lbl:'Copa Intercontinental · Final'});}
  return out;}
function icupResolve(w,my){const I=w.icup,G=icupGames(w),res=[];let reward='';
  G.forEach(g=>{const [a,b]=g.p,me=a==='you'||b==='you';let sa,sb;if(my&&me){sa=a==='you'?my.s:my.o;sb=a==='you'?my.o:my.s;}else[sa,sb]=wSim(w,a,b);
    res.push({a,b,sa,sb,me});const win=sa>sb?a:b;
    if(g.ic){I.ic.res=[sa,sb];I.ic.champ=win;addNews(w,`¡${nT(win)} ganó la Copa Intercontinental!`,`Le ganó ${Math.max(sa,sb)}-${Math.min(sa,sb)} a ${nT(win===a?b:a)}: campeón de BCL Américas contra campeón de la Champions.`,me?'you':'campeon');
      if(me){reward=win==='you'?'¡CAMPEÓN INTERCONTINENTAL!':'Perdiste la final Intercontinental';if(win==='you')celebrate('Copa Intercontinental',`Temporada ${w.season}`,'cup:#ffd23f:#75aadb','#ffd23f');}}
    else{g.R.res[g.i]=[sa,sb];if(me)reward=win==='you'?`¡Ganaste en la ${g.C.name}!`:`Quedaste afuera de la ${g.C.name}`;}});
  if(I.k<3)for(const key of ['bcl','ucl']){const C=I.cups[key],R=C.rounds[I.k];if(!R||R.res.some(x=>!x))continue;const win=R.pairs.map((p,i)=>R.res[i][0]>R.res[i][1]?p[0]:p[1]);
    if(win.length>1){const pr=[];for(let i=0;i<win.length;i+=2)pr.push([win[i],win[i+1]]);C.rounds.push({name:win.length===4?'Semifinal':'Final',pairs:pr,res:pr.map(()=>null)});}
    else{C.champ=win[0];addNews(w,`¡${nT(win[0])} es campeón de la ${C.name}!`,'Se ganó el lugar en la Copa Intercontinental.',win[0]==='you'?'you':'campeon');if(win[0]==='you'){reward=`¡CAMPEÓN DE LA ${C.name.toUpperCase()}!`;celebrate(C.name,`Temporada ${w.season}`,key==='bcl'?'cup:#75aadb:#ffd23f':'cup:#3a86ff:#ffd23f',key==='bcl'?'#75aadb':'#3a86ff');}}}
  I.k++;w.last={title:G[0]?G[0].lbl.split(' · ')[0]+' · '+(G[0].R?G[0].R.name:'Final'):'Copas internacionales',res:res.filter(r=>r.me||res.length<=8)};
  return reward;}
function icupHasMe(w){return icupGames(w).some(g=>g.p.includes('you'));}
{const _wn=worldNext0;worldNext0=function(w){if(w.phase==='season'&&cal(w)[w.step]==='I'){const G=icupGames(w),m=G.find(g=>g.p.includes('you'));
    if(!m)return {type:'I',none:true,promo:true,label:'Copas internacionales'};const opp=m.p[0]==='you'?m.p[1]:m.p[0],od=divOf(w,opp);
    return {type:'I',opp,d:od,home:m.ic?null:m.p[0],label:m.lbl,court:m.ic?'nba':(m.C.court||'estadio'),diff:(DIVDIFF[od]||.1)+.04};}
  return _wn(w);};}
function skipSteps(w){while(w.step<cal(w).length){const e=cal(w)[w.step];
  if(e==='I'){const G=icupGames(w);if(!G.length){w.step++;continue;}if(!icupHasMe(w)){icupResolve(w,null);w.step++;continue;}break;}
  if((e==='C'&&w.cup.champ)||(e==='S'&&!promoGames(w).length)||(e==='N'&&!nbaGames(w).length)||(e==='M'&&!mundoGames(w).length)){w.step++;continue;}break;}}
{const _wa=worldAdvance;worldAdvance=function(w,my){
  if(w.phase==='season'&&cal(w)[w.step]==='I'){injDefault();
    if(my&&my.wo){const O=w.out||(w.out={});const nx=worldNext(w);const k=nx&&nx.wo==='me'?'you':nx&&nx.opp;if(k&&O[k]>0){O[k]--;if(!O[k])delete O[k];}}
    let rw=icupResolve(w,my);wInjTick(w,'I');w.step++;skipSteps(w);const out=[rw];if(w.step>=cal(w).length)out.push(...endWorldSeason(w));persist();return out.filter(Boolean).join(' · ');}
  const r=_wa(w,my);if(w.phase==='season'){skipSteps(w);if(w.step>=cal(w).length){const m=endWorldSeason(w);persist();return [r,...m].filter(Boolean).join(' · ');}}
  // fisioterapeuta: una fecha menos de lesión
  if(save.staff&&save.staff.fisio&&w.out&&w.out.you>1&&!w._fisio){w.out.you--;w._fisio=true;}if(!(w.out&&w.out.you))w._fisio=false;
  return r;};}
// el campeón de una liga del exterior también puede ir a la Copa del Mundo
{const _mi=mundoInit;mundoInit=function(w){const was=w.mundo&&w.mundo.s===w.season&&w.mundo.v===2;const M=_mi(w);if(!was){const d=divOf(w,'you');
  if(isExt(d)&&wStand(w,d)[0].id==='you'&&!M.tags.you){const gi=M.groups.findIndex(G=>G.ids.some(id=>(M.tags[id]||'').startsWith('Invitado')));if(gi>=0){const G=M.groups[gi],j=G.ids.findIndex(id=>(M.tags[id]||'').startsWith('Invitado'));delete M.tags[G.ids[j]];G.ids[j]='you';M.tags.you='Campeón '+DIVSH[d];}}}return M;};}

/* ---------- Selección Argentina ---------- */
const NATT={1:{k:'americup',name:'AmeriCup',teams:['ARG','USA','BRA','CAN','PUR','URU','VEN','MEX']},2:{k:'mundial',name:'Mundial FIBA',teams:['ARG','USA','ESP','SRB','SLO','GER','CAN','FRA']},
  3:{k:'sudam',name:'Sudamericano',teams:['ARG','BRA','URU','VEN']},0:{k:'jjoo',name:'Juegos Olímpicos',teams:['ARG','USA','ESP','SRB','FRA','LTU','AUS','GRE']}};
function natPool(w,code){const L=Object.keys(RIVALS).filter(id=>natOf(id)===code);if(code==='ARG')L.push('you');return L.sort((a,b)=>ovr(wStats(w,b))-ovr(wStats(w,a)));}
function natInit(w){const T=NATT[w.season%4],rost={};T.teams.forEach(c=>rost[c]=natPool(w,c).slice(0,5));
  const arg=rost.ARG,rank=arg.indexOf('you');const str=c=>rost[c].slice(0,3).reduce((a,id)=>a+ovr(wStats(w,id)),0);
  const seeds=T.teams.slice().sort((a,b)=>str(b)-str(a));let pairs;
  if(seeds.length===8)pairs=[[seeds[0],seeds[7]],[seeds[3],seeds[4]],[seeds[1],seeds[6]],[seeds[2],seeds[5]]];else pairs=[[seeds[0],seeds[3]],[seeds[1],seeds[2]]];
  const N={s:w.season,k:T.k,name:T.name,teams:T.teams,rost,rank,called:rank>=0&&rank<5,starter:rank>=0&&rank<3,rounds:[{name:seeds.length===8?'Cuartos de final':'Semifinal',pairs,res:pairs.map(()=>null),duels:pairs.map(()=>null)}],third:null,champ:null,place:null,done:false};
  addNews(w,N.called?(N.starter?`${nT('you')}, titular en la Selección para el ${T.name}`:`${nT('you')} fue convocado al ${T.name}`):`${nT('you')} quedó afuera de la lista para el ${T.name}`,N.called?`Lista: ${arg.map(nT).join(', ')}.`:`Los convocados: ${arg.map(nT).join(', ')}.`,'you',w.step);
  return N;}
function natCur(N){if(!N||N.done)return null;const R=N.rounds[N.rounds.length-1];const i=R.res.findIndex((r,j)=>!r&&R.pairs[j].includes('ARG'));if(i>=0)return {R,i,p:R.pairs[i]};
  if(N.third&&!N.third.res&&N.third.p.includes('ARG'))return {third:true,R:N.third,i:0,p:N.third.p};return null;}
function natDuels(N,p){const [A,B]=p;return [0,1,2].map(j=>[N.rost[A][j],N.rost[B][j]]);}
function natMyDuel(N,p){const D=natDuels(N,p);const j=D.findIndex(d=>d.includes('you'));return j>=0?{j,opp:D[j][0]==='you'?D[j][1]:D[j][0]}:null;}
function natPlay(w,my){const N=w.natl,c=natCur(N);if(!c)return '';const D=natDuels(N,c.p),res=D.map(([a,b])=>{if(my&&(a==='you'||b==='you')){return a==='you'?[my.s,my.o]:[my.o,my.s];}return wSim(w,a,b);});
  const wa=res.filter(r=>r[0]>r[1]).length,winner=wa>=2?c.p[0]:c.p[1];
  if(c.third){N.third.res=[wa,3-wa];N.third.duels=res;}else{c.R.res[c.i]=[wa,3-wa];c.R.duels[c.i]=res;}
  N.gp=(N.gp||0)+1;const meIn=D.some(d=>d.includes('you'));
  if(meIn){const S=save.natStats||(save.natStats={gp:0,w:0,medals:[]});const j=D.findIndex(d=>d.includes('you')),r=res[j],won=D[j][0]==='you'?r[0]>r[1]:r[1]>r[0];S.gp++;if(won)S.w++;}
  natAdvance(w);
  const opp=c.p[0]==='ARG'?c.p[1]:c.p[0],argWon=winner==='ARG';
  return `${argWon?'¡Ganó Argentina!':'Perdió Argentina'} ${Math.max(wa,3-wa)}-${Math.min(wa,3-wa)} ante ${NATN[opp][0]}`+(N.done&&N.place?` · ${N.place}`:'');}
function natAdvance(w){const N=w.natl;let g=0;
  while(!N.done&&g++<10){const R=N.rounds[N.rounds.length-1];
    R.pairs.forEach((p,i)=>{if(!R.res[i]&&!p.includes('ARG')){const res=natDuels(N,p).map(([a,b])=>wSim(w,a,b)),wa=res.filter(r=>r[0]>r[1]).length;R.res[i]=[wa,3-wa];R.duels[i]=res;}});
    if(R.res.some(x=>!x))return;
    const win=R.pairs.map((p,i)=>R.res[i][0]>R.res[i][1]?p[0]:p[1]),lose=R.pairs.map((p,i)=>R.res[i][0]>R.res[i][1]?p[1]:p[0]);
    if(win.length>1){if(win.length===2){N.third={p:lose,res:null};}const pr=[];for(let i=0;i<win.length;i+=2)pr.push([win[i],win[i+1]]);N.rounds.push({name:win.length===4?'Semifinal':'Final',pairs:pr,res:pr.map(()=>null),duels:pr.map(()=>null)});continue;}
    if(N.third&&!N.third.res){if(N.third.p.includes('ARG'))return;const res=natDuels(N,N.third.p).map(([a,b])=>wSim(w,a,b)),wa=res.filter(r=>r[0]>r[1]).length;N.third.res=[wa,3-wa];N.third.duels=res;}
    N.champ=win[0];N.done=true;
    const third=N.third?(N.third.res[0]>N.third.res[1]?N.third.p[0]:N.third.p[1]):null;
    N.place=N.champ==='ARG'?'¡Medalla de oro!':lose[0]==='ARG'?'Medalla de plata':third==='ARG'?'Medalla de bronce':'Sin medalla';
    const medal=N.champ==='ARG'?'oro':lose[0]==='ARG'?'plata':third==='ARG'?'bronce':null;
    if(medal&&N.called){const S=save.natStats||(save.natStats={gp:0,w:0,medals:[]});S.medals.push({s:w.season,t:N.name,m:medal});if(medal==='oro')celebrate(N.name,`Temporada ${w.season} · Argentina campeón`,'cup:#75aadb:#ffd23f','#75aadb','SELECCIÓN ARGENTINA');}
    addNews(w,`${NATN[N.champ][1]} ${NATN[N.champ][0]} ganó el ${N.name}`,`Argentina: ${N.place.replace('¡','').replace('!','').toLowerCase()}.`,N.called&&medal?'you':'campeon',w.step);
    persist();}}

/* ---------- pantallas ---------- */
function flag(c){return NATN[c]?NATN[c][1]:'';}
function offerCard(M,o){const w=save.world,b=oBadges(M,o),neg=negOpts(M,o),sel=M.signed===o.id;
  const head=o.back?'Volvés a tu club':o.under?'Seguís con contrato':o.renew?'Renovación':o.purchase?'Opción de compra':o.loan?'Préstamo por una temporada':o.jump?'¡Oferta para subir!':isExt(o.d)?'Oferta del exterior':o.d===0?'¡Oferta de la NBA!':'Oferta';
  return `<div class="offer mk ${sel?'sel':''} ${o.withdrawn?'gone':''}" style="border-color:${clubColor(o.d)}"><span class="ds">${head}</span><h4>${o.club}</h4>
   <span class="ds"><b style="color:${clubColor(o.d)}">${DIVS[o.d]}</b>${isExt(o.d)?' · '+flag(extOf(o.d).nat):''}</span>
   <div class="mkg"><div><small>Sueldo</small><b>${money(o.sal)}</b></div><div><small>Contrato</small><b>${o.yrs} ${o.yrs>1?'temporadas':'temporada'}</b></div>${o.bonus?`<div><small>Prima</small><b>${money(o.bonus)}</b></div>`:''}<div><small>Nivel de la liga</small><b>${Math.round(lvlOf(w,o.d)*99)}</b></div></div>
   ${o.perks.length?`<div class="pills">${o.perks.map(k=>`<span class="pill">${PERKS[k][1]} ${PERKS[k][0]}</span>`).join('')}</div>`:''}
   ${b.length?`<div class="pills">${b.map(x=>`<span class="pill badge">${x}</span>`).join('')}</div>`:''}
   ${o.loan?`<span class="ds">Después volvés a ${w.club.n}${o.buyOpt?' · tienen opción de compra':''}</span>`:''}
   ${!o.under&&!o.back?`<div class="intb"><i style="width:${clamp(o.int,0,100)}%;background:${o.int>60?'#3ddc84':o.int>35?'#ffd23f':'#ff7a6a'}"></i></div><span class="ds">Interés del club · ${3-o.tries} intentos de negociación</span>`:''}
   ${o.msg?`<p class="ds" style="color:${o.ok?'#3ddc84':'#ff9a8a'}">${o.msg}</p>`:''}
   ${neg.length?`<div class="row" style="gap:6px;margin-top:6px">${neg.map(k=>`<button class="chip" data-mm="neg" data-o="${o.id}" data-k="${k}">${NEGK[k]}</button>`).join('')}</div>`:''}
   ${o.withdrawn?'':`<button class="btn ${sel?'primary':''}" data-mm="sign" data-o="${o.id}">${sel?'✓ Elegida':o.under?'Quedarme':o.back?'Volver a mi club':o.renew?'Renovar':'Firmar'}</button>`}</div>`;}
function marketHTML(w){const M=w.mkt;if(!M||M.s!==w.season)return '';const all=mAll(M);
  let h=`<h3>Mercado de pases</h3><p class="sub">${M.changed?`Como cambiás de liga, tu contrato con ${M.from} terminó. `:''}Te ofrecen clubes de varias ligas a la vez. Podés negociar con cada uno (cuidado: si pedís de más, bajan el interés o retiran la oferta) y elegir según lo que más te convenga: plata, entrenamiento, liga o copas.</p>`;
  if(all.length>1){const rows=[['Sueldo',o=>money(o.sal)],['Contrato',o=>o.yrs+'t'],['Prima',o=>o.bonus?money(o.bonus):'—'],['Liga',o=>DIVSH[o.d]],['Entrenamiento',o=>o.perks.includes('elite')?'Élite':'Normal']];
    h+=`<div class="tblwrap"><table class="cmp"><thead><tr><th class="l">Comparar</th>${all.map(o=>`<th>${o.club.split(' ').slice(0,2).join(' ')}</th>`).join('')}</tr></thead><tbody>${rows.map(([n,f])=>`<tr><td class="l">${n}</td>${all.map(o=>`<td>${f(o)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;}
  h+=`<div class="offers">${all.map(o=>offerCard(M,o)).join('')}</div>`;
  if(M.signed==null)h+=`<p class="sub" style="color:#ffd23f">${M.stay&&(M.stay.under||M.stay.back)?'Si no firmás con nadie, seguís donde estás.':'Elegí una oferta para empezar la temporada que viene.'}</p>`;
  return h;}
function natHTML(w,compact){const N=w.natl,S=save.natStats||{gp:0,w:0,medals:[]};let h='';
  if(!compact){h+=`<p class="sub">En cada verano juega la Selección: AmeriCup, Mundial FIBA, Sudamericano o Juegos Olímpicos. Cada cruce son tres duelos de mano a mano: los tres mejores de cada país, el 1 contra el 1, el 2 contra el 2 y el 3 contra el 3. Gana el país que se queda con dos duelos. Si estás entre los tres mejores argentinos, tu duelo lo jugás vos.</p>`;
    h+=`<div class="tiles"><div><span>Duelos con la Selección</span><b>${S.gp}</b></div><div><span>Ganados</span><b>${S.w}</b></div><div><span>Medallas</span><b>${S.medals.length?S.medals.map(m=>({oro:'🥇',plata:'🥈',bronce:'🥉'}[m.m])).join(''):'—'}</b></div></div>`;
    if(S.medals.length)h+=`<div class="results">${S.medals.map(m=>`<div><span>${{oro:'🥇',plata:'🥈',bronce:'🥉'}[m.m]} ${m.t}</span><span>Temporada ${m.s}</span></div>`).join('')}</div>`;}
  if(!N){if(!compact)h+=`<p class="sub">La próxima convocatoria es al final de esta temporada.</p>`;return h;}
  h+=`<h3>${flag('ARG')} Selección Argentina · ${N.name}</h3>`;
  h+=`<p class="sub">${N.called?(N.starter?`Estás convocado y sos titular (el ${N.rank+1}º mejor argentino): tu duelo lo jugás vos.`:'Estás convocado, pero arrancás desde el banco: los duelos los juegan los tres mejores.'):'Esta vez no entraste en la lista. Mejorá tu nivel para que te llamen.'} Lista: ${N.rost.ARG.map(nm).join(', ')}.</p>`;
  const R0=N.rounds;R0.forEach(R=>{h+=`<div class="series" style="margin:6px 0"><div class="t">${R.name}</div><div class="results">${R.pairs.map((p,i)=>{const x=R.res[i];return `<div${p.includes('ARG')?' style="background:rgba(117,170,219,.15)"':''}><span class="${x&&x[0]>x[1]?'w':x?'lo':''}">${flag(p[0])} ${NATN[p[0]][0]}</span><span>${x?x[0]+' – '+x[1]:'vs'}</span><span class="${x&&x[1]>x[0]?'w':x?'lo':''}">${NATN[p[1]][0]} ${flag(p[1])}</span></div>`;}).join('')}</div></div>`;});
  if(N.third)h+=`<div class="series" style="margin:6px 0"><div class="t">Tercer puesto</div><div class="results"><div><span>${flag(N.third.p[0])} ${NATN[N.third.p[0]][0]}</span><span>${N.third.res?N.third.res[0]+' – '+N.third.res[1]:'vs'}</span><span>${NATN[N.third.p[1]][0]} ${flag(N.third.p[1])}</span></div></div></div>`;
  if(N.done)h+=`<div class="champ"><span class="sub">${N.name} · campeón: ${flag(N.champ)} ${NATN[N.champ][0]}</span><b>Argentina: ${N.place}</b></div>`;
  else{const c=natCur(N);if(c){const opp=c.p[0]==='ARG'?c.p[1]:c.p[0],md=natMyDuel(N,c.p);const D=natDuels(N,c.p);
    h+=`<div class="nextm" style="display:block"><div class="ds">${c.third?'Tercer puesto':c.R.name} · ${flag('ARG')} Argentina vs ${NATN[opp][0]} ${flag(opp)}</div><div class="results">${D.map(([a,b],j)=>`<div><span>${j+1}. ${nm(c.p[0]==='ARG'?a:b)}</span><span>vs</span><span>${nm(c.p[0]==='ARG'?b:a)}</span></div>`).join('')}</div>
      <div class="row" style="gap:8px;margin-top:8px">${md?`<button class="btn primary" data-mm="natplay">Jugar tu duelo vs ${teamName(md.opp)}</button><button class="chip" data-mm="natsim">Simular</button>`:`<button class="btn primary" data-mm="natsim">Simular el partido</button>`}</div></div>`;}}
  return h;}
function intCupsHTML(w){const I=w.icup;if(!I||I.s!==w.season)return '<p class="sub">Las copas internacionales arrancan con la temporada.</p>';
  let h=`<p class="sub">Las juegan los mejores de la temporada anterior: la <b>BCL Américas</b> (4 de la Liga Nacional, 3 de Brasil y el mejor de Uruguay) y la <b>Champions League</b> (2 de España, 2 de Italia, 1 de Grecia, 1 de Turquía y 2 de Lituania). Los dos campeones se cruzan en la <b>Copa Intercontinental</b>. Cuartos, semis y final a partido único.</p>`;
  if(I.ic&&I.ic.champ)h+=`<div class="champ"><span class="sub">Campeón Intercontinental</span><b>${nm(I.ic.champ)}</b></div>`;
  for(const key of ['bcl','ucl']){const C=I.cups[key];h+=`<h3>${C.name}</h3>`;if(C.champ)h+=`<div class="champ"><span class="sub">Campeón</span><b>${nm(C.champ)}</b></div>`;
    for(let r=C.rounds.length-1;r>=0;r--){const R=C.rounds[r];h+=`<div class="series" style="margin:6px 0"><div class="t">${R.name}</div><div class="results">${R.pairs.map((p,i)=>{const x=R.res[i];return `<div${p.includes('you')?' style="background:rgba(255,210,63,.12)"':''}><span class="${x&&x[0]>x[1]?'w':x?'lo':''}">${nm(p[0])} <small class="sub">${DIVSH[divOf(w,p[0])]||''}</small></span><span>${x?x[0]+' – '+x[1]:'vs'}</span><span class="${x&&x[1]>x[0]?'w':x?'lo':''}">${nm(p[1])} <small class="sub">${DIVSH[divOf(w,p[1])]||''}</small></span></div>`;}).join('')}</div></div>`;}}
  if(I.ic)h+=`<div class="series" style="margin:6px 0"><div class="t">Copa Intercontinental</div><div class="results"><div><span>${nm(I.ic.a)}</span><span>${I.ic.res?I.ic.res[0]+' – '+I.ic.res[1]:'vs'}</span><span>${nm(I.ic.b)}</span></div></div></div>`;
  const H=(w.icHist||[]).slice(-6).reverse();if(H.length)h+=`<h3>Historial</h3><div class="results">${H.map(x=>`<div><span>T${x.s}</span><span>BCL: ${x.bcl?teamName(x.bcl):'—'} · Champions: ${x.ucl?teamName(x.ucl):'—'} · Intercontinental: ${x.ic?teamName(x.ic):'—'}</span></div>`).join('')}</div>`;
  return h;}
function wClubHTML(w){const C=w.club||{},d=divOf(w,'you');let h='';
  h+=`<div class="champ" style="border-color:${clubColor(C.d)}"><span class="sub">${C.loan?'A préstamo en':'Tu club'}</span><b>${C.n||'—'}</b><span>${DIVS[d]||''}${isExt(d)?' · '+flag(extOf(d).nat):''}</span></div>`;
  h+=`<div class="tiles"><div><span>Sueldo</span><b>${money(C.sal)}</b></div><div><span>Contrato</span><b>${C.yrs||0} ${(C.yrs||0)===1?'temporada':'temporadas'}</b></div><div><span>Tu plata</span><b>${money(save.money)}</b></div><div><span>Nivel de la liga</span><b>${Math.round(lvlOf(w,d)*99)}</b></div></div>`;
  if((C.perks||[]).length)h+=`<div class="pills">${C.perks.map(k=>`<span class="pill">${PERKS[k][1]} ${PERKS[k][0]} · <small>${PERKS[k][2]}</small></span>`).join('')}</div>`;
  if(C.loan)h+=`<p class="sub">Estás a préstamo: al final de la temporada volvés a ${C.loan.parent.n} (${DIVS[C.loan.parent.d]})${C.loan.buy?', salvo que ejecuten la opción de compra':''}.</p>`;
  h+=`<h3>Tu staff</h3><p class="sub">Lo pagás con tu plata, al final de cada temporada.</p><div class="offers">${Object.entries(STAFF).map(([k,[n,dsc]])=>{const on=save.staff&&save.staff[k],c=staffCost(w,k);
    return `<div class="offer ${on?'sel':''}"><h4>${n}</h4><span class="ds">${dsc}</span><span class="ds">${money(c)} por temporada</span><button class="btn ${on?'':'primary'}" data-mm="staff" data-k="${k}" ${!on&&(save.money||0)<c?'disabled':''}>${on?'Despedir':'Contratar'}</button></div>`;}).join('')}</div>`;
  const H=(w.clubHist||[]).slice().reverse();if(H.length)h+=`<h3>Tus clubes</h3><div class="results">${H.map(x=>`<div><span>Temporada ${x.s}</span><span>${x.club}${x.loan?' (préstamo)':''}</span><span class="sub">${DIVSH[x.d]||''}</span></div>`).join('')}</div>`;
  h+=`<h3>Ligas del mundo</h3><p class="sub">Además de las nueve divisiones (de las plazas a la NBA) hay diez ligas del exterior. No tienen ascensos ni descensos: se llega con ofertas del mercado de pases al final de cada temporada.</p><div class="tiles">${EXT.map(L=>`<div><span>${flag(L.nat)} ${L.sh}</span><b>${Math.round(lvlOf(w,L.d)*99)}</b></div>`).join('')}</div>`;
  return h;}
{const _wt=wTempHTML;wTempHTML=function(w,myD){let h=_wt(w,myD);
  if(w.phase==='done'){const add=marketHTML(w)+natHTML(w,true)+`<div class="row" style="margin-top:14px"><button class="btn primary" id="wdNew2">Empezar temporada ${w.season+1}</button></div>`;
    const i=h.indexOf('<h3>Campeones</h3>');h=i>=0?h.slice(0,i)+add+h.slice(i):h+add;}
  else{const C=w.club;if(C)h=h.replace('<div class="tiles"><div><span>Tu puesto</span>',`<div class="tiles"><div><span>${C.loan?'A préstamo en':'Tu club'}</span><b>${C.n}</b></div><div><span>Sueldo</span><b>${money(C.sal)}</b></div><div><span>Tu puesto</span>`);
    if(isExt(myD))h=h.replace('Entrás más adelante: cada división entra en una ronda distinta.','Jugás en el exterior: la Copa Argentina es para los que juegan en el país.');
    if(isExt(myD))h=h.replace('<span>Copa Argentina</span><b>Entrás más adelante</b>','<span>Copa Argentina</span><b>No la jugás (estás afuera)</b>');
    const I=w.icup;if(I&&I.s===w.season&&icupHasMe(w)===false&&[I.cups.bcl,I.cups.ucl].some(C2=>C2.ids.includes('you')&&!C2.champ))h=h.replace('<h3>Tabla',`<p class="lastnews"><small>Copa internacional</small><b>Seguís en carrera: mirá la pestaña Copas</b></p><h3>Tabla`);}
  return h;};}
{const _aw=awardsHTML;awardsHTML=function(aw,mine){return _aw(aw.map((a,d)=>d<ND||d===mine?a:null),mine);};}
{const _rw=renderWorld;renderWorld=function(){_rw();const w=save.world;if(!w||!w.divs)return;const n2=document.getElementById('wdNew2');if(n2)n2.onclick=()=>document.getElementById('wdNew').click();const ns=document.getElementById('wdNew');
  if(ns){const M=w.mkt,N=w.natl;ns.onclick=()=>{if(N&&N.s===w.season&&!N.done){natAdvanceAll(w);}if(M&&M.s===w.season&&M.signed==null&&!(M.stay&&(M.stay.under||M.stay.back))){if(!M.stay&&!mAll(M).length){}else{const el=document.querySelector('.offers .offer.mk');if(el){el.scrollIntoView({behavior:'smooth',block:'center'});toast('Elegí una oferta antes de seguir');return;}}}
    wNewSeason(w);worldDiv=divOf(w,'you');renderWorld();};}};}
function natAdvanceAll(w){const N=w.natl;let g=0;while(N&&!N.done&&g++<8){if(natCur(N))natPlay(w,null);else natAdvance(w);}}
document.addEventListener('click',e=>{const b=e.target.closest('[data-mm]');if(!b)return;const w=save.world;if(!w)return;const k=b.dataset.mm;
  if(k==='sign'){const o=mById(w.mkt,b.dataset.o);if(o){signOffer(w,o);renderWorld();}}
  else if(k==='neg'){const o=mById(w.mkt,b.dataset.o);if(o){const m=negotiate2(w.mkt,o,b.dataset.k);toast(m);renderWorld();}}
  else if(k==='staff'){const S=save.staff||(save.staff={}),key=b.dataset.k;if(S[key])delete S[key];else{const c=staffCost(w,key);if((save.money||0)>=c){S[key]=1;}}persist();renderWorld();}
  else if(k==='natsim'){const r=natPlay(w,null);toast(r);persist();renderWorld();}
  else if(k==='natplay'){const N=w.natl,c=natCur(N),md=c&&natMyDuel(N,c.p);if(!md)return;const opp=md.opp;
    startMatch({rival:opp,court:N.k==='sudam'?'estadio':'nba',target:11,time:w.time,rule:'cambio',diff:Math.max(0,(DIVDIFF[Math.max(0,divOf(w,opp))]||.1))+.06+((w.drift[opp]||0)/.07),natl:true,stageLabel:`${N.name} · ${c.third?'Tercer puesto':c.R.name} · Argentina vs ${NATN[c.p[0]==='ARG'?c.p[1]:c.p[0]][0]}`});}
});
{const _sr=showResult;showResult=function(won){const cfg=game.cfg||{};_sr(won);if(!cfg.natl||!save.world)return;const [a,b]=game.players;const w=save.world;
  const r=natPlay(w,{s:a.score,o:b.score});persist();$('#rReward').insertAdjacentHTML('afterbegin',`<span class="reward">${r}</span>`);
  const bt=$('#rBtns');bt.innerHTML='';const x=document.createElement('button');x.className='btn primary';x.textContent='Volver a la carrera';x.onclick=()=>{startDemo();worldTab='temp';show('world');};bt.appendChild(x);};}
// vitrina: copas internacionales y medallas
{const _tr=trophies;trophies=function(){const L=_tr(),w=save.world,H=(w&&w.icHist)||[],S=save.natStats||{medals:[]};const add=(kind,col,name,n,detail,hint)=>L.push({kind,col,name,n,detail,hint});
  const ss=f=>H.filter(f).map(x=>x.s);const b=ss(x=>x.bcl==='you'),u=ss(x=>x.ucl==='you'),ic=ss(x=>x.ic==='you');
  add('cup:#75aadb:#ffd23f','#75aadb','BCL Américas',b.length,b.length?'Temporada '+b.join(', '):'','Ganala jugando en la Liga Nacional, Brasil o Uruguay');
  add('cup:#3a86ff:#ffd23f','#3a86ff','Champions League',u.length,u.length?'Temporada '+u.join(', '):'','Ganala jugando en España, Italia, Grecia, Turquía o Lituania');
  add('cup:#ffd23f:#75aadb','#ffd23f','Copa Intercontinental',ic.length,ic.length?'Temporada '+ic.join(', '):'','Campeón de BCL contra campeón de la Champions');
  for(const [m,col,n] of [['oro','#ffd23f','Medallas de oro con la Selección'],['plata','#d6dee8','Medallas de plata con la Selección'],['bronce','#e0a070','Medallas de bronce con la Selección']]){const M=S.medals.filter(x=>x.m===m);add('cup:'+col+':#75aadb',col,n,M.length,M.map(x=>x.t+' T'+x.s).join(', '),'Jugá con la Selección en el verano');}
  return L;};}
