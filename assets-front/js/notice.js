(function () {
  if (window.__mtv_notice_injected__) return;
  window.__mtv_notice_injected__ = true;

  // Skip on homepage
  try { if ((location && (/^(\/|.*\/(index\.html))$/.test(location.pathname)))) { return; } } catch(e) {}

  function createNotice() {
    var notice = document.createElement('div');
    notice.setAttribute('role', 'region');
    notice.setAttribute('aria-label', 'Site update notice');
    notice.style.position = 'sticky';
    notice.style.top = '0';
    notice.style.zIndex = '1060';
    notice.style.width = '100%';
    notice.style.background = '#fff3cd'; /* Bootstrap warning bg */
    notice.style.borderBottom = '1px solid #ffe69c';
    notice.style.color = '#664d03';
    notice.style.fontSize = '0.95rem';
    notice.style.lineHeight = '1.4';
    notice.style.padding = '0.75rem 1rem';

    var container = document.createElement('div');
    container.style.maxWidth = '1140px';
    container.style.margin = '0 auto';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = '0.75rem';

    var icon = document.createElement('span');
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = '⚠️';
    icon.style.fontSize = '1.1rem';

    var text = document.createElement('span');
    text.textContent = 'This website is no longer updated following the launch of our new site. It remains fully functional and purchases still work, but the latest papers are only available on our new platform';

    container.appendChild(icon);
    container.appendChild(text);
    notice.appendChild(container);

    var insertionPoint = document.body;
    if (!insertionPoint) return;

    // Insert as the very first element inside body
    insertionPoint.insertBefore(notice, insertionPoint.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createNotice);
  } else {
    createNotice();
  }
})();


