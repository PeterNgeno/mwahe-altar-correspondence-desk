const mediaItems = [
  { type: 'image', src: 'media/photo1.jpg' },
  { type: 'video', src: 'media/video1.mp4' }
];

const gallery = document.getElementById('gallery');
mediaItems.forEach(item => {
  const div = document.createElement('div');
  div.className = 'gallery-item';

  const media = item.type === 'image'
    ? `<img src="${item.src}" alt="Image">`
    : `<video controls><source src="${item.src}" type="video/mp4"></video>`;

  div.innerHTML = media + `
    <button class="download-btn" onclick="downloadMedia('${item.src}')">Download</button>
  `;

  gallery.appendChild(div);
});
