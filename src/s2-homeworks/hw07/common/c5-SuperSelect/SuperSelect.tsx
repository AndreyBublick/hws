import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent, useMemo,
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
    value,
    onChangeOption,
    ...restProps
}) => {

    const mappedOptions: any[] = options
        ? options.map((o) => (
              <option
                  id={'hw7-option-' + o.value}
                  className={s.option}
                  key={o.id}
                  /*value={o.id}*/
                  value={o.value}
              >
                  {o.value}
              </option>
          ))
        : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
       /* onChangeOption?.(e.currentTarget.value);*/

        onChangeOption?.(e.currentTarget.value);

    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '');




    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
            value={value}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
