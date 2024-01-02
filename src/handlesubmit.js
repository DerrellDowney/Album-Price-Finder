import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "./firebase_setup";

const handleSubmit = async (title, artist, id) => {
    const ref = collection(firestore, "albums");

    let data = {
        title: title,
        artist: artist,
        id: id
    };

    try {
        await addDoc(ref, data);
    } 
    catch(err) {
        console.log(err)
    }
}

export default handleSubmit;