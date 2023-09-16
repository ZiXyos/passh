'use client'

import { FormEvent, useState } from "react"


type FormProps = {}

export default function Form({}: FormProps) {

	let [email, setEmail] = useState<string>('')
	let [password, setPassword] = useState<string>('')

	const handleEmail = (e: FormEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value)
	}

	const handlePassword = (e: FormEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value)
	}

	const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
		console.log({ email, password })

	}

	return (
		<div>
			<input onChange={handleEmail} content={email}/>

			<input onChange={handlePassword} content={password}/>

			<button onClick={handleSubmit} />
		</div>	
	)
}
