import {Storage} from '@ionic/storage';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class StorageService {
    constructor(public storage: Storage) {
    }

    getData(item) {
        console.log(item);
        return this.storage.get(item);
    }

    save(item, data) {
        let newData = JSON.stringify(data);
        this.storage.set(item, newData);
    }

    remove(item) {
        this.storage.remove(item);
    }
}
