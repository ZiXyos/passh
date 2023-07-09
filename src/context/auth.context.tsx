import { useRouter, useSegments } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

type User = {
	username: string;
}

type Context = {
        signIn: () => void,
        signOut: () => void,
        user: User | null,
}

const AuthContext = createContext<Context | null>(null);
const useAuth = () => useContext(AuthContext);

const useProtectedRoutes = (user: User | null) => {

	const rootSegment = useSegments()[0];
	const router = useRouter();

	useEffect(() => {
		if (user === null) {
			return;
		}

		if ( !user && rootSegment !== "(auth)") {
     		router.replace("/login");
    	} else if (user && rootSegment !== "(app)") {
      		router.replace("/");
    	}	
	}, [user, rootSegment])
}

const AuthProvider = ({ children }) => {
	const {
		getItem, 
		setItem, 
		removeItem 
	} = useAsyncStorage("USER");
	const [ user, setUser ] = useState<User | null>(null);

	useEffect(() => {
		getItem().then((json) => {
      		console.log("json", json);
      		if (json != null) setUser(JSON.parse(json));
      		else setUser(null);
     	});
	}, []);

	useProtectedRoutes(user);

	return (
		<AuthContext.Provider value={{
            signIn: () => {
              setUser({ username: ""});
              setItem(JSON.stringify({}));
            },
            signOut: () => {
              setUser(null);
              removeItem();
            },
            user,
        }}>
			{children}
		</AuthContext.Provider>
	)
}

export {
	AuthProvider,
	useAuth
}
