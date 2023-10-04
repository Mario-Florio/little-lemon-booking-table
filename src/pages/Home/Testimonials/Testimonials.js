import "./Testimonials.css";
import testimonials from "./testimonialsData";

function Testimonials() {
    return(
        <section className="testimonials">
            <h3>Testimonials</h3>
            <section>
                {testimonials.map(testimonial => 
                    <Card 
                        rating={testimonial.rating}
                        img={testimonial.img}
                        review={testimonial.review}
                        name={testimonial.name}
                    />    
                )}
            </section>
        </section>
    );
}

export default Testimonials;

function Card(props) {

    const { rating, img, review, name } = props;

    return(
        <article className=".card">
            <div>
                <h5>{rating}</h5>
                <img src={img}/>
                <span>{review}</span>
            </div>
            <p>{name}</p>
        </article>
    );
}
