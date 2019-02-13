import { FirebaseEaseOptions } from './interfaces/firebase-ease-options'
import { FirebaseEaseCondition } from './interfaces/firebase-ease-condition'
import firebase from 'firebase'

class FirebaseEasySearch {
    private db
    private callback
    private orders: Array<{ field: string, dir: string }>
    private conditions: Array<FirebaseEaseCondition>
    private values: Array<any>
    private pageSize: number

    constructor(public ref: string, public _currentPage: number, public options?: FirebaseEaseOptions) {
        this.db = firebase.firestore()
        this.conditions = []
        this.orders = []
        this.pageSize = this.options ? this.options.pageSize : 10
    }

    where(condition) {
        this.conditions.push(condition)
        return this
    }

    order(field: string, dir: string = 'asc') {
        this.orders.push({ field, dir })
        return this
    }

    private executeOrder(arr) {
        if (this.orders.length > 0) {
            this.orders.forEach((order) => {
                arr.sort((a, b) => {
                    if (a[order.field] < b[order.field])
                        return -1
                    if (a[order.field] > b[order.field])
                        return 1
                    return 0
                })
                if (order.dir === 'desc') {
                    arr.reverse()
                }
            })
        }
        return arr
    }

    private createValues(docs) {
        const values = docs.map((doc) => Object.assign({ _id: doc.id }, doc.data()))
            .filter((row) => {
                if (this.conditions.length > 0) {
                    const params = Object.keys(row), paramsValues = params.map((param) => row[param])
                    return new Function(...params, `
                        return ${this.conditions.join(' && ')}
                    `)(...paramsValues)
                }
                return true
            })
        return this.executeOrder(values)
    }

    private paginate(array, pageSize, page) {
        --page
        return array.slice(page * pageSize, (page + 1) * pageSize);
    }

    executePage(page) {
        this.callback({
            count: this.values.length,
            pageSize: this.pageSize,
            page,
            values: this.paginate(this.values, this.pageSize, page),
        })
    }

    async onExecute(_callback) {
        this.callback = _callback
        const firebaseRef = this.db.collection(this.ref)
        const response = await firebaseRef.get()
        this.values = this.createValues(response.docs)
        this.executePage(this._currentPage)
    }

}

export { FirebaseEasySearch }