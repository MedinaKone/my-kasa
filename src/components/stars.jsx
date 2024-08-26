
const Stars = ({ rating }) => {
    const totalStars = 5;
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
        if (i < rating) {
            stars.push(<span key={i} className="star filled">★</span>);
        } else {
            stars.push(<span key={i} className="star">☆</span>);
        }
    }

    return <div className="stars">{stars}</div>;
};

export default Stars;
