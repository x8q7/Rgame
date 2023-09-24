import { ILand, ILimitLv } from "common";


// 大陆地图
class Land implements ILand {
    width: number;
    height: number;
    lvLimit: ILimitLv;
    constructor(opts: ILand) {
        this.width = opts.width;
        this.height = opts.height;
        this.lvLimit = opts.lvLimit;
    }

}

export default Land;