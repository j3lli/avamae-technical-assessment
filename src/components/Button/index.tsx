
import { FC } from 'react';
import { classnames } from '../../functions';



interface IButtonProps {
    type?: any;
    startIcon?: any;
    className?: string;
    text: string;
    onClick: (e?: any) => void;
}

export const Button: FC<IButtonProps> = ({
    type = '',
    startIcon,
    className = '',
    text,
    onClick
}) => {

    return (
        <button
            type={type}
            className={classnames(className, 'button-base')}
            onClick={onClick}
        >
            <span>{startIcon}</span>
            <span>{text}</span>
        </button>
    );
};
