import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = ["Hello", "NiHao", "Konnichiwa", "Hola", "Aloha"];
const i = Math.floor(Math.random() * word.length);
const photo = ["http://www.thaifly.com/image/data/img_thaifly/article/england/infoengland.jpg2.jpg", "https://s.isanook.com/ca/0/ud/277/1387785/greatwall.jpg", "http://www.thaifly.com/image/data/img_thaifly/article/Japan/sakuranight.jpg", "https://costadefuego.com/wp-content/uploads/2019/10/%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B8%AA%E0%B9%80%E0%B8%9B%E0%B8%99.jpg", "https://my.kapook.com/imagescontent/fb_img/804/s_68600_7933.jpg" ];

function App() {
  return (
  <div>
    <center> <img src={photo[i]} width="500px" height="350px"/></center>
    <center><WordCard value={word[i]}/></center>
  </div>
  );
}

export default App;
