const mediaItems = [
  { type: 'image', src: 'media/photo1.jpg' },
  { type: 'video', src: 'media/video1.mp4' }
];

const gallery = document.getElementById('gallery');

mediaItems.forEach(item => {
  const div = document.createElement('div');
  div.className = 'gallery-item';

  let content = '';

  if (item.type === 'image') {
    content = `<img src="${item.src}" alt="Image">`;
  } else if (item.type === 'video') {
    content = `<video controls width="100%"><source src="${item.src}" type="video/mp4">Your browser does not support the video tag.</video>`;
  }

  div.innerHTML = `
    ${content}
    <br>
    <button class="download-btn" onclick="downloadMedia('${item.src}')">Download</button>
  `;

  gallery.appendChild(div);
});
