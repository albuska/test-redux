// import { logIn, logOut } from './redux/u';
import { useSelector, useDispatch } from 'react-redux';


// const dispatch = useDispatch();
// const value = useSelector(state => state.myValue);
// console.log(value);

export const Form = () => {
    return <div>
    <form>
        <input type="text" name="login" />
        <br />
        <button type="submit">Log in</button>
      </form>
</div>
}