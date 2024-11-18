
import { ChangeEventHandler, FC, useState } from 'react';

interface ITextAreaFieldProps {
    required?: boolean;
    label: string;
    name: string
    optional?: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>
}

export const TextAreaField: FC<ITextAreaFieldProps> = ({
    required = false,
    label = '',
    name,
    onChange,
    optional = false,
}) => {

    const [count, setCount] = useState<number>(500);

    const onValueChange = (e: any) => {
        if (!e.target.value) return;
        setCount(500 - e.target.value.length);
        onChange(e);
    }

    return (
        <div className='textareafield-container'>
            <div className='textareafield-label'>
                <span>{label}</span>
                <span>Maximum text length is {count} characters</span>
            </div>
            <textarea
                required={required}
                maxLength={500}
                rows={8}
                name={name}
                onChange={onValueChange}
            />
        </div>
    );
};
