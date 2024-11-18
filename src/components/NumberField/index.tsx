
import { ChangeEventHandler, FC } from 'react';

interface INumberFieldProps {
    required?: boolean;
    label: string;
    name: string
    optional?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>
}

export const NumberField: FC<INumberFieldProps> = ({
    required = false,
    label = '',
    name,
    onChange = () => {},
    optional = false,
}) => {
    return (
        <div className='textfield-container'>
            <span>{label} {optional && <em> - optional</em>}</span>
            <input
                required={required}
                name={name}
                type='number'
                onBlur={onChange}
                onChange={onChange}
            />
        </div>
    );
};
