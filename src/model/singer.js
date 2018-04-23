export class Singer {
    constructor(id, mId, name, img) {
        this.id = id
        this.mId = mId
        this.name = name
        this.img = img
    }
}

export function createSingerBySearch(data) {
    return new Singer(
        data.singerid,
        data.singermid,
        data.singername,
        `http://y.gtimg.cn/music/photo_new/T001R68x68M000${data.singermid}.jpg?max_age=2592000`
    )
}