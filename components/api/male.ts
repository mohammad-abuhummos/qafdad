import { collection, doc, getDoc, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore"; 
import { db } from "../../firebase/init";


export const getFirtsMale = async () => {
    var formatData:any[] = [];
    const q = query(collection(db, "male"), orderBy("created", "desc"), limit(5));
    return await getDocs(q).then((snap) => {
      snap.docs.forEach((item) => {
        formatData.push({ id: item.id, ...item.data() });
      });
      return formatData;
    });
  };


const LIMIT = 50
var Api = collection(db, "male");
export const getMale = async (setLastVisible:any) => {
  var formatData:any[] = [];
  const q = query(Api, orderBy("created", "desc"), limit(LIMIT));
  return await getDocs(q).then((snap) => {
    setLastVisible(snap.docs[snap.docs.length - 1]);
    snap.docs.forEach((item) => {
      formatData.push({ id: item.id, ...item.data() });
    });
    return formatData;
  });
};

export const getMalePage = async (setLastVisible:any, lastVisible:any) => {
  var formatData:any[] = [];

  const q = query(
    Api,
    orderBy("created", "desc"),
    limit(LIMIT),
    startAfter(lastVisible)
  );
  return await getDocs(q).then((snap) => {
    setLastVisible(snap.docs[snap.docs.length - 1]);
    snap.docs.forEach((item) => {
      formatData.push({ id: item.id, ...item.data() });
    });
    return formatData;
  });
};

export const getMaleByname = async (name:any) => {
  var formatData:any[] = [];
  // const q = query(Api,where("title", '>=', name),where('title', '<=', name+ '\uf8ff'));
  const q = query(Api,where("keywords", "array-contains-any", name.split(" ")));
  return await getDocs(q).then((snap) => {
    snap.docs.forEach((item) => {
      formatData.push({ id: item.id, ...item.data() });
    });
    return formatData;
  });
};
export const getMaleByCity = async (city :any) => {
  var formatData:any[] = [];
  // const q = query(Api,where("title", '>=', name),where('title', '<=', name+ '\uf8ff'));
  const q = query(Api,where("city", "==", city));
  return await getDocs(q).then((snap) => {
    snap.docs.forEach((item) => {
      formatData.push({ id: item.id, ...item.data() });
    });
    return formatData;
  });
};

export const getSingleMale = async (id:any) => {
    var formatData: any = {};
           const docRef = doc(db, "male", id);
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


