

export default function Ratings(props){
  const {rating} = props;
 
  return (
    <div className="rating">
      <span className={rating >= 1 ? 'star yellow' : 'star'}>★</span>
      <span className={rating >= 2 ? 'star yellow' : 'star'}>★</span>
      <span className={rating >= 3 ? 'star yellow' : 'star'}>★</span>
      <span className={rating >= 4 ? 'star yellow' : 'star'}>★</span>
      <span className={rating >= 5 ? 'star yellow' : 'star'}>★</span>
    </div>
  );
}