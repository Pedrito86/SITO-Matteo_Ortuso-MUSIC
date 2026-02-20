export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-neutral-400 text-sm uppercase tracking-widest">
          Ultimo aggiornamento: {new Date().getFullYear()}
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Titolare del trattamento</h2>
          <p className="text-neutral-200">
            Il titolare del trattamento dei dati personali è <span className="font-semibold">Matteo Ortuso</span>.
          </p>
          <p className="text-neutral-200">
            Contatti:{" "}
            <a
              href="mailto:ortusomatteo11@gmail.com"
              className="underline hover:text-neutral-300"
            >
              ortusomatteo11@gmail.com
            </a>{" "}
            – Tel.{" "}
            <a
              href="tel:+393400939406"
              className="underline hover:text-neutral-300"
            >
              +39 340 093 9406
            </a>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Tipologie di dati trattati</h2>
          <p className="text-neutral-200">
            Il sito è principalmente informativo e promozionale dell&apos;attività musicale di Matteo
            Ortuso. I dati personali trattati sono limitati a:
          </p>
          <ul className="list-disc list-inside text-neutral-200 space-y-1">
            <li>
              Dati di contatto inviati volontariamente dall&apos;utente tramite email o telefono
              (nome, indirizzo email, numero di telefono e contenuto del messaggio).
            </li>
            <li>
              Dati tecnici di navigazione raccolti in modo automatico dai sistemi informatici o da
              servizi di terze parti (indirizzo IP, tipo di browser, informazioni sul dispositivo),
              necessari al funzionamento del sito.
            </li>
            <li>
              Dati derivanti dall&apos;utilizzo di contenuti incorporati di terze parti (es. YouTube,
              Instagram), che possono installare cookie o raccogliere informazioni sull&apos;utente
              secondo le rispettive informative.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Finalità e base giuridica del trattamento</h2>
          <p className="text-neutral-200">I dati personali sono trattati per le seguenti finalità:</p>
          <ul className="list-disc list-inside text-neutral-200 space-y-1">
            <li>
              Rispondere a richieste di informazioni, booking e collaborazione inviate
              volontariamente dall&apos;utente. Base giuridica: esecuzione di misure precontrattuali
              e legittimo interesse del titolare.
            </li>
            <li>
              Garantire il corretto funzionamento tecnico del sito e la sicurezza delle sue
              funzionalità. Base giuridica: legittimo interesse del titolare.
            </li>
            <li>
              Mostrare contenuti multimediali relativi ai brani e ai video pubblicati (es. player
              YouTube, embed Instagram). Base giuridica: legittimo interesse alla promozione
              dell&apos;attività artistica.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Modalità del trattamento</h2>
          <p className="text-neutral-200">
            I dati sono trattati con strumenti elettronici e telematici, adottando misure di
            sicurezza adeguate a prevenire accessi non autorizzati, divulgazione, modifica o
            distruzione dei dati personali.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Ambito di comunicazione dei dati</h2>
          <p className="text-neutral-200">
            I dati forniti non sono oggetto di diffusione. Possono essere comunicati esclusivamente
            a:
          </p>
          <ul className="list-disc list-inside text-neutral-200 space-y-1">
            <li>
              Fornitori di servizi tecnici e di hosting necessari al funzionamento del sito
              (es. provider di hosting, piattaforme per la pubblicazione del sito).
            </li>
            <li>
              Soggetti che erogano servizi strettamente connessi all&apos;attività del titolare
              (es. consulenti tecnici), sempre nel rispetto della normativa vigente.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Conservazione dei dati</h2>
          <p className="text-neutral-200">
            I dati di contatto inviati volontariamente sono conservati per il tempo necessario a
            gestire la richiesta e, se del caso, per adempiere agli obblighi contrattuali o legali.
            I dati tecnici di navigazione sono conservati per periodi limitati, compatibili con le
            finalità di sicurezza e funzionamento del sito.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Diritti dell&apos;interessato</h2>
          <p className="text-neutral-200">
            In qualità di interessato, l&apos;utente può esercitare in qualsiasi momento i diritti
            previsti dalla normativa applicabile in materia di protezione dei dati personali,
            tra cui:
          </p>
          <ul className="list-disc list-inside text-neutral-200 space-y-1">
            <li>diritto di accesso ai dati personali;</li>
            <li>diritto di rettifica o aggiornamento dei dati;</li>
            <li>diritto alla cancellazione nei casi previsti;</li>
            <li>diritto alla limitazione del trattamento;</li>
            <li>diritto di opposizione al trattamento per motivi legittimi.</li>
          </ul>
          <p className="text-neutral-200">
            Per esercitare tali diritti è possibile contattare il titolare all&apos;indirizzo email{" "}
            <a
              href="mailto:ortusomatteo11@gmail.com"
              className="underline hover:text-neutral-300"
            >
              ortusomatteo11@gmail.com
            </a>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Reclamo all&apos;autorità di controllo</h2>
          <p className="text-neutral-200">
            L&apos;utente ha inoltre il diritto di proporre reclamo all&apos;autorità di controllo
            competente in materia di protezione dei dati personali, qualora ritenga che il
            trattamento avvenga in violazione della normativa applicabile.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">9. Modifiche a questa informativa</h2>
          <p className="text-neutral-200">
            Il titolare si riserva il diritto di aggiornare la presente Privacy Policy per adeguarla
            a eventuali modifiche normative o tecniche. Le modifiche saranno pubblicate su questa
            pagina.
          </p>
        </section>
      </div>
    </main>
  );
}

