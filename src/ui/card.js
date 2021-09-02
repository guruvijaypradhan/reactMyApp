import './card.css';

const card = (props) =>
{
    return (
        <div className='card-border'>
          <span className='card-meassageFrom'>{props.messageFrom}</span>
            <span className='card-message'>{props.message}</span>
        </div>
    );
}

export default card;