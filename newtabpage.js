(function() {
  const theme = {
    bg: '#1f1d2e',
    surface: '#11111b',
    border: '#313244',
    text: '#cdd6f4',
    subtext: '#bac2de',
    accent: '#f5c2e7',
    accent2: '#94e2d5',
    highlight: '#f2cdcd'
  };

  const style = document.createElement('style');
  style.textContent = `
    * { box-sizing: border-box; }
    html, body { margin: 0; min-height: 100%; font-family: Inter, system-ui, sans-serif; background: ${theme.bg}; color: ${theme.text}; }
    body { display: flex; align-items: center; justify-content: center; padding: 24px; }
    .page { width: min(1120px, 100%); display: grid; gap: 24px; grid-template-columns: 1fr; }
    .panel { background: ${theme.surface}; border: 1px solid ${theme.border}; border-radius: 28px; padding: 28px; box-shadow: 0 20px 80px rgba(10, 10, 18, 0.35); }
    .header { display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; }
    .clock { font-size: clamp(2.5rem, 6vw, 4.5rem); line-height: 0.9; letter-spacing: -0.04em; }
    .date { color: ${theme.subtext}; font-size: 1rem; margin-top: 8px; }
    .search { width: 100%; position: relative; margin: 16px 0 0; }
    .search input { width: 100%; border: 1px solid ${theme.border}; border-radius: 999px; padding: 16px 20px; background: transparent; color: ${theme.text}; font-size: 1rem; outline: none; }
    .search input::placeholder { color: ${theme.subtext}; }
    .widgets { display: grid; gap: 20px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
    .widget { border: 1px solid ${theme.border}; border-radius: 24px; padding: 22px; background: rgba(255,255,255,0.02); display: flex; flex-direction: column; gap: 14px; }
    .widget h2 { margin: 0; font-size: 1rem; color: ${theme.accent}; }
    .widget p { margin: 0; color: ${theme.subtext}; font-size: 0.95rem; line-height: 1.6; }
    .quick-links { display: grid; gap: 14px; }
    .quick-link { display: inline-flex; align-items: center; gap: 12px; padding: 14px 16px; border-radius: 18px; background: rgba(255,255,255,0.03); text-decoration: none; color: ${theme.text}; border: 1px solid transparent; transition: border 0.2s ease, background 0.2s ease; }
    .quick-link:hover { background: rgba(255,255,255,0.06); border-color: ${theme.accent2}; }
    .quick-link .dot { width: 10px; height: 10px; border-radius: 50%; background: ${theme.accent2}; }
    .grid-2 { display: grid; gap: 20px; grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .note { color: ${theme.subtext}; font-size: 0.95rem; }
    @media (max-width: 720px) {
      .grid-2 { grid-template-columns: 1fr; }
    }
  `;
  document.head.appendChild(style);

  const root = document.createElement('div');
  root.className = 'page';

  const header = document.createElement('section');
  header.className = 'panel';
  const headerContent = document.createElement('div');
  headerContent.className = 'header';

  const clockBlock = document.createElement('div');
  const clockEl = document.createElement('div');
  clockEl.className = 'clock';
  clockEl.textContent = '--:--';
  const dateEl = document.createElement('div');
  dateEl.className = 'date';
  clockBlock.appendChild(clockEl);
  clockBlock.appendChild(dateEl);

  const search = document.createElement('form');
  search.className = 'search';
  search.innerHTML = '<input type="search" placeholder="Search the web..." aria-label="Search" />';
  search.addEventListener('submit', function(event) {
    event.preventDefault();
    const query = event.target.querySelector('input').value.trim();
    if (!query) return;
    window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);
  });

  headerContent.appendChild(clockBlock);
  headerContent.appendChild(search);
  header.appendChild(headerContent);
  root.appendChild(header);

  const widgets = document.createElement('section');
  widgets.className = 'widgets';

  const quickWidget = document.createElement('article');
  quickWidget.className = 'widget';
  quickWidget.innerHTML = '<h2>Quick access</h2><p>Minimal new tab with fast links to your favorite media and social hubs.</p>';
  const quickLinks = document.createElement('div');
  quickLinks.className = 'quick-links';
  const links = [
    { name: 'YouTube', href: 'https://www.youtube.com' },
    { name: 'TikTok', href: 'https://www.tiktok.com' },
    { name: 'Instagram', href: 'https://www.instagram.com' },
    { name: 'Twitter', href: 'https://twitter.com' }
  ];
  links.forEach(item => {
    const a = document.createElement('a');
    a.className = 'quick-link';
    a.href = item.href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = '<span class="dot"></span><span>' + item.name + '</span>';
    quickLinks.appendChild(a);
  });
  quickWidget.appendChild(quickLinks);

  const feedWidget = document.createElement('article');
  feedWidget.className = 'widget';
  feedWidget.innerHTML = '<h2>Media widgets</h2><p>Tap the cards to jump to a quick playlist, trending feed, or social feed.</p>';
  const mediaGrid = document.createElement('div');
  mediaGrid.className = 'grid-2';
  const mediaItems = [
    { title: 'YouTube trending', description: 'Open the latest trending videos.', href: 'https://www.youtube.com/feed/trending' },
    { title: 'TikTok Discover', description: 'See trending TikToks and popular creators.', href: 'https://www.tiktok.com/discover' },
    { title: 'YouTube Music', description: 'Launch music videos and curated mixes.', href: 'https://music.youtube.com' },
    { title: 'TikTok for You', description: 'Check the For You page quickly.', href: 'https://www.tiktok.com' }
  ];
  mediaItems.forEach(item => {
    const card = document.createElement('a');
    card.className = 'quick-link';
    card.href = item.href;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.style.padding = '18px';
    card.style.borderRadius = '20px';
    card.innerHTML = '<div><strong>' + item.title + '</strong><div class="note">' + item.description + '</div></div>';
    mediaGrid.appendChild(card);
  });
  feedWidget.appendChild(mediaGrid);

  widgets.appendChild(quickWidget);
  widgets.appendChild(feedWidget);
  root.appendChild(widgets);

  const infoPanel = document.createElement('section');
  infoPanel.className = 'panel';
  infoPanel.innerHTML = '<div class="note">Catppuccin Mocha-inspired minimal design with a clean clock, search, and quick links to YouTube, TikTok, and social media. Refresh to update time and start browsing instantly.</div>';
  root.appendChild(infoPanel);

  document.body.innerHTML = '';
  document.body.appendChild(root);

  function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clockEl.textContent = `${hours}:${minutes}:${seconds}`;
    dateEl.textContent = now.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
  }

  updateClock();
  setInterval(updateClock, 1000);
})();