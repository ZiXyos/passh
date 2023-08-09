import { getItem } from "../services";

export const fetchLocalItems = async (key: string) => {

    const res = await getItem({ key: key });
    if (res.ok) {
		const val = res.value;
		console.log(`value: ${val}`);
	} else {
		console.log(res.error);
	}
}
