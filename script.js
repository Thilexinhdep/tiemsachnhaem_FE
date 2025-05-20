function scrollBooks(direction) {
    const container = document.getElementById("bookList");
  
    if (!container) return;
  
    const item = container.querySelector(".book-item");
    if (!item) return;
  
    const itemWidth = item.offsetWidth;
    const gap = 16; // khoảng cách giữa các sách (1rem = 16px)
    const scrollAmount = (itemWidth + gap) * 5;
  
    if (direction === 'right') {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    } else {
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  }
  