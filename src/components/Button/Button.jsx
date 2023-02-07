import {Btn} from './Button.styled';

export const Button = ({children, main}) => {
    return <Btn main={main}>{children}</Btn>
}