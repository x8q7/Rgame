// 位置
export interface IPosition {
    x: number;          // x坐标
    y: number;          // y坐标
}

// 英雄属性
export interface IHeroProperty {
    strength: number;           // 力量
    intelligence: number;       // 智力
    agility: number;            // 敏捷
    armor: number;              // 护甲
    attack: number;             // 攻击力
    atkDistance: number;        // 攻击距离
    position: IPosition;        // 坐标位置
}

// 等级限制
export interface ILimitLv {
    start: number;          // 开始
    end: number;            // 结束
}

// 世界属性

// 大陆属性
export interface ILand {
    // east: IPosition;        // 东
    // south: IPosition;       // 南
    // west: IPosition;        // 西
    // north: IPosition;       // 北
    width: number;          // 宽
    height: number;         // 高

    lvLimit: ILimitLv;      // 等级限制
}