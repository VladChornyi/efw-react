import {useSelector, useDispatch} from 'react-redux';
import {actionPlus, actionMinus} from '../../redux/store';


export const Counter = () => {
const counter = useSelector((state) => state.counter);
const dispatch = useDispatch();

const plus = () => {
    dispatch(actionPlus())
}

const minus = () => {
    dispatch(actionMinus())
}
    return (
      <>
      <button onClick={plus}>Plus</button>
      <span>{counter}</span>
      <button onClick={minus}>Minus</button>
      </>
    )
}