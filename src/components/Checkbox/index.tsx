
import { ChangeEventHandler, FC, useState } from 'react';

interface ICheckboxProps {
    label: string;
    onChange: ChangeEventHandler<HTMLInputElement>
}

export const Checkbox: FC<ICheckboxProps> = ({
    label,
    onChange
}) => {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className='checkbox'>
            <input
                type='checkbox'
                checked={checked}
                onClick={() => setChecked((prev) => !prev)}
                onChange={onChange}
            />
            <span>{label}</span>
        </div>
    );
};
