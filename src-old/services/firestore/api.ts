import { collection, query, getDocs } from "firebase/firestore";
import { DatabaseCategories } from "./Categories";
import database from "./database";


export const getMenu = async (category : DatabaseCategories | null) => {
    if(!category){
        return null;
    }

    const categoryRef = collection(database, `menu/DD8c1Lbi8WfFcq47Vz5L/${category}`);
    const docSnap = await getDocs(query(categoryRef));

    return docSnap.docs.map((document) => document.data());
}