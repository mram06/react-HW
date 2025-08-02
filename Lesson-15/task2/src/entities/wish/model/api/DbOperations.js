import db from "@/shared/config/firebase-config";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  where,
} from "firebase/firestore/lite";

class DbOperations {
  constructor(name) {
    this.collectionRef = collection(db, name);
  }

  async getAll(searchTerm = "") {
    let q;

    if (searchTerm) {
      // Якщо є пошуковий термін, застосовуємо фільтр
      q = query(
        this.collectionRef,
        where("title", ">=", searchTerm),
        where("title", "<=", searchTerm + "\uf8ff"),
        orderBy("title")
      );
    } else {
      // Якщо немає пошукового терміна, просто сортуємо
      q = query(this.collectionRef, orderBy("title"));
    }

    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    return data;
  }

  async getById(id) {
    const snap = await getDoc(doc(this.collectionRef, id));
    return { id: snap.id, ...snap.data() };
  }

  async add(data) {
    await addDoc(this.collectionRef, data);
    return true;
  }
  async update(id, data) {
    await updateDoc(doc(this.collectionRef, id), data);
    return true;
  }
  async delete(id) {
    await deleteDoc(doc(this.collectionRef, id));
    return true;
  }
}

export default DbOperations;
