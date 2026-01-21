// Prosty skrypt komentarzy (localStorage) — demo
// Przechowuje historie w localStorage pod kluczem "sd_comments"
(function(){
  const form = document.getElementById('story-form');
  const list = document.getElementById('comments-list');
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();

  const STORAGE_KEY = 'sd_comments_v1';

  function loadComments(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    }catch(e){
      console.error('Błąd ładowania komentarzy', e);
      return [];
    }
  }

  function saveComments(comments){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
  }

  function render(){
    const comments = loadComments();
    list.innerHTML = '';
    if(comments.length === 0){
      list.innerHTML = '<p class="muted">Brak historii. Bądź pierwszy(-a), który opublikuje swoją historię.</p>';
      return;
    }
    comments.slice().reverse().forEach(c=>{
      const el = document.createElement('article');
      el.className = 'comment';
      const title = document.createElement('h3');
      title.textContent = c.title || 'Bez tytułu';
      const who = document.createElement('div');
      who.className = 'muted';
      who.textContent = c.name ? `od ${c.name}` : 'od anonimowego';
      const body = document.createElement('p');
      body.textContent = c.story;
      const time = document.createElement('time');
      time.setAttribute('datetime', c.timestamp);
      time.textContent = new Date(c.timestamp).toLocaleString();
      el.appendChild(title);
      el.appendChild(who);
      el.appendChild(body);
      el.appendChild(time);
      list.appendChild(el);
    });
  }

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = form.name.value.trim();
    const title = form.title.value.trim();
    const story = form.story.value.trim();
    const consent = form.consent.checked;

    if(!title || !story){
      alert('Proszę wypełnić tytuł i historię.');
      return;
    }
    if(!consent){
      alert('Musisz wyrazić zgodę na publikację historii.');
      return;
    }

    const comments = loadComments();
    comments.push({
      id: Date.now() + '-' + Math.random().toString(36).slice(2,8),
      name: name || '',
      title,
      story,
      timestamp: new Date().toISOString()
    });
    saveComments(comments);
    form.reset();
    render();
    // Mały feedback
    alert('Twoja historia została zapisana lokalnie. Aby opublikować publicznie, postępuj zgodnie z instrukcjami w README.');
  });

  // init
  render();
})();