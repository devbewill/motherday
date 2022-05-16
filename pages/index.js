import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mother s day</title>
        <meta name="description" content="Mother's day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h2>
          <em>..ma tu sei la mamma ❤️ e non dormi mai...</em>
        </h2>
        <div>
          Quel giorno di aprile in cui tutto é cambiato, quel giorno in cui mi
          hai mostrato un pezzo di plastica che si portava dietro un grande
          evento, una rivoluzione, una gioia ma soprattutto una grande
          responsabilità.
          <div className="image-wrapper">
            <Image
              src="/ops.jpg"
              layout="responsive"
              width={700}
              height={1000}
            />
          </div>
          Quando l&apos;ho visto sono rimasto senza parole, ho avuto paura e
          allo stesso tempo ho provato una fortissima emozione, mi sono balenate
          per la testa mille domande, mille insicurezze, dubbi e timori ma a
          tutto questo ho reagito con un pensiero, il pensiero che se anche in
          qualche momento non fossi stato all’altezza della situazione
          sicuramente lo saresti stata tu a provvedere.<br></br>
          Non ho dubitato neanche per un istante delle tua capacità di essere
          madre, non ho mai dubitato della forza che saresti riuscita a trovare
          se la vita ti avesse richiesto di farlo, questo pensiero mi ha in
          qualche modo cancellato dalla mente ogni paura in colpo solo.{" "}
          <br></br>
          Saresti diventata mamma (e io papà), stupendo! 🥳 <br></br>
          La pancia iniziò a fare capolino, settimana dopo settimana quella
          creaturina speciale iniziava a prendere sempre più spazio.
          <div className="image-wrapper">
            <Image
              src="/pancia0.jpg"
              layout="responsive"
              width={700}
              height={1000}
            />
          </div>
          <div className="image-splitted">
            <div className="image-container">
              <Image src="/pancia1.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className="image-container">
              <Image src="/pancia2.jpg" layout="fill" objectFit="contain" />
            </div>
          </div>
          Diventavi ogni giorno più bella e radiosa, il tuo corpo, pur cambiando
          rimaneva sempre il miglior corpo che io abbia mai desiderato guardare,
          lo amavo come ho sempre fatto, desideravo sentirlo vicino al mio in
          ogni momento della giornata, desideravo sentire te vicina, in
          silenzio, per godermi quella meraviglia che stava accadendo. <br></br>
          Un giorno poi, all&apos;improvviso, BOOM! fanno capolino loro 😱
          <div className="image-wrapper">
            <Image
              src="/tette.jpg"
              layout="responsive"
              width={700}
              height={1000}
            />
          </div>
          Le tue tette perfette ora erano delle tette perfette X 5.
          <br></br>
          La pancia piano piano cresceva, ad agosto abbiamo avuto un assaggio di
          quella che sarebbe stata la nostra piccolina:
          <div className="image-wrapper">
            <Image
              src="/eco-4mesi.jpg"
              layout="responsive"
              width={700}
              height={1000}
            />
          </div>
          quanta emozione.. ancora più impazienza e più voglia di conoscerla ci
          avrebbe accompagnato per i mesi a venire.<br></br>
          Il sole, il mare, le quintalate di protezione solare e la nostra
          estate senza poter bere alcol, mangiare pesce, carne o prosciutto
          crudo 😭 che fatica povera mamma. Il pancino aumentava, aumentava e
          aumentava
          <div className="image-splitted">
            <div className="image-container">
              <Image src="/pancia3.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className="image-container">
              <Image src="/pancia-mare.jpg" layout="fill" objectFit="contain" />
            </div>
          </div>
          <div className="image-wrapper" style={{ padding: "0 1em 1em" }}>
            <Image
              src="/pancia-mare-2.jpg"
              layout="responsive"
              width={1000}
              height={700}
            />
          </div>
          oramai era diventato impossible anche trovare posti furbi per giocare
          a nascondino 🤣
          <div className="image-wrapper">
            <Image
              src="/nascondino.jpg"
              layout="responsive"
              width={700}
              height={1000}
            />
          </div>
          Insieme alla pancia aumentava la fame e la golosità, quella bimba
          rubava un sacco di energie e tu avevi sempre più bisogno di pappa
          <div className="image-splitted">
            <div className="image-container">
              <Image src="/fame2.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className="image-container">
              <Image src="/fame.jpg" layout="fill" objectFit="contain" />
            </div>
          </div>
          e di nanna 😴
          <div className="image-wrapper">
            <Image
              src="/idroscalo.jpg"
              layout="responsive"
              width={700}
              height={1000}
            />
          </div>
          Arriva poi il periodo del tanto atteso Natale, l’ultimo mese di
          attese, sapevamo che quel mese sarebbe arrivata Cecilia, la nostra
          Cecilia, il più bel regalo che la vita ci potesse fare.<br></br>
        </div>
        <video
          src={"/calcetti.mp4"}
          controls
          playsInline
          className="videoBackground"
        />
        <div>
          Abbiamo fatto l’albero insieme alla tua famiglia
          <div className="image-wrapper">
            <Image
              src="/albero.jpg"
              layout="responsive"
              width={700}
              height={1000}
            />
          </div>
          abbiamo preparato tutto l’occorrente per gestire il nuovo arrivo e
          nell’attesa abbiamo fantasticato su come sarebbe stato avere un +1
          dentro casa.. <br></br>
          Poi una notte, il 12 dicembre, mi svegli dicendomi che forse ti si
          erano rotte le acque, io tocco il letto, non sento bagnato e ti dico
          “no tranqui” e mi rimetto a dormire, dopo qualche ora mi risvegli e mi
          dici che hai le contrazioni, allora io mi alzo e da bravo scolaretto
          che ha studiato 🤓 provo a fare come avevo letto di fare, segno la
          durata e l’intervallo delle contrazioni per vedere se sono regolari e
          nel caso, via di corsa all’ospedale. Niente nessuna regolarità né in
          tempistica né in intervallo
          <div className="image-wrapper">
            <Image
              src="/contrazioni.jpg"
              layout="responsive"
              width={1000}
              height={1700}
            />
          </div>
          Nel dubbio però forse una capatina all’ospedale era meglio farla anche
          se in realtà mancava ancora una settimana al termine..<br></br>
          Chiamo il Taxi mi carico valige, trolley e zainetti con i viveri che
          neanche stessimo facendo un campeggio nel deserto e via verso
          l’ospedale con la convinzione che nel giro di qualche ora saremmo
          tornati a casa e invece…
          <br></br>5cm di dilatazione, via in sala parto, tu con una
          tranquillità anomala, io con un’agitazione terribile arriviamo li in
          quella stanza dove ci vengono fatte tutte le domande di rito.{" "}
          <br></br>
          Ci siamo, é ora delle spinte, tu bravissima, spinte perfette, niente
          urla, nessun timore, nel giro di 10 spinte scarse fa capolino il
          testino di Ceci che ancora prima di essere completamente fuori, ci
          comunica con un pianto, che è li, che sta uscendo, che è pronta ad
          abbracciarci.<br></br> La spinta dopo finalmente esce ciò che sarebbe
          stato la cosa più bella fatta nelle nostre vite, sono le 12:28 e ora
          siamo in tre. <br></br>
          Taglio il cordone e prendo il telefono per immortalare la magia della
          vita, la mamma e la sua bimba che si guardano per la prima volta 😍.
        </div>
        <video
          src={"/eccola.mp4"}
          controls
          playsInline
          className="videoBackground"
        />
        <div>
          Avevo gli occhi pieni di lacrime dall’emozione, é stata una cosa
          indescrivibile.. Eri mamma, lo eri diventata veramente..
          <div className="image-splitted">
            <div className="image-container">
              <Image
                src="/prima-poppata2.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="image-container">
              <Image
                src="/prima-poppata-pa.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="image-wrapper">
            <Image
              src="/mangiagalli.jpg"
              layout="responsive"
              width={756}
              height={756}
            />
          </div>
          Da allora il dormire (per come ce lo ricordavamo) é diventato un mero
          ricordo ma c’era Ceci lì con noi e questo faceva passare tutto in
          secondo piano.. Non so quante volte sono stato lì a guardarvi dormire,
          una sull’altra, una affianco all’altra, così belle, così perfette,
          così innamorate 🥰
          <div className="image-splitted">
            <div className="image-container" style={{ padding: "0 1em 0 1em" }}>
              <Image src="/nanna0.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className="image-container">
              <Image src="/nanna2.jpg" layout="fill" objectFit="contain" />
            </div>
          </div>
          <div className="image-splitted" style={{ padding: "0 1em 0 1em" }}>
            <div className="image-container">
              <Image src="/nanna3.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className="image-container">
              <Image src="/nanna-alto.jpg" layout="fill" objectFit="contain" />
            </div>
          </div>
          <div className="image-wrapper" style={{ padding: "0 1em 1em 1em" }}>
            <Image
              src="/nanna5.jpg"
              layout="responsive"
              width={1100}
              height={800}
            />
          </div>
          Poi il 19, dopo solo una settimana, da banalissimi genitori ansiosi
          via in pronto soccorso 🏥 perché la bimba non smette di piangere.
          <br></br>
          <div className="image-wrapper">
            <Image
              src="/ps.jpg"
              layout="responsive"
              width={750}
              height={1000}
            />
          </div>
          Niente, doveva solo fare la 💩 , tutto qua, però da quel momento
          abbiamo imparato a non preoccuparci all&apos;istante, anche perché da
          lì a poco, fare la cacca, non sarebbe stato più un problema per lei,
          anzi…
          <br></br> Il 23 primo bagnetto!!
          <div className="image-wrapper">
            <Image
              src="/bagnetto.jpg"
              layout="responsive"
              width={750}
              height={1000}
            />
          </div>
          Ci siamo sgrasciate, non si poteva arrivare a Natale con ancora
          addosso residui di placenta. Ciciula era ancora tutta piccina,
          magrolina e rugosetta, ma quanto era bella?!
          <div className="image-wrapper">
            <Image
              src="/natale.jpg"
              layout="responsive"
              width={750}
              height={1000}
            />
          </div>
          Il 6 Gennaio, la befana, approfittando di uno dei primi spiragli di
          sole 😎 , nonostante il freddo milanese abbiamo fatto il primo giretto
          al parco sotto casa
          <div className="image-wrapper">
            <Image
              src="/parco.jpg"
              layout="responsive"
              width={750}
              height={1000}
            />
          </div>
          la piccola ha dormito tutto il tempo e noi abbiamo capito che lei
          fuori si rilassava e soprattutto D-O-R-M-I-V-A, grande cosa!
          <br></br>Da lì, il freddo inverno milanese é passato, tra una dormita
          e l’altra
          <div className="image-wrapper">
            <Image
              src="/sbadiglio.jpg"
              layout="responsive"
              width={800}
              height={1000}
            />
          </div>
          un balletto
          <video
            src={"/watussi.mp4"}
            controls
            playsInline
            className="videoBackground"
          />
          un altro balletto
          <video
            src={"/ballo.mp4"}
            controls
            playsInline
            className="videoBackground"
          />
          e in attesa del caldo estivo, del mare e delle vacanze.. Come tutti
          (tranne mamma) d’inverno si ingrassa 🐷 e ciciulena non ha fatto
          eccezione..
          <div className="image-wrapper">
            <Image
              src="/ciciulena-fat.jpg"
              layout="responsive"
              width={800}
              height={800}
            />
          </div>
          I primi mesi sono passati e tra un selfie l&apos;altro
          <div className="image-wrapper">
            <Image
              src="/selfie.jpg"
              layout="responsive"
              width={800}
              height={1100}
            />
          </div>
          immaginandola con i capelli
          <div className="image-wrapper">
            <Image
              src="/ceci-bionda.jpg"
              layout="responsive"
              width={750}
              height={660}
            />
          </div>
          finalmente il caldo é arrivato e si è volati con destinazione Catania
          <div className="image-splitted">
            <div className="image-container" style={{ padding: "0 1em 0 1em" }}>
              <Image src="/aeroporto.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className="image-container">
              <Image src="/aereo.jpg" layout="fill" objectFit="contain" />
            </div>
          </div>
          Ceci può stare all’aperto e conoscere finalmente il mare
          <div className="image-splitted">
            <div className="image-container" style={{ padding: "0 1em 0 1em" }}>
              <Image src="/spiaggia1.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className="image-container">
              <Image src="/spiaggia2.jpg" layout="fill" objectFit="contain" />
            </div>
          </div>
          Sono stati mesi stancanti e impegnativi ma la nostra bimba é stupenda,
          ogni giorno sempre di più.. <br></br>
          Tu sei una mamma pazzesca, sei una donna pazzesca, testarda come un
          mulo ma forse anche per questo riesci ad essere così brava nel farlo..{" "}
          <br></br>Ho tanta stima e ammirazione per come riesci ad essere con
          Ceci, la premura che hai nei suoi confronti, l’amore che trasuda da
          ogni poro della pelle ti rende una madre come poche.. <br></br>
          Scusa per il ritardo di queste parole, ho provato a rimediare e spero
          di esserci riuscito almeno in parte e nel caso non fosse così mi ha
          comunque fatto molto piacere ripercorrere questa strada che abbiamo
          condiviso fino a qua, con tante menate, discussioni e stupidi scontri,
          tutte cose che non intaccano e mai potranno intaccare il bene, la
          gioia e la soddisfazione della perfetta meraviglia che io e te insieme
          siamo riusciti a mettere al mondo. <br></br>Grazie per essere la
          migliore madre che mia figlia potesse avere.<br></br>
          <div style={{ textAlign: "right" }}>papà</div>
        </div>
      </main>
    </div>
  );
}
