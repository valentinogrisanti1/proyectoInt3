import React from 'react'


function Card() {
    return (
        <main>
            <img src="./img/image-default.png" alt="" />
                <h3>Título/ Nombre</h3>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p>
                <section className="aditional-info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                </section>
                <a href="">Ver más</a>
                </main>
    );
}

export default Card;