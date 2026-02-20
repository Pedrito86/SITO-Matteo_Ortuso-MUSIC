export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Cookie Policy</h1>
        <p className="text-neutral-400 text-sm uppercase tracking-widest">
          Ultimo aggiornamento: {new Date().getFullYear()}
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Cosa sono i cookie</h2>
          <p className="text-neutral-200">
            I cookie sono piccoli file di testo che i siti visitati dall&apos;utente inviano al suo
            dispositivo, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla
            visita successiva. I cookie permettono al sito di funzionare in modo efficiente e di
            migliorare i servizi offerti.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Cookie utilizzati da questo sito</h2>
          <p className="text-neutral-200">
            Il sito è focalizzato sulla presentazione dell&apos;attività musicale di Matteo Ortuso e
            non utilizza cookie di profilazione propri. Possono tuttavia essere presenti:
          </p>
          <ul className="list-disc list-inside text-neutral-200 space-y-1">
            <li>
              Cookie tecnici, necessari al corretto funzionamento del sito e all&apos;erogazione dei
              contenuti.
            </li>
            <li>
              Cookie di terze parti, generati dai servizi esterni integrati nelle pagine (ad esempio
              YouTube e Instagram).
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Contenuti incorporati di terze parti</h2>
          <p className="text-neutral-200">
            Il sito integra contenuti multimediali provenienti da piattaforme esterne, come:
          </p>
          <ul className="list-disc list-inside text-neutral-200 space-y-1">
            <li>YouTube (video e player musicali).</li>
            <li>Instagram (reel e contenuti social incorporati).</li>
          </ul>
          <p className="text-neutral-200">
            Queste piattaforme possono utilizzare cookie e tecnologie simili per raccogliere
            informazioni sull&apos;utilizzo dei propri servizi da parte dell&apos;utente. Il
            trattamento di tali dati avviene in qualità di autonomi titolari e secondo le rispettive
            informative privacy e cookie policy.
          </p>
          <p className="text-neutral-200">
            Per maggiori informazioni, si rimanda alle pagine dedicate:
          </p>
          <ul className="list-disc list-inside text-neutral-200 space-y-1">
            <li>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-neutral-300"
              >
                Informativa sulla privacy di Google/YouTube
              </a>
            </li>
            <li>
              <a
                href="https://privacycenter.instagram.com/policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-neutral-300"
              >
                Informativa sulla privacy di Instagram
              </a>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Gestione dei cookie</h2>
          <p className="text-neutral-200">
            L&apos;utente può gestire le preferenze relative ai cookie direttamente dal proprio
            browser, bloccandone l&apos;installazione o cancellando i cookie già presenti. La
            disattivazione dei cookie tecnici potrebbe compromettere il corretto funzionamento di
            alcune parti del sito.
          </p>
          <p className="text-neutral-200">
            Di seguito alcuni link alle istruzioni di gestione dei cookie nei principali browser:
          </p>
          <ul className="list-disc list-inside text-neutral-200 space-y-1">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-neutral-300"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/it/kb/attivare-e-disattivare-i-cookie"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-neutral-300"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-neutral-300"
              >
                Apple Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/it-it/topic/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-neutral-300"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Aggiornamenti alla Cookie Policy</h2>
          <p className="text-neutral-200">
            Il titolare si riserva il diritto di aggiornare la presente Cookie Policy per adeguarla
            a eventuali modifiche normative o tecniche, o all&apos;introduzione di nuovi servizi.
            Eventuali aggiornamenti saranno pubblicati su questa pagina.
          </p>
        </section>
      </div>
    </main>
  );
}

