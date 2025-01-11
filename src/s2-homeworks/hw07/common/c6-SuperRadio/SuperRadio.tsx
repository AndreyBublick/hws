import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: any[]
    onChangeOption?: (option: any) => void

    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
    id,
    name,
    className,
    options,
    value,
    onChange,
    onChangeOption,
    spanProps,
    ...restProps
}) => {
   /* const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // делают студенты

        onChangeOption?.(options?.find((o)=>e.currentTarget.value===o.value).id);
    }*/

    const finalRadioClassName = s.radio + (className ? ' ' + className : '')
    const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')

    const mappedOptions: any[] = options
        ? options.map((o) => {

            const onChangeCallback = () => {


                onChangeOption?.(o.id);
            }

             return <label key={name + '-' + o.id} className={s.label}>
                  <input
                      id={id + '-input-' + o.value}
                      className={finalRadioClassName}
                      type={'radio'}
                      // name, checked, value делают студенты
                      name={name}

                      checked={value===o.id}

                      value={o.value}

                      onChange={onChangeCallback}
                      {...restProps}
                  />
                  <span
                      id={id + '-span-' + o.value}
                      {...spanProps}
                      className={spanClassName}
                  >
                      {o.id}
                  </span>
              </label>
        })
        : []

    return <div className={s.options}>{mappedOptions}</div>
}

export default SuperRadio
