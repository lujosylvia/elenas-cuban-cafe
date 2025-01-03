import { collection, query, getDocs } from 'firebase/firestore';
import { ref, getDownloadURL } from "firebase/storage";
import { DatabaseCategories } from "./Categories";
import database, { storage } from './database';


export const getMenu = async (category : DatabaseCategories | null) => {
    if(!category){
        return null;
    }

    const categoryRef = collection(database, `menu/DD8c1Lbi8WfFcq47Vz5L/${category}`);
    const docSnap = await getDocs(query(categoryRef));

    return docSnap.docs.map((document) => document.data());
}

export const fetchImageUrl = async (imageName: string) => {
  const storageRef = ref(storage, `${imageName}.png`);
  return await getDownloadURL(storageRef);
  
};