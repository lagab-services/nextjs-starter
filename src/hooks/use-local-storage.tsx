import {useEffect, useState} from 'react'

interface LocalStorageProps<T> {
    key: string
    defaultValue: T
}

export default function useLocalStorage<T>({
                                               key,
                                               defaultValue,
                                           }: LocalStorageProps<T>) {
    const [value, setValue] = useState<T>(() => {
        try {
            const storedValue = localStorage.getItem(key)
            return storedValue !== null ? (JSON.parse(storedValue) as T) : defaultValue
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`)
            return defaultValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])

    return [value, setValue] as const
}