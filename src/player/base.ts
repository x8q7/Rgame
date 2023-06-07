// 属性
interface IProperty {
    strength: number;           // 力量
    intelligence: number;       // 智力
    agility: number;            // 敏捷
    armor: number;              // 护甲
    attack: number;             // 攻击力
}

// 角色
class Hero implements IProperty {
    public strength: number;
    public intelligence: number;
    public agility: number;
    public armor: number;
    public attack: number;

    constructor(opts: IProperty) {
        this.strength = opts.strength;
        this.intelligence = opts.intelligence;
        this.agility = opts.agility;
        this.armor = opts.armor;
        this.attack = opts.attack;
    }

    // 攻击
    public doAttack(){}
}

export default Hero;