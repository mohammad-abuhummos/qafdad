import { collection, doc, getDoc, getDocs } from "firebase/firestore"; 
import { db } from "../../firebase/init";

export const getNews = async () => {
    var formatData:any[] = [];
const querySnapshot = await getDocs(collection(db, "news"));
querySnapshot.forEach((doc) => {
    formatData.push({id:doc.id,...doc.data()})
});
       return formatData

}
export const getSingleNews = async (id:any) => {
    var formatData: any = {};
           const docRef = doc(db, "news", id);
           const docSnap = await getDoc(docRef);
           
    if (docSnap.exists()) {
               formatData = {"id":docSnap.id,...docSnap.data()}
             console.log("Document data:", docSnap.data());
           } else {
             // doc.data() will be undefined in this case
             console.log("No such document!");
           }
       return formatData
}


