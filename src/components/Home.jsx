import React from 'react'
import vg from "../assets/2.webp"
import {
  AiFillGoogleCircle, 
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className="home" id="home">
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, autem quidem aspernatur fugit, qui dicta harum totam officia et ex quae unde similique assumenda modi nostrum. Atque provident odio corrupti Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore optio, ipsam dolorem quidem aliquam assumenda magni maxime ratione consequuntur alias tempore? Ad molestiae culpa nam rerum corrupti? Culpa, similique dolor.</p>
        </div>
    </div>

    <div className="home3" id='about'>

      <div>
        <h1>Who we are?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores nulla consectetur eligendi, vitae corporis numquam vel praesentium commodi eaque quas. Expedita ipsam laudantium aliquam, odio consequuntur inventore reiciendis quae vitae est corrupti aut officia, non ab cumque atque reprehenderit sit recusandae? Obcaecati dicta accusantium debitis, expedita nobis veniam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro blanditiis nesciunt, praesentium vel nam in facere ut tempora explicabo consequuntur temporibus maiores ipsam magnam officiis totam accusantium rem ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci odit fugiat voluptatibus magni hic aspernatur harum vero esse quisquam voluptatem omnis sit laboriosam culpa eligendi, molestiae iure error facilis rerum.
        </p>
      </div>
    </div>

    <div className="home4" id='brands'>
      <div>
        <h1>Brand</h1>
        <article>
          <div style={
            {
              animationDelay: "0.3s",
            }}
            >
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>
          <div style={
            {
              animationDelay: "0.5s",
            }}
            >
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>
          <div style={
            {
              animationDelay: "0.7s",
            }}
            >
            <AiFillYoutube />
            <p>Youtube</p>
          </div>
          <div style={
            {
              animationDelay: "1s",
            }}
            >
            <AiFillInstagram />
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  );
}

export default Home;