
import { ChangeEventHandler, FC } from 'react';

interface ITextFieldProps {
    required?: boolean;
    label: string;
    name: string
    optional?: boolean;
    onBlur?: ChangeEventHandler<HTMLInputElement>
    onChange?: ChangeEventHandler<HTMLInputElement>
}

export const TextField: FC<ITextFieldProps> = ({
    required = false,
    label = '',
    name,
    onBlur = () => {},
    onChange = () => {},
    optional = false,
}) => {
    return (
        <div className='textfield-container'>
            <span>{label} {optional && <em> - optional</em>}</span>
            <input
                required={required}
                name={name}
                type='text'
                onBlur={onBlur}
                onChange={onChange}
            />
        </div>
    );
};
