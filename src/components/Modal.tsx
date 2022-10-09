import React from 'react'

interface ModalProps {
    children: React.ReactNode
    title: string
}

export default function Modal({ children, title }: ModalProps) {
    return (
        <>
            <div className="fixed bg-black/70 top-0 right-0 bottom-0 left-0"></div>
            <div className="w-[500px] p-5 rounded bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-2xl text-center mb-4">{title}</h1>
                {children}
            </div>
        </>
    )
}
