import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "./firebase";

const handleSubmit = async (title, artist) => {
    const ref = collection(firestore, "albums");

    let data = {
        title: title,
        artist: artist
    };

    try {
        await addDoc(ref, data);
    } 
    catch(err) {
        console.log(err)
    }
}

export default handleSubmit;