import firebase from 'firebase'




import { FirebaseEasyPagination } from './src'

class Controller {
    private pagination: FirebaseEasyPagination

    constructor() {
        this.pagination = new FirebaseEasyPagination('users')
    }

    search() {
        this.pagination
            .search()
            .order('email', 'desc')
            .onExecute((response) => {
                console.log(response)
            })
    }

    next() {
        this.pagination.next()
    }

    prev() {
        this.pagination.prev()
    }

}















// Initialize Firebase
var config = {
    apiKey: "AIzaSyA47Q6ZymxRJsQcDmiINjs_6lIGqTEl1gg",
    authDomain: "tiker-63117.firebaseapp.com",
    databaseURL: "https://tiker-63117.firebaseio.com",
    projectId: "tiker-63117",
    storageBucket: "tiker-63117.appspot.com",
    messagingSenderId: "664566487582"
};
firebase.initializeApp(config);





window['DemoController'] = Controller

// em que pagina eu to?
// como fazer order by ?
// posso paginar com filtro?
// quantas paginas tem?
