import {ref} from 'vue'
import { projectFiresore } from '../firebase/config'

const useCollection = (collection) => {
    let error = ref(null)

    const addDoc = async(doc) => {
        error.value = null

        try {
            await projectFiresore.collection(collection).add(doc)

        } catch (err) {
            console.log(err.message)
            error.value = 'Could not send the message'
        }
    }

    return { error, addDoc}
}

export default useCollection