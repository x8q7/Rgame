import { IPosition, IHeroProperty } from "common";

// 角色
class Hero implements IHeroProperty {
    public strength: number;
    public intelligence: number;
    public agility: number;
    public armor: number;
    public attack: number;
    public position: IPosition;
    public atkDistance: number;

    constructor(opts: IHeroProperty) {
        this.strength = opts.strength;
        this.intelligence = opts.intelligence;
        this.agility = opts.agility;
        this.armor = opts.armor;
        this.attack = opts.attack;
        this.position = opts.position;
        this.atkDistance = opts.atkDistance;
    }

    // 攻击
    public doAttack(){}

    // 移动
    public doMove(p: IPosition){}

    // 计算：与目标的距离
    public calcDistanceToTarget(tPosition: IPosition){}
}

export default Hero;