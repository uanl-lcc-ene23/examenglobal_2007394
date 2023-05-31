import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { initializeApp } from "firebase/app";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth, onAuthStateChanged } from "firebase/auth";
//import { User } from '../user';
//import { Usercom } from '../usuariocomponente';
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, deleteDoc,query, getDoc} from 'firebase/firestore';
import { getDatabase } from "firebase/database";
import { Firestore } from 'firebase/firestore';
import { Observable } from 'rxjs';


const firebaseApp = initializeApp(environment.firebaseConfig);
//Se accede a la parte que almacena informacion de bases de datos en firebase
const dbCloudFirestore = getFirestore(firebaseApp);
//Se hace una constante que esta definida por lo anterior
const db = dbCloudFirestore;
//Ahora una constante que gracias a db nos deja seleccionar la coleccion
const  q = query(collection(db,"playlist"));

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  album: any[] =[]
  albumb: any[] = []
  albumc: any = ""
  constructor() { }

  async getalbum(){
    this.album = []

    
    const querySnapchot = await getDocs(q);
    querySnapchot.forEach((doc)=>{
      this.album.unshift(doc.data())
      console.log(doc.data())
    })
  }

  async pornombre(nombre:string){
    this.albumb = []
    const querySnapchot = await getDoc(doc(db,'albums',nombre));
    console.log(querySnapchot.data());
    return querySnapchot.data();
  }



    
}