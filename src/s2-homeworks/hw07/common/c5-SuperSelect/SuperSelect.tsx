import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
    options,
    className,
    onChange,
    onChangeOption,
                                                         value,
    ...restProps
}) => {

    const mappedOptions: any[] = options
        ? options.map((o) => (
              <option
                  id={'hw7-option-' + o.value}
                  className={s.option}
                  key={o.id}
                  value={o.value}
                  selected={value===o.id}
              >
                  {o.value}
              </option>
          ))
        : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
       /* onChangeOption?.(e.currentTarget.value);*/

        onChangeOption?.(options?.find((o)=>e.currentTarget.value===o.value).id);

    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '');

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}

        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
