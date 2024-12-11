import React, {Dispatch} from 'react'
import Affair from './affair/Affair'
import {AffairType, FilterType} from '../HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[] // need to fix any
    setFilter:  Dispatch<React.SetStateAction<FilterType>>
    deleteAffairCallback: (_id:number)=>void,
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const setAll = () => {
        // need to fix

        props.setFilter("all");
    }
    const setHigh = () => {
        props.setFilter("high");

        // need to fix
    }
    const setMiddle = () => {
        // need to fix
        props.setFilter("middle");

    }
    const setLow = () => {
        // need to fix
        props.setFilter("low");

    }

   /* const cnAll = s.button + ' ' + s.all + (props.filter === 'all' ? ' ' + s.active : '')
    const cnHigh = s.button + ' ' + s.high + (props.filter === 'high' ? ' ' + s.active : '')
    const cnMiddle = s.button + ' ' + s.middle + (props.filter === 'middle' ? ' ' + s.active : '')
    const cnLow = s.button + ' ' + s.low + (props.filter === 'low' ? ' ' + s.active : '')*/

    const setClass = (valueFilter:FilterType)=>{
        return  s.button + ' ' + s[valueFilter] + (props.filter === valueFilter ? ' ' + s.active : '');
    };

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ));


    return (
        <div>
            <div className={s.buttonContainer}>
                <button
                    id={'hw2-button-all'}
                    onClick={setAll}
                    className={setClass('all')}
                >
                    All
                </button>
                <button
                    id={'hw2-button-high'}
                    onClick={setHigh}
                    className={setClass('high')}
                >
                    High
                </button>
                <button
                    id={'hw2-button-middle'}
                    onClick={setMiddle}
                    className={setClass('middle')}
                >
                    Middle
                </button>
                <button
                    id={'hw2-button-low'}
                    onClick={setLow}
                    className={setClass('low')}
                >
                    Low
                </button>
            </div>
            <div className={s.affairs}>{mappedAffairs}</div>
        </div>
    )
}

export default Affairs
