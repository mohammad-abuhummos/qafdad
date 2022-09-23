import { collection, doc, getDoc, getDocs, limit, orderBy, query } from "firebase/firestore"; 
import { db } from "../../firebase/init";


export const getFemale = async () => {
    var formatData:any[] = [];
    const q = query(collection(db, "female"), orderBy("created", "desc"), limit(50));
    return await getDocs(q).then((snap) => {
      snap.docs.forEach((item) => {
        formatData.push({ id: item.id, ...item.data() });
      });
      return formatData;
    });
  };


export const getSingleFemale = async (id:any) => {
    var formatData: any = {};
           const docRef = doc(db, "female", id);
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


