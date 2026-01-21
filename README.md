```markdown
# Stop Dyskryminacji — prosta strona

Zawartość:
- index.html — główna strona
- styles.css — style (zmienna --accent do modyfikacji)
- script.js — prosty komentarzowy system demo (localStorage)
- logo.svg — proste logo

Jak zmienić kolor (żółty vs pomarańczowy):
- Otwórz `styles.css` i ustaw wartość `--accent`:
  - pomarańczowy (domyślnie): `#ff8c00`
  - żółty: `#ffd400`

Komentarze:
- Demo: obecnie komentarze są zapisywane lokalnie w przeglądarce (localStorage). To działa bez serwera, ale nie jest publiczne.
- Publiczne opcje:
  - Utterances (GitHub Issues) — prosty do wdrożenia, darmowy: https://utteranc.es/
  - Giscus (GitHub Discussions) — darmowy, wymaga Discussions: https://giscus.app/
  - Supabase / Firebase — własne backendy dla pełnej kontroli (wymagają konfiguracji i kluczy).

Instrukcja szybkiego wdrożenia (GitHub Pages):
1. Utwórz repozytorium na GitHub i wypchnij pliki.
2. W ustawieniach repo: Pages → wybierz branch (np. main) i folder (root).
3. Po chwili strona będzie dostępna jako `https://<user>.github.io/<repo>/`.

Darmowe hostingi (szczegóły w pliku HOSTING.md):
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

Uwaga prawna:
- Ta strona ma charakter edukacyjny i zbiera historie — nie gromadzi danych w tej wersji produkcyjnej. Jeśli chcesz zbierać dane osobowe, rozważ politykę prywatności i zabezpieczenia (GDPR, lokalne prawo).
```