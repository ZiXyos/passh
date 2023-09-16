<script lang="ts">

	import { 
		Client,
		signinReqSchema
	} from '@passh/shared'

	let email = '';
	let password = '';

	let client = new Client({
		baseEp: 'http://localhost:3333',
	})

	async function signIn() {
		console.log('clicked')
		const cred = await signinReqSchema.parseAsync({email, password})	
		try {
			const user = await client.auth.loginWithPassword(cred)
			console.log('logged', user)
		} catch(err) {
			
		}
	}
</script>

<div>
	<input bind:value={email} type="email" placeholder="enter email" />
	<input bind:value={password} type="password" placeholder="enter password" />

	<button on:click={signIn}>
		Please ADMIN LOGIN
	</button>
</div>
