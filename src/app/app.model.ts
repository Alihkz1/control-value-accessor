export class appModel {
    constructor(title: string) {
        this.canModel(title)
    }

    canModel(title: string = ''): void {
        console.log('appModel class' + ' ' + title)
    }
}