import React from 'react'
import "../Card/index.css"

export default function Card(props) {
  function deleteModal() {
    props.modal(true)
    props.backOpasity(true)
  }
  return (
    <>
      <div class="card">
        <div class="header">
          <span class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          <p  class="text">{props.text}</p>
          </span>
          
        </div>
        <img className='img' src="https://picsum.photos/id/238/200/300" />
        <p class="message">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo
          unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
        </p>

        <div class="actions">
          <button onClick={deleteModal} href="" class="read">
            {" "}
            Learn more{" "}
          </button>


        </div>
      </div>
    </>
  )
}
