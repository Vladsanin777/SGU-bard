const scrollbars = document.querySelectorAll('.scrollable');

for (const scrollbar of scrollbars) {
  // Добавьте стили к элементам скроллбара
  scrollbar.style.width = '400px';
  scrollbar.style.height = '200px';
  scrollbar.style.border = '1px solid #ccc';
  scrollbar.style.overflow = 'hidden';
  
  // Создайте элемент полосы прокрутки
  const scrollbarTrack = document.createElement('div');
  scrollbarTrack.classList.add('scrollbar-track');
  scrollbar.appendChild(scrollbarTrack);
  
  // Создайте элемент ползунка
  const thumb = document.createElement('div');
  thumb.classList.add('thumb');
  scrollbarTrack.appendChild(thumb);
  
  // Функция для обновления положения ползунка
  function updateScrollbar() {
    const containerHeight = scrollbar.offsetHeight;
    const contentHeight = scrollbar.scrollHeight;
    const thumbHeight = thumb.offsetHeight;
    const scrollTop = scrollbar.scrollTop;
    const thumbRatio = scrollTop / (contentHeight - containerHeight);
    thumb.style.top = `${thumbRatio * containerHeight}px`;
  }
  
  // Добавление события прокрутки
  scrollbar.addEventListener('scroll', updateScrollbar);
  
  // Обновление положения ползунка при загрузке страницы
  updateScrollbar();
  
  // Стилизация элементов полосы прокрутки
  scrollbarTrack.style.width = '10px';
  scrollbarTrack.style.height = '100%';
  scrollbarTrack.style.backgroundColor = '#f5f5f5';
  scrollbarTrack.style.borderRadius = '8px';
  
  thumb.style.width = '10px';
  thumb.style.height = '20px';
  thumb.style.backgroundColor = '#ccc';
  thumb.style.borderRadius = '8px';
}
