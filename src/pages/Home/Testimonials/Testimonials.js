import "./Testimonials.css";
import testimonials from "./testimonialsData";
import star from "./images/star.png"

function Testimonials() {
    return(
        <section className="testimonials">
            <h3>Testimonials</h3>
            <section>
                {testimonials.map(testimonial => 
                    <Card 
                        key={testimonial.name}
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

    function generateStars(rating) {
        let arr = [];
        for (let i = 0; i < rating; i++) {
            arr.push("");
        }
        return arr;
    }

    return(
        <article className="card">
            <div>
                <div>
                    <div style={{ marginBottom: ".5rem" }}>
                        {generateStars(rating).map((rating, i) =>
                            <img 
                                key={i}
                                src={star} 
                                alt="star"
                                style={{
                                    width: "15px",
                                    height: "15px",
                                }}
                            />
                        )}
                    </div>
                    <img src={img} alt={`${name}'s profile pic`}/>
                </div>
                <p>{name}</p>
            </div>
            <span>{review}</span>
        </article>
    );
}
