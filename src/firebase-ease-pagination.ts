import { FirebaseEaseOptions } from './interfaces/firebase-ease-options'
import { FirebaseEasySearch } from './firebase-ease-search'
import { apps, initializeApp } from 'firebase'

class FirebaseEasyPagination {

    private _search: FirebaseEasySearch
    private _currentPage: number

    constructor(public ref: string, public options: FirebaseEaseOptions) {
        options.pageSize = options.pageSize || 10
        if (apps.length == 0) {
            initializeApp(options.firebaseConfig)
        }
    }

    public search() {
        this._currentPage = 1
        this._search = new FirebaseEasySearch(this.ref, this._currentPage, this.options)
        return this._search
    }

    private checkSearch() {
        if (!this._search) {
            throw 'É preciso executar o a funcão de busca para navegar entre as paginas.'
        }
    }

    public next() {
        this.checkSearch()
        this._currentPage++
        this._search.executePage(this._currentPage)
    }

    public prev() {
        this.checkSearch()
        this._currentPage--
        this._search.executePage(this._currentPage)
    }

}

export { FirebaseEasyPagination }