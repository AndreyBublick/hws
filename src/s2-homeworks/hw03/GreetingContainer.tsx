import React, {ChangeEvent, Dispatch, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name:string)=>void // need to fix any
}
export type SetErrorType = Dispatch<React.SetStateAction<string|null>>;
export type SetNameType = Dispatch<React.SetStateAction<string>>;
/*export type  AddUserCallbackType = Dispatch<React.SetStateAction<string>>;*/
export const pureAddUser = (name: string, setError: SetErrorType, setName: SetNameType, addUserCallback: (name:string)=>void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if(name.trim()){
        addUserCallback(name);
        setName('');
    }
    else{
        setError('Ошибка! Введите имя!');
    }
}

export const pureOnBlur = (name: string, setError: SetErrorType) => { // если имя пустое - показать ошибку

    if(!name.trim()){
        setError('Ошибка! Введите имя!');
    }

}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: ()=>void) => { // если нажата кнопка Enter - добавить

    if(e.key === 'Enter'){
        addUser();
    }

}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback,}) => {
    // деструктуризация пропсов

    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string|null>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value); // need to fix
        error && setError('');
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length; // need to fix
    const lastUserName = users.length> 0 ? users[users.length - 1].name : 'Введи своём имя'; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
