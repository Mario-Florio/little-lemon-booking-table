import "./About.css";
import chefsImg from "./images/chefs.jpg";
import restaurantImg from "./images/restaurant.jpg";

function About() {
    return(
        <section className="about">
            <article>
                <h3>Little Lemon</h3>
                <h4>Chicago</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat est velit egestas dui id ornare. Et netus et malesuada fames ac. Tellus integer feugiat scelerisque varius morbi enim nunc. Facilisi cras fermentum odio eu feugiat. Pharetra et ultrices neque ornare aenean euismod elementum. Integer feugiat scelerisque varius morbi enim nunc faucibus a.
                </p>
                <p>
                    Iaculis urna id volutpat lacus laoreet non. Quis risus sed vulputate odio ut enim blandit volutpat. Leo urna molestie at elementum eu facilisis sed odio morbi. Est ante in nibh mauris cursus mattis molestie. In arcu cursus euismod quis viverra nibh. Vitae elementum curabitur vitae nunc. Netus et malesuada fames ac turpis egestas maecenas. Erat nam at lectus urna. Neque convallis a cras semper auctor neque vitae tempus.
                </p>
            </article>
            <section>
                <img className="restaurant" src={restaurantImg} alt=""/>
                <img className="chefs" src={chefsImg} alt=""/>
            </section>
        </section>
    );
}

export default About;
