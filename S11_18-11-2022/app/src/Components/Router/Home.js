import React from "react";
import "./Home.css";

function Home(props) {
  return (
    <div className=" homeContainer">
      <div className="subContainer p-5">
        <h2 className="display-4">Welcome to React</h2>
        <p className="lead mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sunt
          facilis dolorum rerum sed laboriosam quibusdam inventore obcaecati ex
          fugit. Placeat culpa doloribus ad repudiandae eligendi amet nobis
          laborum reprehenderit accusamus quaerat id consectetur saepe assumenda
          distinctio maiores quibusdam atque, voluptates nemo ex illum numquam
          sequi? Libero quo optio, esse, recusandae consequuntur eum eos a sunt
          aperiam maiores id officia.
        </p>
        <button className="btn mt-2 btn-outline-primary">
          Explore More !!!
        </button>
      </div>
    </div>
  );
}

export default Home;
