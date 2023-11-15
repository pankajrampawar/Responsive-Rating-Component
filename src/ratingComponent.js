import React from 'react';
import star from './images/icon-star.svg'
import { useNavigate } from 'react-router-dom'

function RatingComponent() {

   const navigate = useNavigate(); 

  const[rating, setRating] = React.useState('');
  const[selected, setSelected] = React.useState(false);

  const handleRating = (value)=>{
    setRating(value); 

    // remove selected from all the rating component
    const ratingComponents = document.querySelectorAll('.rating-component');
    ratingComponents.forEach((component)=>{
        component.classList.remove('selected');
    });
    
    // Add selected class to the selected rating component
    const selectedComponent = document.querySelector(`.rating-component[value= "${value}"]`);
    if (selectedComponent) {
        selectedComponent.classList.add('selected')
    }

    setSelected(true);
  }

  const handleSubmit = ()=>{
    if(selected) {
      navigate(`/thanks/${rating}`)
    }
  }

  return (
    <div className='card'>
     <section className="star">
      <img src={star} alt='star icon'/>
     </section>
     <section className="heading">
      How did we do?
     </section>
     <section className='info'>
      Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
     </section>
     <section className='rating'>
      <span className={`rating-component ${rating === '1' ? 'selected' : 'unselected'}`} onClick={()=>{handleRating('1')}}>1</span>
      <span className={`rating-component ${rating === '2' ? 'selected' : 'unselected'}`} onClick={()=>{handleRating('2')}}>2</span>
      <span className={`rating-component ${rating === '3' ? 'selected' : 'unselected'}`} onClick={()=>{handleRating('3')}}>3</span>
      <span className={`rating-component ${rating === '4' ? 'selected' : 'unselected'}`} onClick={()=>{handleRating('4')}}>4</span>
      <span className={`rating-component ${rating === '5' ? 'selected' : 'unselected'}`} onClick={()=>{handleRating('5')}}>5</span>
     </section>
     <section>
      <button onClick={handleSubmit}>
        SUBMIT
      </button>
     </section>
    </div>
  );
}

export default RatingComponent;